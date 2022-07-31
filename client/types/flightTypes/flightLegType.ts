import flightAirportInfoType from "./flightAirportInfoType";

interface flightLegType {
  _id: number;
  origin: flightAirportInfoType;
  destination: flightAirportInfoType;
  departure_time: string;
  arrival_time: string;
  duration_time: number;
  time_delta_in_days: number;
  operating_num: number;
  operatings: string[];
  stop_count: number;
  is_smallest_stops: boolean;
  segments?: flightLegType;
}

export default flightLegType;
