import flightProductType from "types/flightTypes/flightProductType";

interface flightArrayType {
  content: flightProductType[];
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export default flightArrayType;
