import styled from "styled-components";
import CountriesForm from "./CountriesForm";
import KeyWordForm from "./KeyWordForm";

const KeyWordAndCountriesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function KeyWordAndCountriesBox() {
  return (
    <KeyWordAndCountriesContainer>
      <KeyWordForm />
      <CountriesForm />
    </KeyWordAndCountriesContainer>
  );
}

export default KeyWordAndCountriesBox;
