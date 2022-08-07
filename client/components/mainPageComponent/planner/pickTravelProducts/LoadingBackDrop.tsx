import { Backdrop, CircularProgress } from "@mui/material";
import styled from "styled-components";

const LoadingProgress = styled.div`
  margin-bottom: 354px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingParagraph = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

function LoadingBackdrop({ loading }: { loading: boolean }) {
  return (
    <Backdrop
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
      open={loading}
    >
      <LoadingProgress>
        <CircularProgress color="inherit" size={60} />
        <LoadingParagraph>상품을 불러오고 있습니다...</LoadingParagraph>
      </LoadingProgress>
    </Backdrop>
  );
}

export default LoadingBackdrop;
