import { InputAdornment, TextField } from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import budgetState from "atoms/plannerAtoms/budgetState";
import { useRecoilState } from "recoil";

function BudgetForm() {
  const [budgetValue, setBudgetValue] = useRecoilState<number>(budgetState);

  const onBudgetChange = (newBudget: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetValue(Number(newBudget.target.value));
  };

  return (
    <TextField
      id="outlined-basic"
      label="Budget"
      variant="outlined"
      placeholder="예산"
      type="number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SavingsOutlinedIcon fontSize="small" />
          </InputAdornment>
        ),
        endAdornment: <InputAdornment position="end">원</InputAdornment>,
      }}
      sx={{
        width: "15%",
        marginRight: "30px",
      }}
      value={budgetValue}
      onChange={onBudgetChange}
    />
  );
}

export default BudgetForm;
