import styled from "styled-components";
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import { travelMovingTime } from "types/travelMovingTime";
import { Dispatch, SetStateAction, useEffect } from "react";
import { allProductType } from "types/productTypes/productDataType";
import MapPolyLines from "./MapPolyLines";
import MapMarker from "./MapMarker";
import ClickedMarkerInfo from "./ClickedMarkerInfo";

interface MapContainerType {
  travelListArray: (allProductType | travelMovingTime)[];
  nowPickStep: allProductType | null;
  setNowPickStep: Dispatch<SetStateAction<allProductType>>;
  setNowPickIndex: Dispatch<SetStateAction<number>>;
}

interface pathType {
  lat: number;
  lng: number;
}

const StyledMapContainer = styled.section`
  width: 65%;
  border: 1px solid #dee2e6;
`;

function MapContainer({
  travelListArray,
  nowPickStep,
  setNowPickStep,
  setNowPickIndex,
}: MapContainerType) {
  let index = 0;

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: nowPickStep
      ? nowPickStep.latitude
      : (travelListArray[0] as allProductType).latitude,
    lng: nowPickStep
      ? nowPickStep.longitude
      : (travelListArray[0] as allProductType).longitude,
  };

  useEffect(() => {
    if (nowPickStep === null) {
      setNowPickStep(travelListArray[0] as allProductType);
      setNowPickIndex(1);
    }
  }, []);

  // 이동 시간을 제외한 순수 product만 있는 배열
  const productsExceptMovingTime: allProductType[] = travelListArray.filter(
    (product: allProductType | travelMovingTime) => !("transitMode" in product),
  ) as allProductType[];

  // product 에서 path만 따로 관리, 다른 map component에 대해 사용
  const travelPaths: pathType[] = productsExceptMovingTime.map(
    (product: allProductType) => ({
      lat: product.latitude,
      lng: product.longitude,
    }),
  );

  return (
    <StyledMapContainer>
      <LoadScriptNext googleMapsApiKey={process.env.MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {productsExceptMovingTime.map((product: allProductType) => {
            index += 1;
            return (
              <>
                <MapMarker
                  product={product}
                  productIndex={index}
                  nowPickStep={nowPickStep}
                  setNowPickStep={setNowPickStep}
                  setNowPickIndex={setNowPickIndex}
                />

                <ClickedMarkerInfo
                  product={product}
                  nowPickStep={nowPickStep}
                />
              </>
            );
          })}
          <MapPolyLines travelPaths={travelPaths} />
        </GoogleMap>
      </LoadScriptNext>
    </StyledMapContainer>
  );
}

export default MapContainer;
