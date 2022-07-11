import React from "react";
import PropTypes from "prop-types";
import StyledIcon from "./style";
import SocialIcon from "./SocialIcon";

function Icon({
    icon: IconComponent,    // 起别名 IconComponent
    width = 24,
    height = 24,
    color,
    opacity,
    ...rest
}) {
    return (
        <StyledIcon color={color} opacity={opacity}{...rest}>
            {IconComponent && <IconComponent width={width} height={height}/>}
        </StyledIcon>
    )
}

Icon.propTypes = {
    icon: PropTypes.element,
    width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    opacity: PropTypes.number
}

Icon.Social = SocialIcon

export default Icon
