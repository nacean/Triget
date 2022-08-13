import productArrayType from "./productArrayType";

interface journeyDataType {
  journeyId: string;
  flightsBudget: number;
  accommodationsBudget: number;
  restaurantsBudget: number;
  attractionsBudget: number;
  flights: productArrayType;
  accommodations: productArrayType;
  restaurants: productArrayType;
  attractions: productArrayType;
}

export default journeyDataType;
