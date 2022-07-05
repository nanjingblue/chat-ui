import React from "react";
import PropTypes from "prop-types";
import StyledAvatar, {AvatarClip, AvatarImage, StatusIcon} from "./style";

function Avatar({ src, size="48px", status, statusIconSize="8px", ...rest}) {
    return (
        <StyledAvatar {...rest}>
            { status && (
                <StatusIcon status={status} size={statusIconSize}></StatusIcon>  // 默认不显示ICON 当有状态是才显示
            )}
            <AvatarClip size={size}>
                <AvatarImage src={ src } alt="" />
            </AvatarClip>
        </StyledAvatar>
    )
}

// 属性类型检查
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
    status: PropTypes.oneOf(["online", "offline"]),
    statusIconSize: PropTypes.string
}

export default Avatar