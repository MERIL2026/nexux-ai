import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Cli from "./pages/Cli";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import Download from "./pages/Download";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Releases from "./pages/Releases";
import Security from "./pages/Security";

import Agents from "./pages/docs/Agents";
import CliGuide from "./pages/docs/CliGuide";
import Configuration from "./pages/docs/Configuration";
import GettingStarted from "./pages/docs/GettingStarted";
import Installation from "./pages/docs/Installation";
import SecurityDoc from "./pages/docs/SecurityDoc";
import Tools from "./pages/docs/Tools";
import Troubleshooting from "./pages/docs/Troubleshooting";
import Workspaces from "./pages/docs/Workspaces";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/download" component={Download} />
      <Route path="/cli" component={Cli} />
      <Route path="/features" component={Features} />
      <Route path="/security" component={Security} />
      <Route path="/docs" component={Docs} />
      
      {/* DOCUMENTATION SUBROUTES */}
      <Route path="/docs/getting-started" component={GettingStarted} />
      <Route path="/docs/installation" component={Installation} />
      <Route path="/docs/cli" component={CliGuide} />
      <Route path="/docs/configuration" component={Configuration} />
      <Route path="/docs/agents" component={Agents} />
      <Route path="/docs/tools" component={Tools} />
      <Route path="/docs/security" component={SecurityDoc} />
      <Route path="/docs/workspaces" component={Workspaces} />
      <Route path="/docs/troubleshooting" component={Troubleshooting} />

      <Route path="/releases" component={Releases} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}


function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster theme="dark" position="bottom-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
