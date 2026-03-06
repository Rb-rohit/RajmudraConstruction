import { Home, Building2, Wrench, Hammer, PaintBucket, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
    {
        icon: Home,
        title: 'Residential Construction',
        description: 'Custom homes and residential developments built to the highest standards of quality and craftsmanship.',
        point: [
            'Building houses', 
            'villas', 'apartments', 
            'Turnkey home construction', 
            'Home extensions and additions',
        ],
    },
    {
        icon: Building2,
        title: 'Commercial Projects',
        description: 'Office buildings, retail spaces, and commercial facilities designed for functionality and aesthetics.',
        point: [
            'Office buildings',
            'Shops and showrooms',
            'Malls and commercial complexes',
            'Hotels and restaurants',
        ]
    },
    {
        icon: Hammer,
        title: 'Renovation & Remodeling',
        description: 'Transform existing spaces with our expert renovation and remodeling services.',
        point: [
            'House renovation',
            'Interior remodeling',
            'Structural upgrades',
            'Old building restoration',
        ]
    },
    {
        icon: Wrench,
        title: 'Industrial Construction',
        description: 'Large-scale industrial facilities and warehouses built with precision and efficiency.',
        point: [
            'Estimate & Costing',
            'Project Execution',
        ]
    },
    {
        icon: PaintBucket,
        title: 'Interior & Exterior Design',
        description: 'Professional interior finishing services that bring your vision to life with attention to detail.',
        point: [
            'Interior design',
            'False ceiling',
            'Modular kitchen',
            'Exterior elevation design',
            'Landscape design',
            'Elevation Design',
            'Layout Planning'
        ]
    },
    {
        icon: Lightbulb,
        title: 'Project Planning & Architecture',
        description: 'Expert guidance from planning to completion ensuring your project stays on track and on budget.',
        point: [
            'Architectural design',
            '2D / 3D building plans',
            'Structural design',
            'Construction planning',
            'Building Permission',
            'Property Valuation',
            'Future Planning',
        ]
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.5}}
                viewport={{once:true}}
                className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive construction solutions tailored to meet your unique needs
                    </p>
                </motion.div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:index * 0.2}}
                        viewport={{once:true}}
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                                <Icon className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-2xl mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                            <ul className='list-disc text-gray-600'>
                                {service.point?.map((keypoint, index)=> (
                                    <li key={index}>{keypoint}</li>
                                ))}
                                
                            </ul>
                        </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
