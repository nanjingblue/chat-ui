import React from "react";
import PropTypes, {func} from "prop-types";
import StyledInput, {InputContainer, Prefix, Suffix} from "./style";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import InputText from "./InputText";

function Input({placeholder = "请输入内容", prefix, suffix, ...rest}) {
    return (
        <InputContainer {...rest}>
            {prefix && <Prefix>{prefix}</Prefix>}
            <StyledInput placeholder={placeholder} />
            {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
    )
}

function Search({placeholder = "请输入内容...", ...rest}) {
    const theme = useTheme();
    return (
        <Input placeholder={placeholder} prefix={<FontAwesomeIcon icon={faSearch} color={theme.gray3} fontSize={18} />} {...rest} />
    )
}
Input.Search = Search
Input.Text = InputText

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
}

export default Input
