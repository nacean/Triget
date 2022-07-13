from collections import defaultdict
import pickle
import json
import pandas as pd


def hotel_info():
    with open("tokyo_hotels.bin", "rb") as f:
        data = pickle.load(f)

    hotels = []
    for i in data:
        page = json.loads(i)
        hotels = hotels + page["result"]

    data = defaultdict(list)
    keys = set(hotels[0].keys())
    for i in hotels:
        keys = keys.intersection(set(i.keys()))
    print(keys)
    for i in hotels:
        for key in keys:
            data[key].append(i[key])

    df = pd.DataFrame(data)
    df.to_csv("tokyo_hotels.csv")


def hotel_review():
    with open("tokyo_reviews.bin", "rb") as f:
        data = pickle.load(f)

    reviews = []
    for i in data:
        page = json.loads(i)
        reviews = reviews + page["result"]
    data = defaultdict(list)
    keys = set(reviews[0].keys())
    for i in reviews:
        keys = keys.intersection(set(i.keys()))
    for i in reviews:
        for key in keys:
            data[key].append(i[key])

    df = pd.DataFrame(data)
    df.to_csv("tokyo_hotels_review.csv")


if __name__ == "__main__":
    hotel_review()
