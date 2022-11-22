import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import getTermsArray from "modules/termsOfServiceModule/getTermsArray";
import { useState } from "react";
import styled from "styled-components";
import termsArrayType from "types/termArray/termArrayType";

const StyledTermsOfService = styled.div`
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const StyledTermTitle = styled.h2`
  font-size: 20px;
  color: black;
`;

const StyledTermDescription = styled.p`
  margin-top: 10px;
`;

function TermsOfService() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onModalOpen = () => {
    setOpenModal(true);
  };
  const onModalClose = () => {
    setOpenModal(false);
  };

  const termArray: termsArrayType[] = getTermsArray();

  return (
    <>
      <StyledTermsOfService onClick={onModalOpen}>
        이용약관
      </StyledTermsOfService>
      <Dialog
        open={openModal}
        onClose={onModalClose}
        aria-labelledby="termsOfService-dialog-title"
        aria-describedby="termsOfService-dialog-description"
      >
        <DialogTitle id="termsOfService-dialog-title">이용약관</DialogTitle>
        <DialogContent>
          {termArray.map(({ termTitle, termDescription }: termsArrayType) => (
            <DialogContentText key={termTitle} sx={{ marginBottom: 3 }}>
              <StyledTermTitle>{termTitle}</StyledTermTitle>
              <StyledTermDescription>{termDescription}</StyledTermDescription>
            </DialogContentText>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={onModalClose} color="inherit">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TermsOfService;
