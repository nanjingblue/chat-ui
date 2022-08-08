import ChatApp from "./components/ChatApp";
import theme from "./theme";
import {ThemeProvider} from "styled-components";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <ChatApp />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;
