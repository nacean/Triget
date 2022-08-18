import styled from "styled-components";
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import { travelMovingTime } from "types/travelMovingTime";
import { Dispatch, SetStateAction, useEffect } from "react";
import { productDataType } from "types/productTypes/productDataType";
import MapPolyLines from "./MapPolyLines";
import MapMarker from "./MapMarker";
import ClickedMarkerInfo from "./ClickedMarkerInfo";

interface MapContainerType {
  travelListArray: (productDataType | travelMovingTime)[];
  nowPickStep: productDataType | null;
  setNowPickStep: Dispatch<SetStateAction<productDataType>>;
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
      : (travelListArray[0] as productDataType).latitude,
    lng: nowPickStep
      ? nowPickStep.longitude
      : (travelListArray[0] as productDataType).longitude,
  };

  useEffect(() => {
    if (nowPickStep === null) {
      setNowPickStep(travelListArray[0] as productDataType);
      setNowPickIndex(1);
    }
  }, []);

  // 이동 시간을 제외한 순수 product만 있는 배열
  const productsExceptMovingTime: productDataType[] = travelListArray.filter(
    (product: productDataType | travelMovingTime) =>
      !("transitMode" in product),
  ) as productDataType[];

  // product 에서 path만 따로 관리, 다른 map component에 대해 사용
  const travelPaths: pathType[] = productsExceptMovingTime.map(
    (product: productDataType) => ({
      lat: product.latitude,
      lng: product.longitude,
    }),
  );

  return (
    <StyledMapContainer>
      <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {productsExceptMovingTime.map((product: productDataType) => {
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
