import React, {useState} from "react";
import PropTypes from "prop-types";
import StyledChatApp, {Content, Drawer, Nav, Sidebar} from "./style";
import NavBar from "../NavBar";
import MessageList from "../MessageList";
import Conversation from "../Conversation";
import Profile from "../Profile";
import {Route, Switch, useLocation} from "react-router-dom";
import ContactList from "../ContactList";
import FileList from "../FileList";
import NoteList from "../NoteList";
import EditProfile from "../EditProfile";
import Settings from "../Settings";
import BlockedList from "../BlockedList";

function ChatApp({children, ...rest}) {
    const [showDrawer, setShowDrawer] = useState(false)
    return (
        <StyledChatApp {...rest}>
            <Nav>
                <NavBar />
            </Nav>
            <Sidebar>
                    <Switch>
                        <Route exact path="/" >
                            <MessageList />
                        </Route>
                        <Route exact path="/contacts">
                            <ContactList />
                        </Route>
                        <Route exact path="/files">
                            <FileList />
                        </Route>
                        <Route exact path="/notes">
                            <NoteList />
                        </Route>
                        <Route path="/settings">
                            <EditProfile />
                        </Route>
                    </Switch>
            </Sidebar>
            <Content>
                <Switch>
                    <Route exact path="/settings">
                        <Settings />
                    </Route>
                    <Route exact path="/settings/blocked">
                        <BlockedList />
                    </Route>
                    <Route path="/">
                        <Conversation onAvatarClick={() => setShowDrawer(true)} />
                    </Route>
                </Switch>
            </Content>
            <Drawer show={showDrawer}>
                <Profile onCloseClick={() => setShowDrawer(false)} />
            </Drawer>
        </StyledChatApp>
    )
}

ChatApp.propTypes = {
    children: PropTypes.any
}

export default ChatApp
