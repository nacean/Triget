import productArrayType from "types/journeyTypes/productArrayType";

async function getExtraProduct(
  productType: string,
  journeyId: string,
  page: number,
): Promise<productArrayType> {
  const extraDatasPromise = await fetch(
    `http://api.triget.org:80/api/v1/product-list/${productType}?journeyId=${journeyId}&page=${page}`,
  );

  const extraDatas = await extraDatasPromise.json();

  return extraDatas;
}

export default getExtraProduct;
