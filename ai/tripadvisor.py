from collections import defaultdict
from email.policy import default
import requests
import json
from tqdm import tqdm
import pandas as pd
import pickle


API_KEY = "484C764ACA524F14841D32D65390C8FF"


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
    for name, id in info:
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


if __name__ == "__main__":
    lat, lon = 35.652832, 139.839478
    category = "restaurants"
    get_location_info(category, lat, lon, path="./data/restaurants_id.bin")
    with open("./data/restaurants_id.bin", "rb") as f:
        data = pickle.load(f)
        get_location_details(data, "./data/tokyo_restaurants.csv")
