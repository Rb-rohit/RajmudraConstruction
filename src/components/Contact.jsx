
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        Fname: "",
        Lname: "",
        email: "",
        phone: "",
        project: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/contact", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
                .then(()=> {
                    setLoading(false);
                });

        const data = await res.json();

        if (data.success) {
            alert("Message sent successfully!");
            setForm({  Fname: "", Lname: "", email: "", phone: "", project: "", message: "" });
        }else {
            alert("Error sending message");
        }

        } catch(error) {
            console.log(error);
            alert("Server error");
        }
        
    };
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <motion.div
            initial= "hidden"
            whileInView="visible"
            viewport={{once:true}}
            transition={{staggerChildren:0.2}}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2 
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.5, delay:0.4}}
                    viewport={{once:true}}
                    className="text-4xl md:text-5xl mb-4">Get In Touch</motion.h2>
                    <motion.p 
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.5, delay:0.5}}
                    viewport={{once:true}}
                    className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start your project? Contact us today for a free consultation
                    </motion.p>
                </div>
        
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <motion.form
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.6}}
                        viewport={{once:true}} 
                        className="space-y-6"
                        onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                                        placeholder="Name"
                                        name='Fname'
                                        value={form.Fname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                                        placeholder="Last Name"
                                        name='Lname'
                                        value={form.Lname}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
              
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                                    placeholder="Enter your Email"
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
              
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                                    placeholder="+91"
                                    name='phone'
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
              
                            <div>
                                <label htmlFor="projectType" className="block text-gray-700 mb-2">
                                    Project Type
                                </label>
                                <select
                                id="projectType"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                                name='project'
                                value={form.project}
                                onChange={handleChange}
                                >
                                    <option value="">Select a project type</option>
                                    <option value="residential">Residential Construction</option>
                                    <option value="commercial">Commercial Project</option>
                                    <option value="renovation">Renovation & Remodeling</option>
                                    <option value="industrial">Industrial Construction</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
              
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
                                    placeholder="Tell us about your project..."
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>
              
                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-colors"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </motion.form>
                    </div>
          
                    <div className="space-y-8">
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.7}}
                        viewport={{once:true}} 
                        className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">Address</h3>
                                    <p className="text-gray-600">
                                        Rajmudra Projects & Construction pvt.lmt<br />
                                        ITI Square, behind the Government Library,<br />
                                        Gadchiroli- 442605
                                        Maharashtra
                                    </p>
                                </div>
                            </div>
                        </motion.div>
            
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.8}}
                        viewport={{once:true}}  
                        className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">Phone</h3>
                                    <p className="text-gray-600">
                                        +91 9876543210<br />
                                        +91 9764346394<br/>
                                        +91 8668490973
                                        
                                    </p>
                                </div>
                            </div>
                        </motion.div>
            
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.9}}
                        viewport={{once:true}}  
                        className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">Email</h3>
                                    <p className="text-gray-600">
                                        rajmudraprojectgad01@gmail.com<br />
                                        
                                    </p>
                                </div>
                            </div>
                        </motion.div>
            
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:1}}
                        viewport={{once:true}}  
                        className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">Business Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 4:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
