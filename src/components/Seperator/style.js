import styled from "styled-components"
// 分割线组件
const StyledSeperator = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`

export default StyledSeperator