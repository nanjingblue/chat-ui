import React from "react"
import Emoji from "."

export default {
    title: "UI 组件/Emoji",
    components: Emoji
}

export const Default = () => (
    <>
        <Emoji label="smile">😊</Emoji>
        <Emoji label="sad">🥺</Emoji>
        <Emoji label="happy">🤡</Emoji>
    </>
)
