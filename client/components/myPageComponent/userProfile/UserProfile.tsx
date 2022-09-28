import { Avatar, Chip } from "@mui/material";
import userState from "atoms/loginAtoms/userState";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import userType from "types/userTypes/userType";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const StyledUserProfileContainer = styled.div`
  width: 100%;
  padding: 0 20%;
  height: 150px;
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0 8px 18px -6px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 8px 18px -6px rgba(0, 0, 0, 0.15);
  box-shadow: 0 8px 18px -6px rgba(0, 0, 0, 0.15);
`;

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserName = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-left: 15%;
`;

const EditProfileBtn = styled(Chip)`
  padding: 20px 10px;
`;

function UserProfile() {
  const user = useRecoilValue<userType>(userState);
  return (
    <StyledUserProfileContainer>
      <StyledUserInfo>
        <Avatar />
        <StyledUserName>{user ? user.userID : null}</StyledUserName>
      </StyledUserInfo>
      <EditProfileBtn
        icon={<EditOutlinedIcon sx={{ fontSize: 18 }} />}
        label="프로필 편집"
        clickable
      />
    </StyledUserProfileContainer>
  );
}

export default UserProfile;
