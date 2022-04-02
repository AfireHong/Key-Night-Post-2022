import "./App.css";
import Container from "@/components/Container";
import routes from "@/router";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>{renderRoutes(routes)}</Container>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
