import React, {useState} from "react";
import PropTypes from "prop-types";
import StyledFooter, {IconContainer} from "./style";
import Input from "../Input";
import Icon from "../Icon";
import Button from "../Button";
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icons/microphone.svg";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";
import StyledPopover from "../Popover/style";
import Emoji from "../Emoji";
import Popover from "../Popover";
import {useTheme} from "styled-components";

function Footer({children, ...rest}) {
    const [emojiIconActive, setEmojiIconActive] = useState(false)
    const theme = useTheme()
    return (
        <StyledFooter {...rest}>
            <Input
                placeholder="输入想和对方说的话"
                prefix={<Icon icon={ClipIcon}/>}
                suffix={<IconContainer>
                    <Popover
                        content={<PopoverContent />}
                        offset={{x: "-25px"}}
                        onVisible={() => setEmojiIconActive(true)}
                        onHide={() => setEmojiIconActive(false)}
                    >
                        <Icon icon={SmileIcon} color={emojiIconActive ? undefined : theme.gray3} />
                    </Popover>
                    <Icon icon={MicrophoneIcon} />
                    <Button size="52px">
                        <Icon
                            icon={PlaneIcon}
                            color="white"
                            style={{transform: "translateX(-2px)"}}
                        />
                    </Button>
                </IconContainer>}
            />
        </StyledFooter>
    )
}

function PopoverContent(props) {
    return (
        <StyledPopover>
            <Emoji label="smile">😊</Emoji>
            <Emoji label="smile">😊</Emoji>
            <Emoji label="smile">😊</Emoji>
            <Icon icon={OptionsIcon} style={{marginLeft: "24px"}} />
        </StyledPopover>
    )
}

Footer.propTypes = {
    children: PropTypes.any
}

export default Footer
