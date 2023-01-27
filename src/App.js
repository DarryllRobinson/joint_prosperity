import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ResponsiveDrawer from './components/ResponsiveDrawer';

const theme = createTheme();

function App() {
  return (<ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="lg">
      <ResponsiveDrawer />
    </Container>
  </ThemeProvider>
  );
}

export default App;
