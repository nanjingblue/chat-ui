import {css} from "styled-components";

export const circle = (color, size = "8px") => css`
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background-color: ${color};
`

export const activeBar = ({barWidth = "8px", shadowWidth = "20px"} = {}) => css`
    position: relative;
    &::before,
    &::after {
        display: block;
        content: "";
        position: absolute;
        height: 100%;
        left: 0;
        transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    &::before {
        width: ${barWidth};
        background: linear-gradient(
            180deg,
            rgba(142, 197, 242, 1) 0%,
            rgba(79, 157, 222, 1) 100%
        );
    }
    
    &::after {
        width: ${shadowWidth};
        background: linear-gradient(
            270deg,
            rgba(41, 47, 76, 1) 0%,
            rgba(142, 197, 242, 1) 100%
        );
        opacity: 0.6;   // 透明度
    }
`

export const card = (radius = "6px", padding = "20px 30px") => css`
  padding: ${padding};
  background: ${({ theme }) => theme.background};
  box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04);
  border-radius: ${radius};
`
