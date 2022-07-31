import flightLegType from "./flightLegType";
import flightPriceOptionType from "./flightPriceOptionType";

interface flightProductType {
  _id: number;
  legs: flightLegType[];
  price_options: flightPriceOptionType[];
  price: number;
  both_smallest_tops: boolean;
  detail_url: string;
}

export default flightProductType;
