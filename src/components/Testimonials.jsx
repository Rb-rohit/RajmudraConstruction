import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
    {
        name: 'Rahul Naitam',
        role: 'Homeowner',
        content: 'BuildPro transformed our vision into reality. The attention to detail and professionalism throughout our home renovation was outstanding. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Rohit Bodlkar',
        role: 'Business Owner',
        content: 'Our commercial office space was completed ahead of schedule and within budget. The team was responsive, professional, and delivered exceptional quality.',
        rating: 5,
    },
    {
        name: 'Gangaram  Thakare',
        role: 'Property Developer',
        content: 'We\'ve worked with BuildPro on multiple projects. Their expertise, reliability, and commitment to excellence make them our go-to construction partner.',
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.5}}
            viewport={{once:true}} 
            className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Don't just take our word for it - hear from our satisfied clients
                </p>
            </motion.div>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                <motion.div
                initial={{opacity:0, y:30}} 
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6, delay:index * 0.2}}
                viewport={{once:true}}
                    key={index}
                    className="bg-gray-50 p-8 rounded-lg shadow-md"
                >
                    <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-orange-600 text-orange-600" />
                        ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                        <div className="text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
        </section>
    );
}
