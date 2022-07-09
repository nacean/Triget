import { useState } from "react";
import styled from "styled-components";
import EachMenu from "./EachMenu";

const MenuNavContainer = styled.nav`
  width: 100%;
  height: 20%;
  display: flex;
  font-size: 20px;
`;

// 종합검색, 등 menu navigation
function MenuNav() {
  const [nowClickedMenu, setNowClickedMenu] = useState("종합 검색");
  return (
    <MenuNavContainer aria-label="menu-navigation">
      <EachMenu
        menuName="종합 검색"
        nowClickedMenu={nowClickedMenu}
        setNowClickedMenu={setNowClickedMenu}
      />
      <EachMenu
        menuName="다가오는 여행 일정표"
        nowClickedMenu={nowClickedMenu}
        setNowClickedMenu={setNowClickedMenu}
      />
      <EachMenu
        menuName="지난 여행 일정표"
        nowClickedMenu={nowClickedMenu}
        setNowClickedMenu={setNowClickedMenu}
      />
    </MenuNavContainer>
  );
}

export default MenuNav;
