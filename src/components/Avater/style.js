import React from "react";
import styled, {css} from "styled-components";
import {circle} from "../../utils/mixins";

const circleMixinFunc = (color, size = "8px") => css`
  content: "";
  display: block;   // 块级元素 ，此元素前后会带有换行符。
  position: absolute;
  ${circle(color, size)}
`

const StyledAvatar = styled.div`
  position: relative;   // 相对定位
`

const StatusIcon = styled.div`
  position: absolute;   // 绝对定位
  left: 2px;
  top: 4px;
  
  &::before {
    ${({size}) => circleMixinFunc("white", size)}
    transform: scale(2)
  }
  
  &::after {
    ${({ theme, status, size }) => {
        if (status === "online") {
            return circleMixinFunc(theme.green, size)
        } else if (status === "offline") {
            return circleMixinFunc(theme.gray, size)
        }
    }
  }
`

const AvatarClip = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 50%;
  overflow: hidden;   // 图片溢出的部分不显示
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  // 自动等比例缩放
  object-position: center;  // 居中
`

export default StyledAvatar
export { StatusIcon, AvatarClip, AvatarImage }
