import React from "react"
import MessageCard from "."

import ganyu from "assets/images/ganyu.jpg"

export default {
    title: "UI 组件/MessageCard",
    components: MessageCard
}

export const Default = () => (
    <MessageCard
        avatarSrc={ganyu}
        name="甘雨"
        avatarStatus="online"
        statusText="在线"
        time="3 小时前"
        message="风雪的缩影，如琉璃般飘落"
        unreadCount={2}
    />
)

export const Active = () => (
    <MessageCard
        avatarSrc={ganyu}
        name="甘雨"
        avatarStatus="online"
        statusText="在线"
        time="3 小时前"
        message="风雪的缩影，如琉璃般飘落"
        unreadCount={2}
        active
    />
)

export const Replied = () => (
    <MessageCard
        avatarSrc={ganyu}
        name="甘雨"
        avatarStatus="online"
        statusText="在线"
        time="3 小时前"
        message="风雪的缩影，如琉璃般飘落"
        unreadCount={2}
        active
        replied
    />
)

export const RepliedInactive = () => (
    <MessageCard
        avatarSrc={ganyu}
        name="甘雨"
        avatarStatus="online"
        statusText="在线"
        time="3 小时前"
        message="风雪的缩影，如琉璃般飘落"
        unreadCount={2}
        replied
    />
)
