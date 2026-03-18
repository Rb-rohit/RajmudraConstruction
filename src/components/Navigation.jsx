import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import assets from '../assets/assets';
import { motion } from 'motion/react';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav 
            initial={{opacity:0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="">
                                <img src={assets.logo} 
                                    className='w-30 h-15 sm:h-15 sm:w-45' alt=''/>
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <a href="#" className="text-gray-900 hover:text-orange-600 transition-colors">Home</a>
                            <a href="#services" className="text-gray-900 hover:text-orange-600 transition-colors">Services</a>
                            <a href="#projects" className="text-gray-900 hover:text-orange-600 transition-colors">Projects</a>
                            <a href="#about" className="text-gray-900 hover:text-orange-600 transition-colors">About</a>
                            <a href="#contact" className="text-gray-900 hover:text-orange-600 transition-colors">Contact</a>
                            <a href="#contact" className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                                <Phone className="w-4 h-4" />
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 hover:text-orange-600"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
            <div className="md:hidden bg-white border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-orange-50 hover:text-orange-600 rounded-md">Home</a>
                    <a href="#services" className="block px-3 py-2 text-gray-900 hover:bg-orange-50 hover:text-orange-600 rounded-md">Services</a>
                    <a href="#projects" className="block px-3 py-2 text-gray-900 hover:bg-orange-50 hover:text-orange-600 rounded-md">Projects</a>
                    <a href="#about" className="block px-3 py-2 text-gray-900 hover:bg-orange-50 hover:text-orange-600 rounded-md">About</a>
                    <a href="#contact" className="block px-3 py-2 text-gray-900 hover:bg-orange-50 hover:text-orange-600 rounded-md">Contact</a>
                    <a href="tel:+1234567890" className="block px-3 py-2 text-center bg-orange-600 text-white rounded-md hover:bg-orange-700">
                        call us on 9921923609
                    </a>
                </div>
            </div>
            )}
        </motion.nav>
    );
}
