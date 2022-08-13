import flightLegType from "./flightLegType";
import flightPriceOptionType from "./flightPriceOptionType";

interface flightProductType {
  _id: number;
  journeyId: string;
  skyScannerId: number;
  legs: flightLegType[]; // 항상 요소는 2개 [출발할 때, 돌아올 때]
  priceOptions?: flightPriceOptionType[];
  price: number;
  score: number;
  totalStopCounts: number;
  detailUrl: string;
}

export default flightProductType;
