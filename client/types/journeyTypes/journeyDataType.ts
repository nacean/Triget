import flightArrayType from "./flightArrayType";
import productArrayType from "./productArrayType";

interface journeyDataType {
  journeyId: string;
  flightsBudget: number;
  accommodationsBudget: number;
  restaurantsBudget: number;
  attractionsBudget: number;
  flights: flightArrayType;
  accommodations: productArrayType;
  restaurants: productArrayType;
  attractions: productArrayType;
}

export default journeyDataType;
