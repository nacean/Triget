import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import styled from "styled-components";
import userState from "atoms/loginAtoms/userState";
import { useRecoilValue } from "recoil";
import userType from "types/userTypes/userType";
import { theme } from "styles/theme";

const MyPageAnchor = styled.a`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #8f9094;
  &:hover {
    color: ${theme.colors.mainblue};
  }
`;

const MyPageWord = styled.div`
  margin-right: 7px;
`;

const StyledMyPageLogo = styled.div`
  display: flex;
  align-items: center;
`;

// Navigation 에서 myPage로 가는 버튼
function MyPageLink() {
  const user = useRecoilValue<userType | null>(userState);

  return (
    <Link
      className="myPageLink"
      href={user ? "/MyPage" : "/loginPage"}
      passHref
    >
      <MyPageAnchor>
        <MyPageWord>{user ? "마이페이지" : "로그인"}</MyPageWord>
        {user && (
          <StyledMyPageLogo>
            <PersonIcon
              sx={{
                fontSize: "24px",
                color: "inherit",
                marginBottom: "2px",
              }}
            />
          </StyledMyPageLogo>
        )}
      </MyPageAnchor>
    </Link>
  );
}

export default MyPageLink;
