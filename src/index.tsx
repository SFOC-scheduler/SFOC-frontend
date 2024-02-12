import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <div>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </div>
);
