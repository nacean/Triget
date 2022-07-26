import Link from "next/link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styled from "styled-components";

const MyPageAnchor = styled.a`
  font-size: 16px;
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
  return (
    <Link className="myPageLink" href="/" passHref>
      <MyPageAnchor>
        <MyPageWord>마이페이지</MyPageWord>
        <StyledMyPageLogo>
          <PersonOutlineOutlinedIcon
            sx={{ fontSize: "30px", color: "#6F767D" }}
          />
        </StyledMyPageLogo>
      </MyPageAnchor>
    </Link>
  );
}

export default MyPageLink;
