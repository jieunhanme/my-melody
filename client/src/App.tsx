import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./layout";

const queryClient = new QueryClient();

const code = new URLSearchParams(window.location.search).get("code");

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout code={code} />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
