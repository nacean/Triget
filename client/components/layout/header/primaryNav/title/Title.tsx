import Link from "next/link";
import styled from "styled-components";
import { theme } from "styles/theme";

const TitleAnchor = styled.a`
  font-size: 40px;
  transition: 0.3s all;
  color: ${theme.colors.mainblue};
  font-style: italic;
  font-weight: 800;
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
