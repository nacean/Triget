import requests
import pickle
import pandas as pd

from tqdm import tqdm


def search_hotel():
    url = "https://booking-com.p.rapidapi.com/v1/hotels/search"

    querystring = {
        "checkout_date": "2022-10-01",
        "units": "metric",
        "dest_id": "-246227",
        "dest_type": "city",
        "locale": "en-gb",
        "adults_number": "2",
        "order_by": "popularity",
        "filter_by_currency": "AED",
        "checkin_date": "2022-09-30",
        "room_number": "1",
        "page_number": "0",
        "categories_filter_ids": "class::2,class::4,free_cancellation::1", "include_adjacency": "true"}

    headers = {
        "X-RapidAPI-Key": "be2ef5122fmshd2190130c6389bep1f9720jsnea6487bddd10",
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
    }

    data = []

    for page in ["0", "1", "2", "3", "4"]:
        querystring["page_number"] = page
        response = requests.request(
            "GET", url, headers=headers, params=querystring)
        data.append(response.text)

    with open("tokyo_hotels.bin", "wb") as f:
        pickle.dump(data, f)


def hotel_reviews():
    url = "https://booking-com.p.rapidapi.com/v1/hotels/reviews"
    df = pd.read_csv("tokyo_hotels.csv")
    ids = df["hotel_id"].to_list()
    data = []
    for id in tqdm(ids[:20]):
        querystring = {"sort_type": "SORT_MOST_RELEVANT", "locale": "en-gb", "hotel_id": str(id),
                       "language_filter": "en-gb,de,fr", "customer_type": "solo_traveller,review_category_group_of_friends"}

        headers = {
            "X-RapidAPI-Key": "be2ef5122fmshd2190130c6389bep1f9720jsnea6487bddd10",
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
        }

        response = requests.request(
            "GET", url, headers=headers, params=querystring)

        data.append(response.text)

    print(data)

    with open("tokyo_reviews.bin", "wb") as f:
        pickle.dump(data, f)


if __name__ == "__main__":
    hotel_reviews()
