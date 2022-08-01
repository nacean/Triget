import { Button } from "@mui/material";
import { OverlayView } from "@react-google-maps/api";
import { Dispatch, SetStateAction } from "react";
import { productDataType } from "types/productDataType";

interface MapMarkerType {
  product: productDataType;
  productIndex: number;
  nowPickStep: productDataType;
  setNowPickStep: Dispatch<SetStateAction<productDataType>>;
  setNowPickIndex: Dispatch<SetStateAction<number>>;
}

// overlayView 를 polyline 의 중앙에 둠, 없으면 오른쪽 아래로 중앙을 벗어나게 됨
const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const selectedMarkerColor = {
  backgroundColor: "#000",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#000",
  },
};

const nonSelectedMarkerColor = {
  backgroundColor: "#fff",
  color: "#838593",
  border: "1px solid #CACBDB",
  "&:hover": {
    backgroundColor: "#CACBDB",
  },
};

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

  const nowBtnColor = () => {
    if (nowPickStep === null) return nonSelectedMarkerColor;

    if (product._id === nowPickStep._id) return selectedMarkerColor;

    return nonSelectedMarkerColor;
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
          borderRadius: "100%",
          fontSize: "18px",
          fontWeight: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          ...nowBtnColor(),
        }}
        onClick={onMarkerClick}
      >
        {productIndex}
      </Button>
    </OverlayView>
  );
}

export default MapMarker;
