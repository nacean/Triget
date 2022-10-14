import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { theme } from "styles/theme";

const StyledLoadingProductContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const StyledLoadingText = styled.p`
  margin-top: 22px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.44px;
  text-align: center;
  color: #1a1a1a;
`;

const StyledCircularProgress = styled(CircularProgress)`
  color: ${theme.colors.mainblue};
`;

function LoadingProduct() {
  return (
    <StyledLoadingProductContainer>
      <StyledCircularProgress size={38} thickness={5} />
      <StyledLoadingText>
        맞춤 상품을
        <br />
        탐색 중입니다
      </StyledLoadingText>
    </StyledLoadingProductContainer>
  );
}

export default LoadingProduct;
