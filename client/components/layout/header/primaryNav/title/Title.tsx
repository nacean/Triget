import Link from "next/link";
import styled from "styled-components";

const TitleAnchor = styled.a`
  font-size: 40px;
  transition: 0.3s all;
  &:hover {
    color: #98dee3;
  }
`;

// navigation 에서 title로 가는 버튼
function Title() {
  return (
    <Link className="titleLink" href="/" passHref>
      <TitleAnchor>TRIGET</TitleAnchor>
    </Link>
  );
}

export default Title;
