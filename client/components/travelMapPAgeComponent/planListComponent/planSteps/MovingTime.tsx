import { ListItem, ListItemText } from "@mui/material";
import { travelMovingTime } from "types/travelMovingTime";
import EarbudsOutlinedIcon from "@mui/icons-material/EarbudsOutlined";
import styled from "styled-components";

interface MovingTimeType {
  timeObj: travelMovingTime;
}

const StyledMovingTime = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 35px;
  color: #5c5e6b;
  border-left: 1px solid #5c5e6b;
  margin-left: 106px;
  font-size: 15px;
`;

function MovingTime({ timeObj }: MovingTimeType) {
  return (
    <ListItem sx={{ width: "100%", height: "54px" }} disablePadding>
      <ListItemText>
        <StyledMovingTime>
          <EarbudsOutlinedIcon sx={{ marginRight: "10px" }} fontSize="small" />
          {`${timeObj.transitMode} ${timeObj.durationTime}분`}
        </StyledMovingTime>
      </ListItemText>
    </ListItem>
  );
}

export default MovingTime;
