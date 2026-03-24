import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import assets from '../assets/assets';
import { motion } from 'motion/react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8}}
            viewport={{once:true}} 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <motion.div
                    initial={{opacity:0, x:-30}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:0.6, delay:0.3}}
                    viewport={{once:true}}
                    >
                        <span
                        className="">
                            <img src={assets.logo}  className='w-30 h-30 sm:h-24 sm:w-60'/>
                        </span>
                        <p className="text-gray-400 mt-3">
                            Building excellence with quality, integrity, and innovation since 2026.
                        </p>
                    </motion.div>
          
                    <div>
                        <h4 className="text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-orange-600 transition-colors">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-orange-600 transition-colors">Services</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-orange-600 transition-colors">Projects</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-orange-600 transition-colors">About</a></li>
                        </ul>
                    </div>
          
                    <div>
                        <h4 className="text-lg mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Residential</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Commercial</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Renovation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Consulting</a></li>
                        </ul>
                    </div>
          
                    <motion.div
                    initial={{opacity:0, x:30}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:0.6, delay:0.3}}
                    viewport={{once:true}}
                    >
                        <h4 className="text-lg mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
        
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 Rajmudra Construction. All rights reserved.</p> <br></br>
                    <p>&copy; Rb.rohit744 Developer</p>
                </div>
            </motion.div>
        </footer>
    );
}
