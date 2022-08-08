import React from "react";
import PropTypes, {func} from "prop-types";
import StyledMessageList, {ChatList} from "./style";
import MessageCard from "../MessageCard";
import ganyu from "assets/images/ganyu.jpg"
import {animated} from "react-spring";
import FilterList from "../FilterList";
import useStaggeredList from "../../hook/useStaggeredList";


function MessageList({children, ...rest}) {
    const trailAnimes = useStaggeredList(6)
    return (
        <StyledMessageList {...rest}>
            <FilterList
                options={["最新消息优先", "在线好友优先"]}
                actionLabel="创建会话"
            >
            <ChatList>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <animated.div key={index} style={trailAnimes[index]}>
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
                    </animated.div>
                ))}
            </ChatList>
            < /FilterList>
        </StyledMessageList>
    )
}

MessageList.propTypes = {
    children: PropTypes.any
}

export default MessageList
