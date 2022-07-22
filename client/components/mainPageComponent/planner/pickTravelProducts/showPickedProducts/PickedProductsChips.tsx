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
import { productDataType } from "atoms/pickProductAtoms/productDataType";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import Image from "next/image";

interface PickedProductsChipsType {
  productKind: string;
  pickedProducts: productDataType[];
  setPickedProducts: SetterOrUpdater<productDataType[]>;
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
      pickedProducts.filter(
        productParam => productParam.product_id !== newProduct_id,
      ),
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
                    onItemDelete(product.product_id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
              sx={{ borderTopColor: "#9e9e9e" }}
            >
              <Image
                src={product.thumbnail_url}
                alt="pickedProductImage"
                width={50}
                height={50}
              />
              <ListItemText
                primary={product.product_name}
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
