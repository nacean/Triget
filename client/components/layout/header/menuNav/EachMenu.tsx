import styled from "styled-components";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

// props를 통해 색깔 변화
const MenuAnchor = styled.a`
  display: block;
  margin-right: 40px;
  color: ${props => (props.color === "#000" ? "#000" : "#6f767d")};
  border-bottom: 2px solid ${props => props.color};
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

interface EachMenuType {
  menuName: string;
  nowClickedMenu: string;
  setNowClickedMenu: Dispatch<SetStateAction<string>>;
}

// menu Nav에 대한 anchor 템플릿, 재사용 가능
function EachMenu({
  menuName,
  nowClickedMenu,
  setNowClickedMenu,
}: EachMenuType) {
  const onClickMenu = () => {
    setNowClickedMenu(menuName);
  };
  return (
    <Link className="myPageLink" href="/" passHref>
      <MenuAnchor
        color={nowClickedMenu === menuName ? "#000" : "none"}
        onClick={onClickMenu}
      >
        {menuName}
      </MenuAnchor>
    </Link>
  );
}

export default EachMenu;
