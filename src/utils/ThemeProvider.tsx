import { ThemeProvider, createTheme } from '@mui/material';
import { ReactNode, createContext, useContext, useState } from 'react';

const ColorModeContext = createContext({ toggleColorMode: () => {}, changeColorMode: (targetMode: 'dark'|'light') => { targetMode } });

export const useColorMode = () => {
  return useContext(ColorModeContext);
}

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = {
    toggleColorMode: () =>
      setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark')),
    changeColorMode: (targetMode: 'dark' | 'light') => setMode(targetMode),
  };
  const theme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
