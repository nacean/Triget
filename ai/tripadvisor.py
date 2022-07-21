import requests
import json
from tqdm import tqdm


def nearby_search(lat, lon, category, apiKey):
    url = f"https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong={lat}%2C{lon}&category={category}&language=en&radius=10&radiusUnit=km&key={apiKey}"
    headers = {"Accept": "application/json"}
    response = requests.get(url, headers=headers)
    return json.loads(response.text)["data"]


def get_location_info(category, lat, lon):
    apiKey = "484C764ACA524F14841D32D65390C8FF"
    data = []
    for i in range(-2, 2):
        for j in range(-2, 2):
            data = data + nearby_search(lat+0.05*i,
                                        lon+0.05*j, category, apiKey)
    a = list(x["name"] for x in data)
    for i in sorted(set(a)):
        print(i)


if __name__ == "__main__":
    lat, lon = 35.652832, 139.839478
    category = "attractions"
    get_location_info(category, lat, lon)
