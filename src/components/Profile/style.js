import styled from "styled-components"
import { ReactComponent as allowRight } from "assets/icons/arrowRight.svg";
import Icon from "../Icon";

const SocialLinks = styled.div`
  & > * {
    margin: 0 9px;
  }
`

const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`

const AlbumSection = styled.section``

const AlbumTitle = styled.div`
  justify-self: stretch;    // 占据整个父宽度
  display: flex;
  justify-content: space-between;   // 水平方向左右分散对齐
  align-items: center;  // 垂直居中
  
  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    &::after {
      display: inline-block;
      content: url(${allowRight});
      margin-left: 2px;
    }
  }
`

const Album = styled.div`
  margin-top: 14px;
  justify-self: start;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;    // 间距为 10px
`

const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`

const CloseIcon = styled(Icon).attrs({opacity: 0.3})`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;  // 鼠标指针小手
`

const StyledProfile = styled.div`
  display: grid;
  align-content: start;
  justify-content: center;
  justify-items: center;
  position: relative;
  padding: 30px;
  height: 100vh;
  margin-top: 2vh;
  overflow-y: auto;
`

export default StyledProfile
export {SocialLinks, ContactSection, Album, AlbumTitle, AlbumSection, Photo, CloseIcon}