import { useState } from "react";
import styled from "styled-components";
import { Slide, Button, CircularProgress } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import { UseMutationResult } from "react-query";
import ProductMenu from "./ProductMenu";
import ProductPanel from "./ProductPanel";

interface ProductPickContainerType {
  slideMove: boolean;
  onSlideBtnClick: () => void;
  travelMutation: UseMutationResult;
}

interface journeyDataType {
  journey_id: number;
  airports: [];
  accommodations: [];
  restaurants: [];
  attractions: [];
}

const StyledProductPickContainer = styled.section`
  position: relative;
  width: 100%;
  height: 700px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: ${props =>
    props.className === "cannot" ? "center" : "none"};
`;

const LoadingParagraph = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

function ProductPickContainer({
  slideMove,
  onSlideBtnClick,
  travelMutation,
}: ProductPickContainerType) {
  const { data, isLoading, isError, error, isSuccess } = travelMutation;

  const [menuNum, setMenuNum] = useState(0);

  if (isError)
    return (
      <Slide direction="left" in={slideMove} mountOnEnter unmountOnExit>
        <StyledProductPickContainer className="cannot">
          {`There is Error. Error name : ${error}`}
        </StyledProductPickContainer>
      </Slide>
    );

  if (isLoading)
    return (
      <Slide direction="left" in={slideMove} mountOnEnter unmountOnExit>
        <StyledProductPickContainer className="cannot">
          <CircularProgress size={100} sx={{ color: "#606060" }} />
          <LoadingParagraph>
            맞춤 상품을 가져오는 중입니다. 잠시만 기다려주세요.
          </LoadingParagraph>
        </StyledProductPickContainer>
      </Slide>
    );

  if (isSuccess) {
    const { airports, accommodations, restaurants, attractions } =
      data as journeyDataType;

    return (
      <Slide direction="left" in={slideMove} mountOnEnter unmountOnExit>
        <StyledProductPickContainer>
          <ProductMenu menuNum={menuNum} setMenuNum={setMenuNum} />
          <ProductPanel value={menuNum} index={0} productArray={airports} />
          <ProductPanel
            value={menuNum}
            index={1}
            productArray={accommodations}
          />
          <ProductPanel value={menuNum} index={2} productArray={restaurants} />
          <ProductPanel value={menuNum} index={3} productArray={attractions} />
          <Button
            variant="contained"
            startIcon={<ChevronLeftIcon />}
            size="large"
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              backgroundColor: "#000000b7",
              borderRadius: "12px",
              ":hover": {
                backgroundColor: "#0000009f",
              },
            }}
            onClick={onSlideBtnClick}
          >
            뒤로가기
          </Button>
          <Button
            variant="contained"
            endIcon={<SearchIcon />}
            size="large"
            color="info"
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              borderRadius: "12px",
            }}
            onClick={onSlideBtnClick}
          >
            일정표 생성
          </Button>
        </StyledProductPickContainer>
      </Slide>
    );
  }
}

export default ProductPickContainer;
