import flightArrayType from "types/journeyTypes/flightArrayType";

async function getExtraFlight(
  journeyId: string,
  page: number,
): Promise<flightArrayType> {
  const extraDatasPromise = await fetch(
    `https://api.triget.org/api/v1/product-list/flights?journeyId=${journeyId}&page=${page}`,
  );

  const extraDatas = await extraDatasPromise.json();

  return extraDatas;
}

export default getExtraFlight;
