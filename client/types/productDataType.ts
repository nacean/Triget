import neightborsProductType from "./neighborsProductType";

export interface productDataType {
  travel_time?: string; // 나중에 일정표 생성 시 몇시에 이 상품을 이용할 것인가
  _id: number;
  product_name: string;
  subcategory: string;
  thumbnail: string;
  longitude: number;
  latitude: number;
  city: string;
  state: string;
  country: string;
  address: string;
  price: number;
  currency_code: string;
  review_score: number;
  popularity: number;
  weekday_hours: string[];
  product_website: string;
  product_url: string;
  neightbors: neightborsProductType[];
  is_beach_front: boolean;
  keywords: string[];
}
