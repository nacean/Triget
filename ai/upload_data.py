from pymongo import MongoClient
import pandas as pd

client = MongoClient(
    "mongodb://admin:mye785c83@15.165.221.77:27017/?authMechanism=DEFAULT")
db = client["triget"]
data = pd.read_csv("./data/tokyo_hotels.csv")

print(db)
