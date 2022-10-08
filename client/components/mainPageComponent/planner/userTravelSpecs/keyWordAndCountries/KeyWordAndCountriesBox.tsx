import styled from "styled-components";
import CountriesForm from "./CountriesForm";
import KeyWordForm from "./KeyWordForm";

const KeyWordAndCountriesContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
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
