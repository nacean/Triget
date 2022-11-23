import { travelMovingTime } from "types/travelMovingTime";

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function getTimeLongLat(lat1, lon1, lat2, lon2): travelMovingTime {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const dlat1 = toRad(lat1);
  const dlat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(dlat1) * Math.cos(dlat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return {
    transitMode: "자가용",
    durationTime: Math.ceil(2 * d),
  };
}

export default getTimeLongLat;
