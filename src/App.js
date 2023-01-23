import { Container } from '@mui/material';

//import SidePanel from './components/SidePanel';
import ResponsiveDrawer from './components/ResponsiveDrawer';

function App() {
  return (
    <Container style={{ border: "1px solid black" }}>
      <ResponsiveDrawer />
    </Container>
  );
}

export default App;
