import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import Header from "./component/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
