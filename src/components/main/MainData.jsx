import Hero from '../hero/Hero';
import Services from '../services/Services'
import Materials from '../materials/Materials';
import About from '../about/About';
import Contact from '../contact/Contact';
import TowService from '../tow_service/TowService';
import Geo from '../geo/Geo';

export default function MainData() {
    return (
        <main>
            <Hero />
            <Services />
            <Materials />
            <About />
            <TowService />
            <Geo />
            <Contact />
        </main>
    )
}
