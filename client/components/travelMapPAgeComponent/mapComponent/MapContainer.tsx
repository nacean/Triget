import styled from "styled-components";
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import { travelListType } from "types/travelListType";
import { travelMovingTime } from "types/travelMovingTime";
import { Dispatch, SetStateAction } from "react";
import MapMarker from "./MapMarker";

interface MapContainerType {
  travelListArray: (travelListType | travelMovingTime)[];
  nowPickStep: travelListType | null;
  setNowPickStep: Dispatch<SetStateAction<travelListType>>;
}

const StyledMapContainer = styled.section`
  width: 65%;
  border: 1px solid #dee2e6;
`;

function MapContainer({
  travelListArray,
  nowPickStep,
  setNowPickStep,
}: MapContainerType) {
  let productIndex = 0;

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 37.5124159,
    lng: 127.0992765,
  };

  return (
    <StyledMapContainer>
      <LoadScriptNext googleMapsApiKey={process.env.MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {travelListArray.map((product: travelListType | travelMovingTime) => {
            if ("moving_time" in product) {
              return null;
            }
            productIndex += 1;
            return (
              <MapMarker
                product={product as travelListType}
                productIndex={productIndex}
              />
            );
          })}
        </GoogleMap>
      </LoadScriptNext>
    </StyledMapContainer>
  );
}

export default MapContainer;
