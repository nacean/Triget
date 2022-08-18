import { Chip } from "@mui/material";
import { InfoWindow } from "@react-google-maps/api";
import keywordsToKorean from "modules/keywordModule/keywordsToKorean";
import Image from "next/image";
import styled from "styled-components";
import productDataType from "types/productTypes/productDataType";

interface ClickedMarkerInfoType {
  product: productDataType;
  nowPickStep: productDataType;
}

const StyledInfo = styled.div`
  min-width: 8vw;
  min-height: 4vw;
  background-color: "#000";
  display: flex;
  align-items: center;
`;

const StyledDescriptionContainer = styled.div`
  height: 75px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInfoName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const StyledInfoTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledImage = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  overflow: hidden;
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
          <StyledImage>
            <Image width={75} height={75} src={product.thumbnail} />
          </StyledImage>
          <StyledDescriptionContainer>
            <StyledInfoName>{product.name}</StyledInfoName>
            <StyledInfoTags>
              {product.keywords.map((keyword: string) => (
                <Chip
                  label={`#${keywordsToKorean(keyword)}`}
                  variant="outlined"
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    marginRight: "0.2vw",
                  }}
                  size="small"
                />
              ))}
            </StyledInfoTags>
          </StyledDescriptionContainer>
        </StyledInfo>
      </InfoWindow>
    )
  );
}

export default ClickedMarkerInfo;
