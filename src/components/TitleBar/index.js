import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, {Actions, Title} from "./style";
import Avatar from "../Avater";
import Paragraph from "../Paragraph";
import Text from "../Text";
import Icon from "../Icon";
import ganyu from "assets/images/ganyu.jpg"
import {ReactComponent as Call} from "assets/icons/call.svg"
import {ReactComponent as Camera} from "assets/icons/camera.svg"
import {ReactComponent as Options} from "assets/icons/options.svg"

function TitleBar({onAvatarClick, children, ...rest}) {
    return (
        <StyledTitleBar {...rest}>
            <Avatar onClick={onAvatarClick} status="online" src={ganyu} />
            <Title>
                <Paragraph size="large">甘雨</Paragraph>
                <Paragraph type="secondary">
                    <Text>在线</Text>
                    <Text>· 最后阅读： 刚刚</Text>
                </Paragraph>
            </Title>
            <Actions>
                <Icon opacity={0.3} icon={Call} />
                <Icon opacity={0.3} icon={Camera} />
                <Icon opacity={0.3} icon={Options} />
            </Actions>
        </StyledTitleBar>
    )
}

TitleBar.propTypes = {
    children: PropTypes.any
}

export default TitleBar
