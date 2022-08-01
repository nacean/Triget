import flightAirportInfoType from "./flightAirportInfoType";
import flightOperatingType from "./flightOperatingType";

interface flightLegType {
  _id: number;
  origin: flightAirportInfoType;
  destination: flightAirportInfoType;
  departure_time: string;
  arrival_time: string;
  duration_time: number;
  time_delta_in_days: number;
  operating_num: number;
  operatings: flightOperatingType[]; // 항상 요소 2개 [출발항공,도착항공]
  stop_count: number;
  is_smallest_stops: boolean;
  segments?: flightLegType;
}

export default flightLegType;
