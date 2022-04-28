import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { CookiesProvider } from "react-cookie";

import Layout from "./layout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout />
          <ReactQueryDevtools />
        </Router>
      </QueryClientProvider>
    </CookiesProvider>
  );
};

export default App;
