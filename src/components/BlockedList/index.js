import React from "react";
import PropTypes, {array} from "prop-types";
import StyledBlockedList, {
    BlockedAvatar,
    BlockedName,
    ClosableAvatar,
    CloseIcon,
    FriendList,
    SettingsMenu
} from "./style";
import Icon from "../Icon";
import {ReactComponent as ArrowMenuLeft} from "assets/icons/arrowMenuLeft.svg";
import Text from "../Text";
import face from "assets/images/773.jpg"
import {ReactComponent as closeCircle} from "assets/icons/closeCircle.svg";

function BlockedList({children, ...rest}) {
    return (
        <StyledBlockedList {...rest}>
            <SettingsMenu>
                <Icon
                    icon={ArrowMenuLeft}
                    css={`cursor: pointer;`}
                />
                <Text size="xxlarge">已屏蔽好友</Text>
            </SettingsMenu>
            <FriendList>
                {new Array(8).fill(0).map((_, i) => {
                    return (
                    <ClosableAvatar key={i}>
                    <BlockedAvatar size="105px" src={face} />
                    <CloseIcon width={46} height={51} icon={closeCircle} />
                    <BlockedName>丘丘人</BlockedName>
                    </ClosableAvatar>
                    )
                })}
            </FriendList>
        </StyledBlockedList>
    )
}

BlockedList.propTypes = {
    children: PropTypes.any
}

export default BlockedList
