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
  background-color: "#000";
  display: flex;
`;

const StyledDescriptionContainer = styled.div`
  margin-left: 16px;
  height: 100%;
`;

const StyledInfoName = styled.div`
  min-height: 75px;
  width: 70%;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.42px;
  color: #1a1a1a;
`;

const StyledInfoTags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
                    lineHeight: 1.9,
                    letterSpacing: "-0.3px",
                    fontSize: 12,
                    fontWeight: 500,
                    borderRadius: 12.8,
                    border: "none",
                    color: "#787878",
                    padding: "5px 5px",
                    backgroundColor: "#eee",
                    marginRight: "0.2vw",
                    marginBottom: "0.2vw",
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
