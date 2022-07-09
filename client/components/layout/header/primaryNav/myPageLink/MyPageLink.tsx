import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
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

// Navigation 에서 myPage로 가는 버튼
function MyPageLink() {
  return (
    <Link className="myPageLink" href="/" passHref>
      <MyPageAnchor>
        <MyPageWord>마이페이지</MyPageWord>
        <div className="myPageLogo">
          <UserOutlined style={{ fontSize: "24px", color: "#6F767D" }} />
        </div>
      </MyPageAnchor>
    </Link>
  );
}

export default MyPageLink;
