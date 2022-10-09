import { AppBar, Tab, Tabs } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

interface ProductMenuType {
  menuNum: number;
  setMenuNum: Dispatch<SetStateAction<number>>;
}

const StyledTabsContainer = styled(Tabs)`
  margin: 0 auto;
  width: 992px;
  & .MuiTabs-indicator {
    background-color: ${theme.colors.mainblue};
    height: 3.5px;
  }
`;

const StyledTab = styled(Tab)`
  font-size: 24px;
  font-weight: bold;
  height: 60px;
  &.Mui-selected {
    color: ${theme.colors.mainblue};
  }
`;

function ProductMenu({ menuNum, setMenuNum }: ProductMenuType) {
  const menuProps = (index: number) => {
    return {
      id: `productMenu-${index}`,
      "aria-controls": `productPanel-${index}`,
    };
  };

  const onMenuChange = (event: React.SyntheticEvent, newValue: number) => {
    setMenuNum(newValue);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        width: "100%",
        boxShadow: "none",
        marginBottom: "24px",
      }}
    >
      <StyledTabsContainer
        textColor="inherit"
        variant="fullWidth"
        aria-label="products-menus"
        value={menuNum}
        onChange={onMenuChange}
      >
        <StyledTab label="항공" {...menuProps(0)} />
        <StyledTab label="숙박" {...menuProps(1)} />
        <StyledTab label="식당" {...menuProps(3)} />
        <StyledTab label="액티비티" {...menuProps(4)} />
      </StyledTabsContainer>
    </AppBar>
  );
}

export default ProductMenu;
