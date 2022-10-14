import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedFlightState from "atoms/pickProductAtoms/pickedFlightState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import { useRecoilState } from "recoil";
import { Button } from "@mui/material";
import styled from "styled-components";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import flightProductType from "types/flightTypes/flightProductType";
import productDataType from "types/productTypes/productDataType";
import { theme } from "styles/theme";
import ReplayIcon from "@mui/icons-material/Replay";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import PickedProductsChips from "./PickedProductsChips";
import PickedFlightChips from "./PickedFlightChipComponents/PickedFlightChips";

interface PickedProductsContainerType {
  onSlideBtnClick: () => void;
}

const StyledPickedProductsContainer = styled.div`
  width: 100%;
  height: 300px;
  position: fixed;
  background-color: #fff;
  bottom: -226px;
  left: 0;
  right: 0;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: 0.5s all;

  &:hover {
    bottom: 0;
  }
`;

const StyledHead = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px auto 16px auto;
  width: 992px;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -0.43px;
`;

const StyledResetBtn = styled(Button)`
  margin-left: auto;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.mainblue};
`;

const StyledProudctsCnt = styled.span`
  margin-left: 16px;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -0.43px;
  color: ${theme.colors.mainblue};
`;

const StyledPickedProducts = styled.div`
  margin: 0 auto;
  width: 992px;
  display: flex;
  justify-content: space-between;
`;

function PickedProductsContainer({
  onSlideBtnClick,
}: PickedProductsContainerType) {
  const router = useRouter();

  const [pickedFlight, setPickedFlight] =
    useRecoilState<flightProductType | null>(pickedFlightState);
  const [pickedAccommodations, setPickedAccommodations] = useRecoilState<
    productDataType[]
  >(pickedAccommodationsState);
  const [pickedRestaurants, setPickedRestaurants] = useRecoilState<
    productDataType[]
  >(pickedRestaurantsState);
  const [pickedAttractions, setPickedAttractions] = useRecoilState<
    productDataType[]
  >(pickedAttractionsState);

  const onClickResetBtn = () => {
    setPickedFlight(null);
    setPickedAccommodations([]);
    setPickedRestaurants([]);
    setPickedAttractions([]);
  };

  const getAllProductsCnt = () => {
    return (
      pickedAccommodations.length +
      pickedAttractions.length +
      (pickedFlight !== null ? 1 : 0) +
      pickedRestaurants.length
    );
  };

  const onBackBtnClick = () => {
    onSlideBtnClick();
    setPickedFlight(null);
    setPickedAccommodations([]);
    setPickedRestaurants([]);
    setPickedAttractions([]);
  };

  const onMakePlanBtnClick = () => {
    router.push("/travelMapPage");
  };

  return (
    <StyledPickedProductsContainer>
      <StyledHead>
        선택목록
        <StyledProudctsCnt>{getAllProductsCnt()}</StyledProudctsCnt>
        <StyledResetBtn variant="text" onClick={onClickResetBtn}>
          <ReplayIcon
            fontSize="small"
            sx={{ marginBottom: "1px", marginRight: "7px" }}
          />
          초기화
        </StyledResetBtn>
      </StyledHead>
      <StyledPickedProducts>
        <PickedFlightChips
          productKind="항공"
          pickedFlight={pickedFlight}
          setPickedFlight={setPickedFlight}
          icon={<FlightIcon sx={{ fontSize: 16 }} />}
        />
        <PickedProductsChips
          productKind="숙박"
          pickedProducts={pickedAccommodations}
          setPickedProducts={setPickedAccommodations}
          icon={<HotelIcon sx={{ fontSize: 16 }} />}
        />
        <PickedProductsChips
          productKind="식당"
          pickedProducts={pickedRestaurants}
          setPickedProducts={setPickedRestaurants}
          icon={<RestaurantIcon sx={{ fontSize: 16 }} />}
        />
        <PickedProductsChips
          productKind="액티비티"
          pickedProducts={pickedAttractions}
          setPickedProducts={setPickedAttractions}
          icon={<DirectionsRunIcon sx={{ fontSize: 16 }} />}
        />
      </StyledPickedProducts>
      <Button
        variant="contained"
        startIcon={<ChevronLeftIcon />}
        size="large"
        sx={{
          position: "fixed",
          bottom: 16,
          left: 172,
          backgroundColor: "#424242",
          borderRadius: "12px",
          ":hover": {
            backgroundColor: "#616161",
          },
        }}
        onClick={onBackBtnClick}
      >
        뒤로가기
      </Button>

      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        size="large"
        color="info"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 172,
          borderRadius: "12px",
          zIndex: 2000,
          backgroundColor: theme.colors.mainblue,
        }}
        onClick={onMakePlanBtnClick}
      >
        일정표 생성
      </Button>
    </StyledPickedProductsContainer>
  );
}

export default PickedProductsContainer;
