import { Button, Slide } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "styled-components";
import BudgetWeightForm from "./budgetWeight/BudgetWeightForm";
import KeyWordAndCountriesBox from "./keyWordAndCountries/KeyWordAndCountriesBox";
import RestBox from "./restForms/RestBox";

interface TravelSpecContainerType {
  slideMove: boolean;
  onSpecPostBtnClick: () => void;
}

const StyledTravelSpecContainer = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function TravelSpecContainer({
  slideMove,
  onSpecPostBtnClick,
}: TravelSpecContainerType) {
  return (
    <Slide direction="right" in={!slideMove} mountOnEnter unmountOnExit>
      <StyledTravelSpecContainer>
        <KeyWordAndCountriesBox />
        <RestBox />
        <BudgetWeightForm />
        <Button
          variant="contained"
          endIcon={<NavigateNextIcon />}
          size="large"
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
            backgroundColor: "#000000b7",
            borderRadius: "12px",
            ":hover": {
              backgroundColor: "#0000009f",
            },
          }}
          onClick={onSpecPostBtnClick}
        >
          맞춤상품 선택
        </Button>
      </StyledTravelSpecContainer>
    </Slide>
  );
}

export default TravelSpecContainer;
