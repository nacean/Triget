import flightProductType from "types/flightTypes/flightProductType";
import pickedProductsIdType from "types/pickedProductsIdTypes/pickedProductsIdType";
import productDataType from "types/productTypes/productDataType";

async function fetchTravelPlanList(
  pickedFlight: flightProductType,
  pickedAccommodations: productDataType[],
  pickedRestaurants: productDataType[],
  pickedAttractions: productDataType[],
  journeyId: string,
) {
  const pickedThings: pickedProductsIdType = {
    accommodationIds: pickedAccommodations.map(product => product.id),
    attractionIds: pickedAttractions.map(product => product.id),
    flightId: pickedFlight.id,
    journeyId,
    restaurantIds: pickedRestaurants.map(product => product.id),
  };

  console.log(
    pickedAccommodations.map(product => product.id),
    pickedAttractions.map(product => product.id),
    pickedFlight.id,
    journeyId,
    pickedRestaurants.map(product => product.id),
  );
  const travelListResponse = await fetch(
    "http://api.triget.org:80/api/v1/schedule",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pickedThings),
    },
  );

  const travelList = await travelListResponse.json();

  console.log(travelList);

  return travelList;
}

export default fetchTravelPlanList;
