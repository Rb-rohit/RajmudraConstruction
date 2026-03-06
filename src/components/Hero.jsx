import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyMTA2NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Construction site"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                <motion.h1 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.7}}
                viewport={{once:true}} 
                className="text-5xl md:text-7xl mb-6">
                    Building Your Vision Into Reality
                </motion.h1>
                <motion.p
                initial={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6, delay:0.8}}
                viewport={{once:true}} 
                className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                    Premier construction services with over 5 years of excellence in residential, commercial, and industrial projects
                </motion.p>
                <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:1}}
                viewport={{once:true}} 
                className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                        Get a Free Quote
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <a href='#projects' className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg transition-colors">View Our Projects</a>
                </motion.div>
            </div>
        </section>
    );
}
