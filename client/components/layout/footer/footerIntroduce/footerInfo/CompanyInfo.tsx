import { Link } from "@mui/material";
import styled from "styled-components";

const StyledCompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  height: 120px;
`;

const StyledCompanyName = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const StyledLocation = styled.p`
  font-size: 13px;
`;

function CompanyInfo() {
  return (
    <StyledCompanyInfo>
      <StyledCompanyName>Triget</StyledCompanyName>
      <StyledLocation>
        주소 서울특별시 강남구 테헤란로 311(역삼동) 아남타워빌딩 7층(06151)
      </StyledLocation>
      <Link
        href="mailto:triget13082@gmail.com"
        underline="none"
        sx={{ fontSize: 13 }}
        color="inherit"
      >
        이메일 triget13082@gmail.com
      </Link>
      <Link
        href="mailto:triget13082@gmail.com"
        underline="none"
        sx={{ fontSize: 13 }}
        color="inherit"
      >
        마케팅/제휴 문의 triget13082@gmail.com
      </Link>
    </StyledCompanyInfo>
  );
}

export default CompanyInfo;
