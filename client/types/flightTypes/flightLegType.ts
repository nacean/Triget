import flightAirportInfoType from "./flightAirportInfoType";
import flightOperationType from "./flightOperationType";

interface flightLegType {
  _id: number;
  skyScannerId: number;
  origin: flightAirportInfoType;
  destination: flightAirportInfoType;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  timeDeltaInDays: number;
  operations: flightOperationType[]; // 항상 요소 2개 [출발항공,도착항공]
  stopCount: number;
  airportChangeIn: string[];
  isSmallestStops: boolean;
  segments?: flightLegType[];
}

export default flightLegType;
