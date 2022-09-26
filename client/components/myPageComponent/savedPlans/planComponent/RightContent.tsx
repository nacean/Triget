import { Button, Fade, IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";
import { theme } from "styles/theme";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

interface RightContentType {
  viewManipulateBtns: boolean;
}

const StyledCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: 30%;
`;

const StyledManipulateBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 40px;
`;

const IconBtn = styled(IconButton)`
  transition: all 1s;
  border-radius: 100%;
  background-color: #f5f5f5;
  margin-left: 8px;
`;

const StyledPrice = styled.div`
  font-size: 26px;
  font-weight: 600;
`;

const StyledCurrency = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const StyledViewPlanBtn = styled(Button)`
  border-radius: 8px;
  background-color: ${theme.colors.mainblue};
  width: 170px;
  height: 45px;
`;

function RightContent({ viewManipulateBtns }: RightContentType) {
  return (
    <StyledCardRight>
      <Fade in={viewManipulateBtns}>
        <StyledManipulateBtnContainer>
          <Tooltip title="수정하기" arrow>
            <IconBtn>
              <ShareOutlinedIcon fontSize="small" />
            </IconBtn>
          </Tooltip>
          <Tooltip title="공유하기" arrow>
            <IconBtn>
              <EditOutlinedIcon fontSize="small" />
            </IconBtn>
          </Tooltip>
          <Tooltip title="삭제하기" arrow>
            <IconBtn>
              <DeleteOutlinedIcon fontSize="small" />
            </IconBtn>
          </Tooltip>
        </StyledManipulateBtnContainer>
      </Fade>
      <StyledPrice>
        5,000,0000<StyledCurrency>원</StyledCurrency>
      </StyledPrice>
      <StyledViewPlanBtn variant="contained">일정보기</StyledViewPlanBtn>
    </StyledCardRight>
  );
}

export default RightContent;
