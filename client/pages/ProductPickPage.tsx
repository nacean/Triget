import ProductPickContainer from "components/mainPageComponent/planner/pickTravelProducts/ProductPickContainer";
import styled from "styled-components";

const StyledProductPickPage = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
`;

const MainAsk = styled.h1`
  width: 992px;
  margin-top: 64px;
  margin-bottom: 54px;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -1px;
  color: #1a1a1a;
`;

function ProductPickPage() {
  return (
    <StyledProductPickPage>
      <MainAsk>어떤 여행을 하고 싶으신가요?</MainAsk>
      <ProductPickContainer />
    </StyledProductPickPage>
  );
}

export default ProductPickPage;
