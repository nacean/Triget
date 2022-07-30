import { InputAdornment, TextField } from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import budgetState from "atoms/plannerAtoms/budgetState";
import { useRecoilState } from "recoil";
import { ChangeEvent } from "react";

function BudgetForm() {
  const [budgetValue, setBudgetValue] = useRecoilState<number>(budgetState);

  const onBudgetChange = (
    newBudgetEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newBudget = Number(newBudgetEvent.target.value.replace(/,/g, ""));
    if (Number.isNaN(newBudget) === false) {
      setBudgetValue(newBudget);
    }
  };

  return (
    <TextField
      id="budget-textfield"
      label="Budget"
      variant="outlined"
      placeholder="예산"
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
      value={budgetValue.toLocaleString()}
      onChange={onBudgetChange}
    />
  );
}

export default BudgetForm;
