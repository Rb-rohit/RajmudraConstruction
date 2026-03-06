import React from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App = () => {
    return (
        <div className='min-h-screen'>
            <Navigation />
            <main>
                <Hero />
                <Services />
                <Projects />
                <About />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App;