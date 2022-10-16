import { InputAdornment } from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import budgetState from "atoms/plannerAtoms/budgetState";
import { useRecoilState } from "recoil";
import { ChangeEvent } from "react";
import StyledTextField from "styles/styledTemplate/StyledTextField";
import { theme } from "styles/theme";

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
    <StyledTextField
      id="budget-textfield"
      label="Budget"
      variant="outlined"
      placeholder="예산"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SavingsOutlinedIcon
              fontSize="small"
              sx={{
                color: budgetValue ? theme.colors.mainblue : "#aaa",
                zIndex: 1200,
              }}
            />
          </InputAdornment>
        ),
        endAdornment: <InputAdornment position="end">원</InputAdornment>,
      }}
      sx={{
        width: "100%",
        marginRight: "30px",
      }}
      value={budgetValue.toLocaleString()}
      onChange={onBudgetChange}
    />
  );
}

export default BudgetForm;
