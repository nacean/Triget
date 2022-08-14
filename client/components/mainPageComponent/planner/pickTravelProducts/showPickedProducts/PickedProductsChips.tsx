import {
  Badge,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  SvgIconProps,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import Image from "next/image";
import { allProductType } from "types/productTypes/productDataType";

interface PickedProductsChipsType {
  productKind: string;
  pickedProducts: allProductType[];
  setPickedProducts: SetterOrUpdater<allProductType[]>;
  icon: React.ReactElement<SvgIconProps>;
}

const StyledChipsContainer = styled.div`
  width: 100%;
  min-height: 50px;
`;

function PickedProductsChips({
  productKind,
  pickedProducts,
  setPickedProducts,
  icon,
}: PickedProductsChipsType) {
  const onItemDelete = (newProduct_id: number) => {
    setPickedProducts(
      pickedProducts.filter(productParam => productParam._id !== newProduct_id),
    );
  };

  return (
    <StyledChipsContainer>
      <Divider sx={{ color: "#9e9e9e" }}>
        <Badge
          badgeContent={pickedProducts.length}
          sx={{ color: "#9e9e9e", marginRight: "3px" }}
        >
          {icon}
        </Badge>
        {productKind}
      </Divider>
      <List>
        {pickedProducts.map(product => (
          <Paper variant="outlined" sx={{ marginBottom: "3px" }}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    onItemDelete(product._id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
              sx={{ borderTopColor: "#9e9e9e" }}
            >
              {product.thumbnail !== "" && (
                <Image
                  src={product.thumbnail}
                  alt="pickedProductImage"
                  width={50}
                  height={50}
                />
              )}
              <ListItemText
                primary={product.name}
                sx={{
                  width: "50%",
                  marginLeft: "10px",
                }}
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </StyledChipsContainer>
  );
}

export default PickedProductsChips;
