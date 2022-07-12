import React from "react";
import PropTypes from "prop-types";
import StyledInputText, {InputUnderLine} from "./style";
import LabelContainer from "../../LabelContainer";

function InputText({label, placeholder="请输入内容", ...rest}) {
    const input = <InputUnderLine type="text" placeholder={placeholder} />
    return (
        <StyledInputText>
            {label ? <LabelContainer label={label}>{input}</LabelContainer> : input }
        </StyledInputText>
    )
}

InputText.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default InputText
