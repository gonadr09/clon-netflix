import Footer from "./common/components/footer/Footer";
import Navbar from "./common/components/navbar/Navbar";
import Movies from "./features/movies/services/pages/Movies";
import HomePage from "./features/home/pages/HomePage";
import Signin from "./features/auth/pages/Signin";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Signin />
      <Footer />
    </div>
  );
}

export default App;
