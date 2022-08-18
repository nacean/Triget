import { Chip } from "@mui/material";
import { InfoWindow } from "@react-google-maps/api";
import styled from "styled-components";
import { productDataType } from "types/productTypes/productDataType";

interface ClickedMarkerInfoType {
  product: productDataType;
  nowPickStep: productDataType;
}

const StyledInfo = styled.div`
  width: 10vw;
  min-height: 7vw;
  background-color: "#000";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInfoName = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding-top: 5px;
`;

const StyledInfoTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function ClickedMarkerInfo({ product, nowPickStep }: ClickedMarkerInfoType) {
  if (nowPickStep === null) return null;

  const nowPickLatLng = {
    lat: nowPickStep.latitude,
    lng: nowPickStep.longitude,
  };

  let isPicked = product.id === nowPickStep.id;

  // infoBox 사용하는게 좋을 수도 ??
  return (
    isPicked && (
      <InfoWindow
        position={nowPickLatLng}
        onCloseClick={() => {
          isPicked = false;
        }}
        zIndex={10}
        options={{
          pixelOffset: new google.maps.Size(0, -16),
        }}
      >
        <StyledInfo>
          <StyledInfoName>{product.name}</StyledInfoName>
          <StyledInfoTags>
            {product.keywords.map((keyword: string) => (
              <Chip
                label={`#${keyword}`}
                variant="outlined"
                sx={{
                  color: "#000",
                  fontWeight: 400,
                  marginRight: "0.2vw",
                  marginBottom: "0.2vh",
                }}
                size="small"
              />
            ))}
          </StyledInfoTags>
        </StyledInfo>
      </InfoWindow>
    )
  );
}

export default ClickedMarkerInfo;
