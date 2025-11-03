import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="scroll-smooth bg-white text-emerald-900">
      <Navbar />
      <Hero />
      <MainSections />
      <ContactFooter />
    </div>
  );
}

export default App;
