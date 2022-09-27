interface productDataType {
  id: string;
  name: string;
  thumbnail: string;
  subcategory: string;
  longitude: number;
  latitude: number;
  city: string;
  state: string;
  country: string | null;
  address: string;
  price: number | null;
  currencyCode: string | null;
  rating: number;
  popularity: number;
  detailUrl: string;
  productWebsite: string | null;
  weekdayHours: string | null;
  keywords?: string[];
  travelTime?: string; // 나중에 일정표 생성 시 몇시에 이 상품을 이용할 것인가
  neighbors?: string;
}

export default productDataType;
