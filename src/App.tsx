import ContactUs from "./components/ContactUs";
import Counter from "./components/Counter";
import CustomersReviews from "./components/CustomersReviews";
import Excellence from "./components/Excellence";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Staff from "./components/Staff";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Counter />
      <Services />
      <Staff />
      <Excellence />
      <CustomersReviews />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
