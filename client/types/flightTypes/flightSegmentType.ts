import flightAirportInfoType from "./flightAirportInfoType";
import flightOperationType from "./flightOperationType";

interface flightSegmentType {
  order: number;
  origin: flightAirportInfoType;
  destination: flightAirportInfoType;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  flightNumber: string;
  operation: flightOperationType; // 항상 요소 2개 [출발항공,도착항공]
}

export default flightSegmentType;
