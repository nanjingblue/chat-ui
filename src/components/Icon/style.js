import styled from "styled-components"

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg, 
  svg * {
    // 当没有给 颜色和透明度时 保持初始的颜色和透明度
    ${({ color }) => (color ? `fill: ${color}` : "")};
    ${({ opacity }) => (opacity ? `fill: ${opacity}` : "")};
  }
`

export default StyledIcon