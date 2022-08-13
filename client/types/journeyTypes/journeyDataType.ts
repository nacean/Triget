interface journeyDataType {
  journeyId: string;
  flightsBudget: number;
  accommodationsBudget: number;
  restaurantsBudget: number;
  attractionsBudget: number;
  flights: [];
  accommodations: [];
  restaurants: [];
  attractions: [];
}

export default journeyDataType;
