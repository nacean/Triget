import flightLegType from "./flightLegType";

interface flightProductType {
  id: string;
  legs: flightLegType[]; // 항상 요소는 2개 [출발할 때, 돌아올 때]
  price: number;
  score: number;
  totalStopCounts: number;
  detailUrl: string;
}

export default flightProductType;
