import React from "react";
import PropTypes from "prop-types";
import StyledBadge, {Count} from "./style";

function Badge({children, show = false, count = 0, showZero = false, ...rest}) {
    return (
        // variant 变体
        <StyledBadge variant={children ? "dot" : "default"} show={show} count={count} showZero={showZero} {...rest}>
            {children || <Count>{count}</Count>}
        </StyledBadge>
    )
}

Badge.propTypes = {
    show: PropTypes.bool,
    showZero: PropTypes.bool,
    count: PropTypes.number,
    children: PropTypes.any
}

export default Badge
