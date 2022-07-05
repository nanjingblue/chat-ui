import React from "react";
import styled from "styled-components";

const StyleButton = styled.div`
  width: 180px;
  background-color: ${({theme}) => theme.primaryColor};
`

function Button({ onClick, label, children}) {
    return (
        <StyleButton onClick={onClick}>
            <button>{label}</button>
            {children}
        </StyleButton>
    )
}

export default Button