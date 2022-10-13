import { Button, Divider, Slide } from "@mui/material";
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
  width: 992px;
  height: 1050px;
  margin: 0 auto;
  margin-bottom: 64px;
  padding: 40px 36px;
  border-radius: 20px;
  -webkit-box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
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
        <Divider flexItem light sx={{ margin: "48px 0" }} />
        <BudgetWeightForm />
        <Button
          variant="contained"
          endIcon={<NavigateNextIcon />}
          size="large"
          sx={{
            position: "absolute",
            bottom: 20,
            right: 35,
            backgroundColor: "#424242",
            borderRadius: "12px",
            ":hover": {
              backgroundColor: "#616161",
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
