import flightLegType from "./flightLegType";
import flightPriceOptionType from "./flightPriceOptionType";

interface flightProductType {
  _id: number;
  legs: flightLegType[]; // 항상 요소는 2개 [출발할 때, 돌아올 때]
  price_options?: flightPriceOptionType[];
  price: number;
  both_smallest_stops: boolean;
  detail_url: string;
}

export default flightProductType;
