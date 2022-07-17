interface ProductPanelType {
  value: number;
  index: number;
}

function ProductPanel({ value, index }: ProductPanelType) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`productPanel-${index}`}
      aria-labelledby={`productMenu-${index}`}
    >
      {value === index && <div>Products {index}</div>}
    </div>
  );
}

export default ProductPanel;
