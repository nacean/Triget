import journeyDataType from "types/journeyTypes/journeyDataType";
import travelSpecType from "types/travelSpecType/travelSpecType";

async function fetchTravelSpec(
  travelSpec: travelSpecType,
): Promise<journeyDataType> {
  const travelDatasPromise = await fetch(
    "http://52.79.230.138:80/api/v1/product-list",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(travelSpec),
    },
  );

  const travelDatas = await travelDatasPromise.json();

  return travelDatas;
}

export default fetchTravelSpec;
