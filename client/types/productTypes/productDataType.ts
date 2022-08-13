import neightborsProductType from "./neighborsProductType";
import objectIdType from "./objectIdType";

interface productDataType {
  travel_time?: string; // 나중에 일정표 생성 시 몇시에 이 상품을 이용할 것인가
  name: string;
  thumbnail: string;
  subcategory: string;
  longitude: number;
  latitude: number;
  city: string;
  state: string;
  country: string;
  address: string;
  currencyCode: string;
  rating: number;
  popularity: number;
  detailUrl: string;
}

export interface accommodationsDataType extends productDataType {
  _id: objectIdType;
  bookingsId: string;
  price: number;
}

export interface restaurantsDataType extends productDataType {
  _id: objectIdType;
  price: number;
  weekdayHours: string;
  productWebsite: string;
}

export interface attractionsDataType extends productDataType {
  _id: number;
  tripadvisorId: string;
  weekdayHours: string[];
  productWebsite: string;
  neighbors: neightborsProductType[];
}
