import { Dashboard, SidebarMenu, Organization, Topbar } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material"; // reset all default css
import { ColorModeContext, useMode } from "./styles/theme";
import React from "react";

const App = () => {
  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider
      value={coloMode as { toggleColorMode: () => void }}
    >
      <ThemeProvider theme={theme as { toggleColorMode: () => void }}>
        {/* Rest CSS */}
        <CssBaseline />

        <BrowserRouter>
          <main className="app">
            <SidebarMenu />
            <section className="content">
              <Topbar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Organization />} />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
