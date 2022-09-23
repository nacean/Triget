import Link from "next/link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styled from "styled-components";
import userState from "atoms/loginAtoms/userState";
import { useRecoilValue } from "recoil";
import userType from "types/userTypes/userType";

const MyPageAnchor = styled.a`
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #6f767d;
`;

const MyPageWord = styled.div`
  margin-right: 10px;
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
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: "30px", color: "#6F767D" }}
            />
          </StyledMyPageLogo>
        )}
      </MyPageAnchor>
    </Link>
  );
}

export default MyPageLink;
