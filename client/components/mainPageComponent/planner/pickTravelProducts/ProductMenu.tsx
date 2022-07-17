import { AppBar, Tab, Tabs } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface ProductMenuType {
  menuNum: number;
  setMenuNum: Dispatch<SetStateAction<number>>;
}

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
    <AppBar position="static" color="inherit">
      <Tabs
        textColor="inherit"
        variant="fullWidth"
        aria-label="products-menus"
        value={menuNum}
        onChange={onMenuChange}
        TabIndicatorProps={{ style: { backgroundColor: "#000" } }}
      >
        <Tab label="항공" {...menuProps(0)} sx={{ fontSize: 24 }} />
        <Tab label="숙박" {...menuProps(1)} sx={{ fontSize: 24 }} />
        <Tab label="식당" {...menuProps(3)} sx={{ fontSize: 24 }} />
        <Tab label="액티비티" {...menuProps(4)} sx={{ fontSize: 24 }} />
      </Tabs>
    </AppBar>
  );
}

export default ProductMenu;
