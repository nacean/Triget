import { Polyline } from "@react-google-maps/api";

interface pathType {
  lat: number;
  lng: number;
}

interface MapPolyLinesType {
  travelPaths: pathType[];
  shadow: boolean;
}

const polyLinesOptions = {
  strokeColor: "#fff",
  strokeOpacity: 1,
  strokeWeight: 6,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: -1,
};

const polyLinesShadowOptions = {
  ...polyLinesOptions,
  strokeOpacity: 0.06,
  strokeWeight: 9,
  strokeColor: "#000",
  zIndex: -2,
};

function MapPolyLines({ travelPaths, shadow }: MapPolyLinesType) {
  return (
    <Polyline
      path={travelPaths}
      options={shadow ? polyLinesShadowOptions : polyLinesOptions}
    />
  );
}

export default MapPolyLines;
