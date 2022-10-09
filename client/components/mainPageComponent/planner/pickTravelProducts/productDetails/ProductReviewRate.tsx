import { Rating } from "@mui/material";

interface ProductReviewRateType {
  reviewRate: number;
}

function ProductReviewRate({ reviewRate }: ProductReviewRateType) {
  return (
    <Rating
      name="product-rating"
      defaultValue={reviewRate}
      precision={0.5}
      readOnly
      sx={{ margin: "8px 0" }}
    />
  );
}

export default ProductReviewRate;
