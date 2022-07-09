import React from "react";
import PropTypes from "prop-types";
import StyledText from "./style";

function Text({children, type="primary", size = "normal", bold, ...rest}) {
    return (
        <StyledText type={type} size={size} bold={bold} {...rest}>
            {children}
        </StyledText>
    )
}

Text.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(["primary", "secondary", "danger"]),  // 主要，次要，危险警告
    size: PropTypes.oneOf([
        "xxsmall",
        "xsmall",
        "small",
        "normal",
        "medium",
        "large",
        "xlarge",
        "xxlarge",
    ]),
    blod: PropTypes.bool,
}

export default Text
