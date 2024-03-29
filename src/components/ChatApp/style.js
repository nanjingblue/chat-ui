import styled, {css} from "styled-components"

const Nav = styled.div`
  flex-shrink: 0;
`

const Sidebar = styled.aside`
  max-width: 448px;
  min-width: 344px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.grediantGray };
`

const Content = styled.main`
  flex: 2;
  position: relative;;
`

const Drawer = styled.div`
  max-width: 380px;
  ${({ show }) => show && css`width: 380px;`}
`

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

export default StyledChatApp
export { Nav, Sidebar, Content, Drawer }