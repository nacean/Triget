import { Button } from "@mui/material";
import { OverlayView } from "@react-google-maps/api";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { travelListType } from "types/travelListType";

interface MapMarkerType {
  product: travelListType;
  productIndex: number;
  nowPickStep: travelListType;
  setNowPickStep: Dispatch<SetStateAction<travelListType>>;
  setNowPickIndex: Dispatch<SetStateAction<number>>;
}

// overlayView 를 polyline 의 중앙에 둠, 없으면 오른쪽 아래로 중앙을 벗어나게 됨
const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const StyledMarker = styled.div`
  width: 30px;
  height: 30px;
  background-color: #000;
  border: 1px solid black;
  border-radius: 100%;
  color: white;
  font-size: 18px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

function MapMarker({
  product,
  productIndex,
  nowPickStep,
  setNowPickStep,
  setNowPickIndex,
}: MapMarkerType) {
  const onMarkerClick = () => {
    setNowPickStep(product);
    setNowPickIndex(productIndex);
  };

  return (
    <OverlayView
      mapPaneName={OverlayView.FLOAT_PANE}
      position={{ lat: product.latitude, lng: product.longitude }}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <Button
        variant="contained"
        sx={{
          width: "30px",
          height: "30px",
          minWidth: 0,
          padding: 0,
          backgroundColor: "#000",
          border: "1px solid black",
          borderRadius: "100%",
          color: "#fff",
          fontSize: "18px",
          fontWeight: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
        onClick={onMarkerClick}
      >
        {productIndex}
      </Button>
    </OverlayView>
  );
}

export default MapMarker;
