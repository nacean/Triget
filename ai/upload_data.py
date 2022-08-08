from pymongo import MongoClient
import pandas as pd
import pickle
from tqdm import tqdm
from config import Config

client = MongoClient(
    f"mongodb://{Config.MONGO_ID}:{Config.MONGO_PW}!@15.165.221.77:27017/?authMechanism=SCRAM-SHA-1")
db = client["triget"]


def match_keyword(city, category):
    col = db[category]
    with open(f"./data/{category}_matched.bin", "rb") as f:
        matched = pickle.load(f)

    col.update_many({}, {"$set": {"city": "Tokyo"}})
    field = "bookings_id" if category == "hotel" else "tripadvisor_id"
    for key, val in tqdm(matched.items()):
        col.update_one({field: str(key)},
                       {"$set": {"keywords": list(val)}})

    df = pd.read_csv(f"./data/{city}_{category}_db.csv")
    for i in range(df.shape[0]):
        id = df.loc[i][field].item()
        if id not in matched:
            col.update_one({field: str(id)},
                           {"$set": {"keywords": []}})


def fill_null(city, category):
    col = db[category]
    df = pd.read_csv(f"./data/{city}_{category}_db.csv")
    cols = df.columns
    id = "bookings_id" if category == "hotel" else "tripadvisor_id"
    for i in range(df.shape[0]):
        row = df.loc[i]
        for c in cols:
            if pd.isna(row[c]):
                col.update_one({id: str(row[id].item())}, {
                               "$set": {c: None}})
                print(i, c)


if __name__ == "__main__":
    match_keyword("tokyo", "attraction")
    match_keyword("tokyo", "hotel")
    match_keyword("tokyo", "restaurant")
    # fill_null("tokyo", "restaurant")
