from collections import defaultdict
from email.policy import default
import requests
import json
from tqdm import tqdm
import pandas as pd
import pickle
from config import Config


API_KEY = Config.API_KEY


def nearby_search(lat, lon, category):
    url = f"https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong={lat}%2C{lon}&category={category}&language=en&radius=10&radiusUnit=km&key={API_KEY}"
    headers = {"Accept": "application/json"}
    response = requests.get(url, headers=headers)
    return json.loads(response.text)["data"]


def get_location_info(category, lat, lon, path):
    data = []
    for i in range(-2, 2):
        for j in range(-2, 2):
            data = data + nearby_search(lat+0.05*i,
                                        lon+0.05*j, category)
    data = list(map(lambda x: (x["name"], x["location_id"]), data))
    with open(path, "wb") as f:
        pickle.dump(list(set(data)), f)


def get_location_details(info, path):
    data = defaultdict(list)
    keys = set()
    tmp = []
    for name, id in tqdm(info):
        url = f"https://api.content.tripadvisor.com/api/v1/location/{id}/details?language=en&currency=USD&key={API_KEY}"
        headers = {"Accept": "application/json"}
        response = requests.get(url, headers=headers)
        row = json.loads(response.text)
        keys = keys.union(row.keys())
        tmp.append(row)
    for row in tmp:
        for key in keys:
            if key not in row.keys():
                data[key].append(None)
            else:
                data[key].append(row[key])
    data = pd.DataFrame(data)
    data.to_csv(path, index=False)


def get_location_photos(city, category):
    df = pd.read_csv(f"./data/{city}_{category}_db.csv")
    url_dict = dict()
    url_list = []
    for id in tqdm(df["tripadvisor_id"].to_list()):
        url = f"https://api.content.tripadvisor.com/api/v1/location/{id}/photos?language=en&key={API_KEY}"
        headers = {"Accept": "application/json"}
        response = requests.get(url, headers=headers)
        row = json.loads(response.text)["data"]
        if len(row) > 0:
            url_dict[id] = row[0]["images"]["original"]["url"]
            url_list.append(row[0]["images"]["original"]["url"])
        else:
            url_dict[id] = None
            url_list.append(None)
    df["thumbnail"] = url_list
    df.to_csv(f"./data/{city}_{category}_db.csv", index=False)


def get_location_reviews(city, category):
    df = pd.read_csv(f"./data/{city}_{category}_db.csv")
    location_id = []
    text = []
    names = []
    for name, id in zip(df["name"].to_list(), tqdm(df["tripadvisor_id"].to_list())):
        url = f"https://api.content.tripadvisor.com/api/v1/location/{id}/reviews?language=en&key={API_KEY}"
        headers = {"Accept": "application/json"}
        response = requests.get(url, headers=headers)
        row = json.loads(response.text)["data"]
        data = list(
            map(lambda x: (x["location_id"], name, (x["title"]+" "+x["text"]).replace("\n", "").rstrip()), row))
        for x, y, z in data:
            location_id.append(x)
            names.append(y)
            text.append(z)
    review_df = pd.DataFrame({
        "location_id": location_id,
        "text": text,
        "name": names
    })
    review_df.to_csv(f"./data/{city}_{category}_review.csv", index=False)


if __name__ == "__main__":
    # lat, lon = 35.652832, 139.839478 # 도쿄
    # lat, lon, city = 21.3156, -157.8580, "honolulu"  # 호놀룰루
    # category = "attractions"
    # get_location_info(category, lat, lon, path=f"./data/{category}_id.bin")
    # with open(f"./data/{category}_id.bin", "rb") as f:
    #     data = pickle.load(f)
    #     get_location_details(data, f"./data/{city}_{category}.csv")
    for i in ["attraction", "restaurant"]:
        get_location_reviews("honolulu", i)
        get_location_photos("honolulu", i)
