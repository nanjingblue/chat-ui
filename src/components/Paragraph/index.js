import React from "react";
import PropTypes from "prop-types";
import StyledParagraph from "./style";

/*
@ellipsis 单行超长段落是否显示省略号
 */
function Paragraph({children, ellipsis, ...rest}) {
    return (
        // as="p" 表示以p标签渲染 做到段落换行
        <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
           {children}
        </StyledParagraph>
    )
}

Paragraph.propTypes = {
    children: PropTypes.any,
    ellipsis: PropTypes.bool,
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

export default Paragraph
