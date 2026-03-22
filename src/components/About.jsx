import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import downloadPDF from './Brocher';

const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Users, value: '200+', label: 'Projects Completed' },
    { icon: Clock, value: '98%', label: 'On-Time Delivery' },
    { icon: CheckCircle, value: '100%', label: 'Client Satisfaction' },
];

export function About() {

        
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.h2
                        initial={{opacity:0, y:20}} 
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.6}}
                        viewport={{once:true}} 
                        className="text-4xl md:text-5xl mb-6">
                            Building Excellence Since 2025
                        </motion.h2>
                        <motion.p
                        initial={{opacity:0, y:30}} 
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.7}}
                        viewport={{once:true}} 
                        className="text-xl text-gray-600 mb-6">
                            At BuildPro, we're more than just a construction company. We're your partners in bringing architectural dreams to life with precision, quality, and unwavering commitment.
                        </motion.p>
                        <motion.p
                        initial={{opacity:0, y:30}} 
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.7}}
                        viewport={{once:true}}
                        className="text-gray-600 mb-8">
                            Our team of skilled professionals combines decades of industry experience with cutting-edge technology and sustainable practices. From initial concept to final walkthrough, we ensure every project exceeds expectations while staying on schedule and within budget.
                        </motion.p>
                        <div className="space-y-3">
                            <motion.div
                            initial={{opacity:0, y:30}} 
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.5, delay:0.8}}
                            viewport={{once:true}} 
                            className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: "#ea580c" }}  />
                                <span className="text-gray-700">Licensed and fully insured contractors</span>
                            </motion.div>
                            <motion.div
                            initial={{opacity:0, y:30}} 
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.5, delay:0.9}}
                            viewport={{once:true}} 
                            className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: "#ea580c" }}  />
                                <span className="text-gray-700">Sustainable and eco-friendly building practices</span>
                            </motion.div>
                            <motion.div
                            initial={{opacity:0, y:30}} 
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.5, delay:1}}
                            viewport={{once:true}} 
                            className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: "#ea580c" }}  />
                                <span className="text-gray-700">Transparent pricing with no hidden costs</span>
                            </motion.div>
                        </div>

                        {/* DOWNLOAD BUTTON */}
                        <button
                          onClick={downloadPDF}
                          style={{ backgroundColor: "#f97316", color: "#fff" }}
                          className="px-6 py-3 rounded-lg mt-8"
                        >
                          Download Company Profile
                        </button>
                    </div>
          
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzIxNjU2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Construction team"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
        
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                    {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                        initial={{opacity:0, y:30}} 
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:index * 0.2}}
                        viewport={{once:true}} 
                        key={index} className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#ffedd5" }}>
                                    <Icon className="w-8 h-8" style={{ color: "#ea580c" }}  />
                                </div>
                            </div>
                            <div className="text-4xl mb-2" style={{ color: "#ea580c" }} >{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </motion.div>
                    );
                    })}
                </div>
            </div>

        </section>
    );
}
