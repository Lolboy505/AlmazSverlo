import redWallUrl from '@images/RedWall_light.webp';

import Hero from '@HomePage/sections/hero/Hero.jsx';
import Services from '@HomePage/sections/services/Services.jsx'
import Materials from '@HomePage/sections/materials/Materials.jsx';
import About from '@HomePage/sections/about/About.jsx';
import Contact from '@HomePage/sections/contact/Contact';
import TowService from '@HomePage/sections/TowService/TowService';
import Geo from '@HomePage/sections/geo/Geo';

export default function Page() {
    if (typeof window !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = redWallUrl;
        document.head.appendChild(link);
    }

    return (
        <>
            <Hero />
            <Services />
            <Materials />
            <About />
            <TowService />
            <Geo />
            <Contact />
        </>
    );
}
