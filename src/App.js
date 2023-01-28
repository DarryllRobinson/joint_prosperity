import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Route from  './components/Route'
import Main from './components/Main';
import Book from './components/Book';
import Location from './components/Location';
import FirstVisit from './components/FirstVisit';
import Services from './components/Services'

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Route path="/"><Main /></Route>
      <Route path="/book"><Book /></Route>
      <Route path="/firstvisit"><FirstVisit /></Route>
      <Route path="/location"><Location /></Route>
      <Route path="/services"><Services /></Route>
    </ThemeProvider>
  );
}

export default App;
