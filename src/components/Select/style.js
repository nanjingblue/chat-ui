import styled from "styled-components"
import CareDown from "assets/icons/caret_down.svg"

const StyledSelect = styled.select`
  appearance: none;
  background-image: url(${CareDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};
  
  ::-ms-expand {
    display: none;
  }
`

export default StyledSelect