import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainNavigation from "./components/MainNavigation";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigation />
    </QueryClientProvider>
  );
}

export default App;
