interface journeyDataType {
  journey_id: number;
  flights_budget: number;
  accommodations_budget: number;
  restaurants_budget: number;
  attractions_budget: number;
  flights: [];
  accommodations: [];
  restaurants: [];
  attractions: [];
}

export default journeyDataType;
