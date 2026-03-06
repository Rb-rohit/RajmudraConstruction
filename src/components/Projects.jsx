import { motion } from "motion/react";

const projects = [
    {
        image: 'https://images.unsplash.com/photo-1692651762918-5c96f87c5448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjByZXNpZGVudGlhbHxlbnwxfHx8fDE3NzIyMTA5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Modern Residential Complex',
        category: 'Residential',
        location: 'Gadchiroli',
    },
    {
        image: 'https://images.unsplash.com/photo-1704297275778-8763889fa47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyMTQwMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Downtown Office Tower',
        category: 'Commercial',
        location: 'Gadchiroli',
    },
    {
        image: 'https://images.unsplash.com/photo-1646592474103-cfd22d1d9e34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcyMjAxMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Luxury Home Renovation',
        category: 'Renovation',
        location: 'Gadchiroli',
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                initial={{opacity:0, y:30}} 
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.5}}
                viewport={{once:true}} 
                className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our portfolio of successfully completed projects
                    </p>
                </motion.div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                        initial={{opacity:0, y:30}} 
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:index * 0.2}}
                        viewport={{once:true}}
                            key={index}
                            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="p-6 bg-white">
                                <span className="text-orange-600 text-sm uppercase tracking-wide">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl mt-2 mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
        
                <motion.div
                initial={{opacity:0, y:30}} 
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:1}}
                viewport={{once:true}}
                className="text-center mt-12">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors">
                        View All Projects
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
