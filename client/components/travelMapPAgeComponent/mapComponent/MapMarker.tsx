import { Marker, OverlayView } from "@react-google-maps/api";
import styled from "styled-components";
import { travelListType } from "types/travelListType";

interface MapMarkerType {
  product: travelListType;
  productIndex: number;
}

const StyledMarker = styled.div`
  width: 30px;
  height: 30px;
  background-color: #000;
  border: 1px solid black;
  border-radius: 100%;
  color: white;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MapMarker({ product, productIndex }: MapMarkerType) {
  return (
    <OverlayView
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      position={{ lat: product.latitude, lng: product.longitude }}
    >
      <StyledMarker>{productIndex}</StyledMarker>
    </OverlayView>
  );
}

export default MapMarker;
