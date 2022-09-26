import { Avatar, Button } from "@mui/material";
import userState from "atoms/loginAtoms/userState";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import userType from "types/userTypes/userType";

const StyledUserProfileContainer = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 70px;
  padding: 0 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0 8px 8px -6px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 8px 8px -6px rgba(0, 0, 0, 0.12);
  box-shadow: 0 8px 8px -6px rgba(0, 0, 0, 0.12);
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

function UserProfile() {
  const user = useRecoilValue<userType>(userState);
  return (
    <StyledUserProfileContainer>
      <StyledUserInfo>
        <Avatar />
        <StyledUserName>{user ? user.userID : null}</StyledUserName>
      </StyledUserInfo>
      <Button variant="outlined" size="large" color="inherit">
        프로필 편집
      </Button>
    </StyledUserProfileContainer>
  );
}

export default UserProfile;
