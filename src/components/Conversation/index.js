import React from "react";
import PropTypes from "prop-types";
import StyledConversation, {MyChatBubble} from "./style";
import TitleBar from "../TitleBar";
import Footer from "../Footer";
import ChatBubble from "../ChatBubble";
import Emoji from "../Emoji";
import { Conversations } from "./style";

function Conversation({children, ...rest}) {
    return (
        <StyledConversation>
            <TitleBar />
            <Conversations>
                <ChatBubble time = "昨天 下午16：32">来丸 GenShin </ChatBubble>
                <MyChatBubble time = "昨天 下午16:33">来了</MyChatBubble>
                <ChatBubble time = "昨天 下午16：34">风雪的缩影，如琉璃般飘落</ChatBubble>
                <MyChatBubble time = "昨天 下午16:35">爱你<Emoji label="love">❤️</Emoji> </MyChatBubble>
                <ChatBubble time = "昨天 下午16：36"><Emoji label="love">❤️</Emoji><Emoji label="love">❤️</Emoji><Emoji label="love">❤️</Emoji></ChatBubble>
            </Conversations>
            <Footer />
        </StyledConversation>
    )
}

Conversation.propTypes = {
    children: PropTypes.any
}

export default Conversation
