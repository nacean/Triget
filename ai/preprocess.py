from collections import defaultdict
import pickle
import json
import pandas as pd
import ast
from pymongo import MongoClient
from tqdm import tqdm


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


def restaurant_details(city):
    cols = ["tripadvisor_id", "name", "thumbnail",
            "longitude", "latitude", "city", "state",
            "country", "address", "price", "currency_code",
            "rating", "popularity", "subcategory", "detail_url",
            "weekday_hours", "product_website"]
    df = pd.read_csv(f"./data/{city}_restaurants.csv")
    df["subcategory"] = df["cuisine"].apply(
        lambda x: x if not pd.notna(x) else list(i["name"] for i in ast.literal_eval(x)))
    df["address"] = df["address_obj"].apply(
        lambda x: x if not pd.notna(x) else ast.literal_eval(x)["address_string"])
    df["state"] = df["address_obj"].apply(
        lambda x: x if not pd.notna(x) else ast.literal_eval(x)["city"])
    df["weekday_hours"] = df["hours"].apply(
        lambda x: x if not pd.notna(x) else ast.literal_eval(x)["weekday_text"])
    df["price"] = df["price_level"].apply(lambda x: len(
        x.split(' - ')[0]) if pd.notna(x) else 0)
    df["popularity"] = df["num_reviews"]
    df["product_website"] = df["website"]
    df["currency_code"] = "JPY"
    df["tripadvisor_id"] = df["location_id"]
    df["thumbnail"] = None
    df["country"] = df["timezone"]
    df["detail_url"] = df["web_url"]
    df["city"] = city[0].upper()+city[1:]

    df[cols].to_csv(f"./data/{city}_restaurant_db.csv", index=False)


def attraction_details(city):
    cols = ["tripadvisor_id", "name", "thumbnail", "longitude", "latitude", "city", "state", "country", "address", "price",
            "currency_code", "estimated_time", "subcategory", "rating", "popularity", "detail_url", "product_website", "weekday_hours", "neighbors"]
    df = pd.read_csv(f"./data/{city}_attractions.csv")
    df["tripadvisor_id"] = df["location_id"]
    df["thumbnail"] = None
    df["city"] = city[0].upper()+city[1:]
    df["address"] = df["address_obj"].apply(
        lambda x: x if not pd.notna(x) else ast.literal_eval(x)["address_string"])
    df["state"] = df["address_obj"].apply(
        lambda x: x if not pd.notna(x) else ast.literal_eval(x)["city"])
    df["country"] = df["timezone"]
    df["price"] = None
    df["currency_code"] = "JPY"
    df["estimated_time"] = 2
    df["popularity"] = df["num_reviews"]
    df["detail_url"] = df["web_url"]
    df["product_website"] = df["website"]
    df["weekday_hours"] = df["hours"].apply(
        lambda x: x if not pd.notna(x) else ast.literal_eval(x)["weekday_text"])
    df["neighbors"] = df["neighborhood_info"].apply(lambda x: list(
        map(lambda xx: xx["location_id"], ast.literal_eval(x))))

    df[cols].to_csv(f"./data/{city}_attraction_db.csv", index=False)


def hotel_detail(city):
    cols = ["bookings_id", "name", "thumbnail", "subcategory", "city", "longitude", "latitude", "address", "district", "price",
            "currency_code", "rating", "popularity", "detail_url"]
    df = pd.read_csv(f"./data/{city}_hotels.csv")
    df["bookings_id"] = df["hotel_id"]
    df["name"] = df["hotel_name_trans"]
    df["thumbnail"] = df["main_photo_url"]
    df["subcategory"] = df["accommodation_type_name"]
    df["price"] = df["min_total_price"]
    df["rating"] = df["review_score"]
    df["popularity"] = df["review_nr"]
    df["detail_url"] = df["url"]

    df[cols].to_csv(f"./data/{city}_hotel_db.csv", index=False)


if __name__ == "__main__":
    pass
