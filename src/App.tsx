import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoTabs from "./components/InfoTabs";
import UsefulGuides from "./components/UsefulGuides";

function App() {
  return (
    <main className="page-shell">
      <Header />
      <Hero />
      <InfoTabs />
      <UsefulGuides />
      <Footer />
    </main>
  );
}

export default App;
