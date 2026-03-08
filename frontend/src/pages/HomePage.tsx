import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-dark text-white">
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
}
