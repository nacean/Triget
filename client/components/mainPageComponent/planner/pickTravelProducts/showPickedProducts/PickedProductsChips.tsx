import { Badge, Chip, SvgIconProps } from "@mui/material";
import { productDataType } from "atoms/pickProductAtoms/productDataType";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";

interface PickedProductsChipsType {
  productKind: string;
  pickedProducts: productDataType[];
  setPickedProducts: SetterOrUpdater<productDataType[]>;
  icon: React.ReactElement<SvgIconProps>;
}

const StyledChipsContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledProductKind = styled.p`
  display: flex;
  align-items: center;
  color: #9e9e9e;
  font-size: 18px;
  margin-right: 5px;
`;

function PickedProductsChips({
  productKind,
  pickedProducts,
  setPickedProducts,
  icon,
}: PickedProductsChipsType) {
  const onChipDelete = (newProduct_id: number) => {
    setPickedProducts(
      pickedProducts.filter(
        productParam => productParam.product_id !== newProduct_id,
      ),
    );
  };

  return (
    <StyledChipsContainer>
      <Badge
        badgeContent={pickedProducts.length}
        sx={{ color: "#9e9e9e", marginRight: "3px" }}
      >
        {icon}
      </Badge>
      <StyledProductKind>{`${productKind}`}</StyledProductKind>
      {pickedProducts.map(product => (
        <Chip
          label={product.product_name}
          variant="outlined"
          onDelete={() => onChipDelete(product.product_id)}
          sx={{ marginRight: "5px" }}
        />
      ))}
    </StyledChipsContainer>
  );
}

export default PickedProductsChips;
