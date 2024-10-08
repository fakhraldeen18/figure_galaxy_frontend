import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import App from "./App"
import "./index.css"
import { ThemeProvider } from "./context/ThemeProvider"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App /> 
    </ThemeProvider>
  </QueryClientProvider>
)
