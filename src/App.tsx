import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Router from "./Router";
import GlobalStyle from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
