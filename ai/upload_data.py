import numpy as np
from pymongo import MongoClient
import pandas as pd
import pickle
from tqdm import tqdm
from config import Config

client = MongoClient(
    f"mongodb://{Config.MONGO_ID}:{Config.MONGO_PW}@15.165.221.77:27017/?authMechanism=SCRAM-SHA-1"
)
db = client["triget"]


def match_keyword(city, category):
    col = db[category]
    with open(f"./data/{city}_{category}_matched.bin", "rb") as f:
        matched = pickle.load(f)
    field = "bookings_id" if category == "hotel" else "tripadvisor_id"
    for key, val in tqdm(matched.items()):
        col.update_one({field: str(key), "city": city[0].upper()+city[1:]},
                       {"$set": {"keywords": list(val)}})

    df = pd.read_csv(f"./data/{city}_{category}_db.csv")
    for i in range(df.shape[0]):
        id = df.loc[i][field].item()
        if id not in matched:
            col.update_one({field: str(id)},
                           {"$set": {"keywords": []}})


def fill_null(category, field, value):
    col = db[category]
    target = col.update_many({field: np.nan}, {"$set": {field: value}})


if __name__ == "__main__":
    # for i in ["hotel", "attraction", "restaurant"]:
    #     match_keyword("honolulu", i)
    # fill_null("restaurant", "price", 0)
    fill_null("restaurant", "rating", -1)
