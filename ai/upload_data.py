from pymongo import MongoClient
import pandas as pd
import pickle
from tqdm import tqdm

client = MongoClient(
    "mongodb://admin:triget13082!@15.165.221.77:27017/?authMechanism=SCRAM-SHA-1")
db = client["triget"]


def match_keyword(col_name):
    col = db[col_name]
    with open(f"./data/{col_name}_matched.bin", "rb") as f:
        matched = pickle.load(f)

    col.update_many({}, {"$set": {"city": "Tokyo"}})

    for key, val in tqdm(matched.items()):
        field = "hotel_id" if col_name == "hotel" else "tripadvisor_id"
        col.update_one({field: str(key)},
                       {"$set": {"keywords": list(val)}})


if __name__ == "__main__":
    match_keyword("attraction")
    match_keyword("hotel")
    match_keyword("restaurant")
