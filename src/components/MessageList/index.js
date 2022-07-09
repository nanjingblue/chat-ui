import React from "react";
import PropTypes, {func} from "prop-types";
import StyledMessageList, {ChatList} from "./style";
import Filter from "../Filter";
import {Filters} from "../Filter/style";
import Select from "../Select";
import Option from "../Option";
import Button from "../Button";
import Icon from "../Icon";
import {ReactComponent as Plus} from "assets/icons/plus.svg";
import Input from "../Input";
import MessageCard from "../MessageCard";
import ganyu from "assets/images/ganyu.jpg"


function MessageList({children, ...rest}) {
    return (
        <StyledMessageList {...rest}>
            <Input.Search />
            <ChatFilter />
            <ChatList>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <MessageCard
                        key={index}
                        active={index === 3}
                        replied={index % 3 === 0}
                        avatarSrc={ganyu}
                        name="甘雨"
                        avatarStatus="online"
                        statusText="在线"
                        time="刚刚"
                        message="风雪的缩影，如琉璃般飘落"
                        unreadCount={7}
                    />
                ))}
            </ChatList>
        </StyledMessageList>
    )
}

function ChatFilter() {
    return (
        <Filter style={{padding: "20px 0"}}>
            <Filter.Filters label="消息列表">
                <Select>
                    <Option>最新消息优先</Option>
                    <Option>在线好友优先</Option>
                </Select>
            </Filter.Filters>

            <Filter.Action label="创建会话">
                <Button>
                    <Icon icon={Plus} width={12} height={12} />
                </Button>
            </Filter.Action>
        </Filter>
    )
}

MessageList.propTypes = {
    children: PropTypes.any
}

export default MessageList
