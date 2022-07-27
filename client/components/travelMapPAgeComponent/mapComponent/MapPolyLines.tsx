import { Polyline } from "@react-google-maps/api";

interface pathType {
  lat: number;
  lng: number;
}

interface MapPolyLinesType {
  travelPaths: pathType[];
}

const polyLinesOptions = {
  strokeColor: "#000",
  strokeOpacity: 0.8,
  strokeWeight: 1.5,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: -1,
};

function MapPolyLines({ travelPaths }: MapPolyLinesType) {
  return <Polyline path={travelPaths} options={polyLinesOptions} />;
}

export default MapPolyLines;
