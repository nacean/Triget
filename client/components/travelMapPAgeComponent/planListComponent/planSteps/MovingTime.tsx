import { ListItem, ListItemText } from "@mui/material";
import { travelMovingTime } from "types/travelMovingTime";
import EarbudsOutlinedIcon from "@mui/icons-material/EarbudsOutlined";
import styled from "styled-components";

interface MovingTimeType {
  timeObj: travelMovingTime;
}

const StyledMovingTime = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 2.9vw;
  color: #5c5e6b;
  border-left: 1px solid #5c5e6b;
  margin-left: 8%;
`;

function MovingTime({ timeObj }: MovingTimeType) {
  return (
    <ListItem sx={{ width: "100%", height: "64px" }} disablePadding>
      <ListItemText>
        <StyledMovingTime>
          <EarbudsOutlinedIcon sx={{ marginRight: "10px" }} />
          {`${timeObj.transit_mode} ${timeObj.duration_time}분`}
        </StyledMovingTime>
      </ListItemText>
    </ListItem>
  );
}

export default MovingTime;
