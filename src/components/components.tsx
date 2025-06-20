"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Ticker() {

    const item = [
        {
            name: 'React',
            icon: '/logos/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logos/next.png',
        },
        {
            name: 'Angular',
            icon: '/logos/angular.png',
        },
        {
            name: 'Vue.js',
            icon: '/logos/vue.png',
        },
        {
            name: 'HTML',
            icon: '/logos/html.png',
        },
        {
            name: 'CSS',
            icon: '/logos/css.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logos/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logos/bootstrap.png',
        },
        {
            name: 'JavaScript',
            icon: '/logos/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logos/ts.png',
        },
        {
            name: 'Node.js',
            icon: '/logos/node.png',
        },
        {
            name: 'C#',
            icon: '/logos/c.png',
        },
        {
            name: 'MongoDB',
            icon: '/logos/mongo.png',
        },
        {
            name: 'MySQL',
            icon: '/logos/sql.png',
        },
    ]

    return (
        <div className="relative">
            <div className="absolute w-full h-full flex justify-center items-center z-[-1]">
                <div className="absolute w-[15rem] h-[15rem] border rounded-full opacity-5 shadow-[0_0_10px_#ffffff]"></div>
                <div className="absolute w-[25rem] h-[25rem] border rounded-full opacity-4 shadow-[0_0_10px_#ffffff]"></div>
                <div className="absolute w-[35rem] h-[35rem] border rounded-full opacity-2 shadow-[0_0_10px_#ffffff]"></div>
                <div className="absolute w-[45rem] h-[45rem] border rounded-full opacity-2 shadow-[0_0_10px_#ffffff]"></div>
            </div>
            <div
                className="relative overflow-hidden w-full py-4 max-w-4xl mx-auto my-16"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
                }}
            >

                <motion.div
                    className="flex whitespace-nowrap min-w-full"
                    animate={{
                        x: ["100%", "-250%"],
                        transition: {
                            x: {
                                duration: 40,
                                repeatDelay: 17.6,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        },
                    }}
                >
                    {[...Array(1)].map((_, i) => (
                        <div key={i} className="flex gap-16 px-4 text-white text-lg font-medium">
                            {
                                item.map((tech, index) => (
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        key={index}
                                        width={96}
                                        height={96}
                                        className="object-contain"
                                        loading="lazy"
                                    />
                                ))
                            }
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    className="flex whitespace-nowrap absolute top-4 min-w-full"
                    animate={{
                        x: ["100%", "-250%"],
                        transition: {
                            x: {
                                duration: 40,
                                delay: 28.7,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        },
                    }}
                >
                    {[...Array(1)].map((_, i) => (
                        <div key={i} className="flex gap-16 px-4 text-white text-lg font-medium">
                            {
                                item.map((tech, index) => (
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        key={index}
                                        width={96}
                                        height={96}
                                        className="object-contain"
                                        priority
                                    />
                                ))
                            }
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>

    );
}


// Navigation Component - Redesigned as requested
export const Navigation = () => {
    const location = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Work", path: "/works" },
        { name: "Experience", path: "/#experience" },
        { name: "FAQ", path: "/#faq" },
        { name: "Pricing", path: "/pricing" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src={"/logo.png"} width={48} height={48} alt="Logo" priority></Image>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path} className={`text-sm font-medium transition-colors hover:text-blue-400 ${location === item.path ? "text-blue-400" : "text-gray-300"
                                    }`}
                            >
                                {item.name}

                            </a>
                        ))}
                        <a href="/contact" className="text-sm font-medium bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full border border-gray-300 transition-colors">
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <span className={`h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                            <span className={`h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
                            <span className={`h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-gray-800 rounded-lg mt-2 mb-4"
                        >
                            <div className="py-4 space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

// Hero Component
export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-16">
            <div className="text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="w-44 h-44 rounded-full mx-auto mb-8 border-4 border-blue-500/20 flex items-center justify-center overflow-hidden shadow-lg">
                        <Image
                            src="/myself.jpg"
                            alt="Rozs Norbert"
                            className="w-full h-full"
                            width={512}
                            height={512}
                            priority
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                >
                    Tailor-made websites.
                    <br />
                    <span className="text-4xl md:text-6xl">Premium quality</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Seasoned web developer with a strong background in building custom solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
                >
                    <motion.a
                        href="/contact"
                        className="inline-flex items-center space-x-2 px-8 py-4 rounded-full text-lg font-semibold text-white relative z-10 hover:bg-blue-700 transition-all transform hover:scale-105"
                        style={{
                            backgroundImage: "linear-gradient(270deg, #2563eb, #14b8a6, #2563eb)",
                            backgroundSize: "600% 600%",
                            backgroundPosition: "0% 50%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        whileHover={{
                            scale: 1.05,
                        }}
                    >
                        <span>Get In Touch</span>
                        <ChevronRight className="w-5 h-5" />
                    </motion.a>
                    <Link
                        href="/works"
                        className="inline-flex items-center space-x-2 backdrop-blur-md border-2 border-teal-500 hover:backdrop-blur-xl px-8 py-4 rounded-full text-teal-500 text-lg font-semibold transition-all transform hover:scale-105"
                    >
                        <span>See my works</span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

// About Component
export const About = () => {

    const texts = [
        { text: 'Web designer and expert in' },
        { text: 'Web Development', highlight: true },
        { text: 'with over' },
        { text: '5 years', highlight: true },
        { text: 'of industry experience.' },
        { text: 'Expertise extends to' },
        { text: 'Frontend Development', highlight: true },
        { text: 'and' },
        { text: 'Backend Development', highlight: true },
        { text: 'both effective and easily maintainable.' }
    ]

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center content-center text-center items-center">
                    {/* <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-400 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">V</span>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">≈</span>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">B</span>
                            </div>
                        </div>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl mb-6 flex flex-wrap gap-4 justify-center items-center">
                            {
                                texts.map((part, index) => {
                                    if (part.highlight) {
                                        return (
                                            <div key={index} className="bg-gray-900 rounded-full px-3 py-1 inline-block border border-gray-600 px-6 py-1 shadow-lg">
                                                {part.text.split("").map((char, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{
                                                            color: "#888888", // szürkés alap
                                                            textShadow: "none",
                                                        }}
                                                        animate={{
                                                            color: ["#888888", "#ffffff", "#888888"], // váltás szürkéről fehérre
                                                            textShadow: [
                                                                "none",
                                                                "0px 0px 10px #ffffff",
                                                                "none",
                                                            ],
                                                        }}
                                                        transition={{
                                                            duration: 4,
                                                            repeatDelay: 5,
                                                            repeat: Infinity,
                                                            repeatType: "mirror",
                                                            delay: i * 0.3,
                                                        }}
                                                    >
                                                        {char}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <span key={index} className="text-gray-100">
                                                {part.text}
                                            </span>
                                        );
                                    }
                                })
                            }
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Skills Carousel Component
export const Skills = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const skillGroups = [
        [
            { name: "UX Design", color: "bg-purple-600" },
            { name: "UI Design", color: "bg-pink-600" },
            { name: "Frontend Development", color: "bg-blue-600" },
            { name: "Backend Development", color: "bg-green-600" },
            { name: "React", color: "bg-blue-500" },
            { name: "Next.js", color: "bg-gray-800" },
            { name: "Angular", color: "bg-red-600" },
            { name: "Vue.js", color: "bg-green-500" },
            { name: "Node.js", color: "bg-green-700" },
            { name: "MongoDB", color: "bg-green-800" },
            { name: "MySQL", color: "bg-orange-600" },
            { name: "HTML", color: "bg-orange-500" },
            { name: "JavaScript", color: "bg-yellow-500" },
            { name: "TypeScript", color: "bg-blue-700" },
            { name: "CSS", color: "bg-blue-400" },
            { name: "C#", color: "bg-purple-700" }
        ],
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % skillGroups.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + skillGroups.length) % skillGroups.length);
    };

    // Auto-slide every 4 seconds
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Skills
                </motion.h2>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl">
                        <motion.div
                            className="flex transition-transform duration-500 ease-in-out"
                        >
                            {skillGroups.map((group, groupIndex) => (
                                <div
                                    key={groupIndex}
                                    className="w-full flex-shrink-0 px-8 py-12"
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                                        {group.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`border border-gray-500/50 cursor-pointer hover:bg-gray-700/50 bg-gray-800/40 px-6 py-4 rounded-3xl text-white font-medium text-center hover:scale-105 transition-transform cursor-default shadow-lg`}
                                            >
                                                {skill.name}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Experience Component
export const Experience = () => {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "Tiwala Solution Kft.",
            duration: "Jan 2024 - Present",
            current: true
        },
        {
            title: "Full Stack Developer",
            company: "Integrity Kft.",
            duration: "Jan 2023 - Jan 2024",
            current: false
        },
        {
            title: "Web Developer",
            company: "Freelance",
            duration: "Jun 2020 - Present",
            current: true
        }
    ];

    return (
        <section className="py-20 px-4" id="experience">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Experience
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:justify-between md:items-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                                <p className="text-blue-400">{exp.company}</p>
                            </div>
                            <div className="mt-4 md:mt-0 text-right">
                                <p className="text-gray-400">{exp.duration}</p>
                                {exp.current && (
                                    <span className="inline-block mt-2 px-3 py-1 bg-green-600 text-xs rounded-full">
                                        Current
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// FAQ Component
export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How long does a project usually take?",
            answer: "The duration of a project depends on its complexity, but most projects are completed within 1 to 4 weeks. Simpler apps may take just a few days, while more complex systems might require more time for development and testing."
        },
        {
            question: "What technologies do I use for development?",
            answer: "I specialize in modern web technologies including React, Next.js, Vue.js, Angular for frontend development, and Node.js, C# for backend development. I also work with various databases like MongoDB and MySQL."
        },
        {
            question: "What's the average cost of a project?",
            answer: "Project costs depend on complexity, features, and timeline. I provide custom quotes based on your specific requirements. Contact me for a detailed proposal and transparent pricing."
        }
    ];

    return (
        <section className="py-20 px-4 " id="faq">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Frequently asked questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-gray-700 rounded-lg overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-medium">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-blue-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="px-6 pb-4 text-gray-400 pt-4"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Component
export const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: ""
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", formData);
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ email: "", name: "", message: "" });
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-2xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Contact me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-8 rounded-2xl border-2 border-blue-500/20"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="email"
                                    placeholder="you@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <textarea
                                placeholder="Write down your ideas..."
                                rows={6}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                            <span>Rozs Norbert - Web Developer</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Footer Component
export const Footer = () => {
    const techIcons = [
        { name: "WordPress", color: "text-blue-400" },
        { name: "Vue.js", color: "text-green-400" },
        { name: "Angular", color: "text-red-400" },
        { name: "HTML5", color: "text-orange-400" },
        { name: "CSS3", color: "text-blue-500" },
        { name: "Sass", color: "text-pink-400" },
        { name: "Bootstrap", color: "text-purple-400" },
        { name: "MongoDB", color: "text-green-600" }
    ];

    return (
        <footer className="py-12 px-4 backdrop-blur-md">
            <div className="max-w-6xl mx-auto">
                {/* <div className="flex flex-wrap justify-center items-center space-x-8 mb-8">
                    {techIcons.map((tech, index) => (
                        <div
                            key={index}
                            className={`w-12 h-12 ${tech.color} flex items-center justify-center text-2xl font-bold`}
                        >
                            {tech.name.charAt(0)}
                        </div>
                    ))}
                </div> */}

                <div className="text-center text-gray-400 flex justify-between items-center">
                    <p>&copy; 2025 Rozs Norbert. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <Link href="https://www.linkedin.com/in/rozs-norbert-7987b42a0/" className="hover:text-sky-200 transition-colors">LinkedIn</Link>
                        <Link href="https://github.com/Rozsnono" className="hover:text-sky-200 transition-colors">GitHub</Link>
                        <Link href="mailto:rozsnono@gmail.com" className="hover:text-sky-200 transition-colors">Mail</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Works Page Component - Special focus as requested
export const WorksPage = () => {
    const [selectedProject, setSelectedProject] = useState(0);

    const projects = [
        {
            title: "PlanIt - The Card game",
            description: "A fast, browser-based card game platform where you can enjoy classic games like Rummy, UNO, and Solitaire. No need to download, just pure gameplay designed for smooth play on any computer device.",
            image: "/works/planit.png",
            status: "Coming Soon",
            technologies: ["Next.js", "Node.js", "MongoDB"]
        },
        {
            title: "Study Assistant Application",
            description: "A straightforward web app to help you schedule study sessions and manage tasks. Easy add and organize your study hours and keep track of upcoming exams, all in one simple interface.",
            image: "/works/tanulas.png",
            status: "See for yourself",
            technologies: ["Next.js", "Node.js", "MongoDB"]
        },
        {
            title: "CoinCash",
            description: "A user-friendly platform for buying cryptocurrencies and tracking their price in real-time. Stay informed about the market, manage your digital investments effortlessly, all in one place.",
            image: "/works/coincash.png",
            status: "See for yourself",
            technologies: ["Angular", "Node.js", "PHP", "Python", "MySQL"]
        },
        {
            title: "BlueCard",
            description: "A mobile companion app ideal for workplaces, colleges, and other secure facilities. Featuring QR codes, offers a convenient barcode on your phone. Sync devices easily and securely, all from your device.",
            image: "/works/bluecard.png",
            status: "Coming Soon",
            technologies: ["Next.js", "Node.js", "MongoDB"]
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-12">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold text-center mb-16"
                >
                    Works
                </motion.h1>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    className={`px-6 py-3 rounded-lg font-medium transition-all ${project.status === "Coming Soon"
                                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
                                        }`}
                                    disabled={project.status === "Coming Soon"}
                                >
                                    {project.status}
                                </button>
                            </div>

                            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={600}
                                        priority
                                        className="relative rounded-2xl w-full shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        <button className="w-3 h-3 bg-red-500 rounded-full"></button>
                                        <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
                                        <button className="w-3 h-3 bg-green-500 rounded-full"></button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Prices = () => {
    const services = [
        {
            title: "Basic Website",
            price: "€?,???",
            description: "Perfect for small businesses and personal portfolios",
            features: [
                "Responsive Design",
                "Up to 5 Pages",
                "Contact Form",
                "Basic SEO",
                "Mobile Optimization",
                "3 Months Support"
            ],
            popular: false
        },
        {
            title: "Advanced Web App",
            price: "€?,???",
            description: "Full-featured web applications with custom functionality",
            features: [
                "Custom Development",
                "Database Integration",
                "User Authentication",
                "Admin Dashboard",
                "API Integration",
                "6 Months Support",
                "Performance Optimization"
            ],
            popular: true
        },
        {
            title: "Enterprise Solution",
            price: "€?,???",
            description: "Large-scale applications with complex requirements",
            features: [
                "Scalable Architecture",
                "Microservices",
                "Cloud Deployment",
                "Advanced Security",
                "Load Balancing",
                "12 Months Support",
                "Team Training",
                "Documentation"
            ],
            popular: false
        }
    ];

    const additionalServices = [
        {
            service: "Website Maintenance",
            price: "€???/month"
        },
        {
            service: "Performance Optimization",
            price: "€???"
        },
        {
            service: "SEO Optimization",
            price: "€???"
        },
        {
            service: "Security Audit",
            price: "€???"
        }
    ];

    return (
        <div className="text-white min-h-screen pt-16">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Pricing & Services</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Transparent pricing for quality web development services.
                        Choose the package that best fits your project needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative bg-gray-800 rounded-lg p-8 shadow-xl hover:ring-2 cursor-pointer hover:ring-sky-600 duration-200 hover:scale-105 ${service.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <div className="text-4xl font-bold text-blue-400 mb-4">{service.price}</div>
                                <p className="text-gray-400">{service.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${service.popular
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
                                    }`}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Additional Services */}
                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold mb-8">Additional Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((item, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                <h4 className="font-semibold mb-2">{item.service}</h4>
                                <div className="text-blue-400 font-bold">{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="italic text-gray-400 mt-8 text-center md:text-lg text-xs">
                    <span className="text-blue-400 font-semibold">Note:</span> All prices are estimates and may vary based on project complexity and requirements. Contact me for a detailed quote tailored to your specific needs. Upfront payment is required to start the project, with a <b>25%</b> deposit and the remaining balance due upon completion.
                </p>
            </div>
        </div>
    );
};

export const TimeLine = () => {
    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                {/* Timeline Title */}
                <h1 className="text-white text-3xl font-bold mb-8 mb-12 text-center w-full">Timeline</h1>

                {/* Timeline Container */}
                <div className="hidden md:block relative bg-linear-to-b from-gray-800/50 to-transparent rounded-t-4xl p-8 ">
                    {/* Week Headers */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <div className="text-white text-lg font-medium text-center">Week 1</div>
                        <div className="text-white text-lg font-medium text-center">Week 2</div>
                        <div className="text-white text-lg font-medium text-center">Week 3</div>
                        <div className="text-white text-lg font-medium text-center">Week 4</div>
                    </div>

                    {/* Timeline Grid */}
                    <div className="grid grid-cols-4 gap-4 relative min-h-[300px]">
                        {/* Week Columns Background */}
                        <div className="border-r border-gray-700 opacity-50"></div>
                        <div className="border-r border-gray-700 opacity-50"></div>
                        <div className="border-r border-gray-700 opacity-50"></div>
                        <div></div>

                        {/* Design Phase - Week 1 */}
                        <div className="absolute left-0 top-8 w-1/4 pr-2">
                            <div className="bg-purple-800/50 hover:bg-purple-800/80 ring-2 ring-purple-600 transition-colors duration-300 rounded-full px-6 py-4 text-white text-center font-medium shadow-lg">
                                Design Phase
                            </div>
                        </div>

                        {/* Development Phase - Week 2-3 */}
                        <div className="absolute left-1/4 top-20 w-2/4 px-2">
                            <div className="bg-amber-800/50 hover:bg-amber-700/60 ring-2 ring-amber-600 transition-colors duration-300 rounded-full px-8 py-4 text-white text-center font-medium shadow-lg">
                                Development Phase
                            </div>
                        </div>

                        {/* QA & Testing Phase - Week 4 */}
                        <div className="absolute right-0 top-32 w-1/4 pl-2">
                            <div className="bg-green-800/50 hover:bg-green-800/80 ring-2 ring-green-600 transition-colors duration-300 rounded-full px-6 py-4 text-white text-center font-medium shadow-lg">
                                QA & Testing
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden">
                    <div className="space-y-4">
                        {/* Design Phase */}
                        <div className="border border-gray-700 bg-gray-800/50 rounded-2xl w-full flex flex-col justify-center pt-4 p-3 gap-4">
                            <h1 className="text-white text-lg font-medium text-center">Week 1 - 2</h1>
                            <div className="bg-purple-800/50 hover:bg-purple-800/80 ring-4 ring-purple-600 transition-colors duration-300 rounded-full px-6 py-2 text-white text-center font-medium shadow-lg">
                                Design Phase
                            </div>
                        </div>

                        {/* Development Phase */}
                        <div className="border border-gray-700 bg-gray-800/50 rounded-2xl w-full flex flex-col justify-center pt-4 p-3 gap-4">
                            <h1 className="text-white text-lg font-medium text-center">Week 2 - 3</h1>
                            <div className="bg-amber-800/50 hover:bg-amber-700/60 ring-4 ring-amber-600 transition-colors duration-300 rounded-full px-6 py-2 text-white text-center font-medium shadow-lg">
                                Development Phase
                            </div>
                        </div>

                        {/* QA & Testing Phase */}
                        <div className="border border-gray-700 bg-gray-800/50 rounded-2xl w-full flex flex-col justify-center pt-4 p-3 gap-4">
                            <h1 className="text-white text-lg font-medium text-center">Week 4</h1>
                            <div className="bg-green-800/50 hover:bg-green-800/80 ring-4 ring-green-600 transition-colors duration-300 rounded-full px-6 py-2 text-white text-center font-medium shadow-lg">
                                QA & Testing
                            </div>
                        </div>
                    </div>
                </div>

                <p className="italic text-gray-400 mt-8 text-center md:text-lg text-xs">
                    <span className="text-blue-400 font-semibold">Note:</span> This timeline is a general guideline and may vary based on project complexity and requirements. Each phase includes regular updates and client feedback sessions to ensure alignment with your vision.
                </p>
            </div>
        </div>
    );
};

export const PricingFooter = () => {
    return (
        <div className="mt-20 text-center">

            <p className="text-lg text-gray-400 mb-8">
                If you have any questions or need a custom quote, feel free to reach out.
            </p>
            <h2 className="text-3xl font-bold mb-8">
                Looking forward to working together!
            </h2>
            <h4 className="text-xl font-bold">Best regards,</h4>
            <h3 className="text-5xl handwritten text-gray-100">Rozs Norbert</h3>
        </div>
    );
}

export const ContactForm = ({ contactPage }: { contactPage?: boolean }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitMessage('Thank you! We\'ll get back to you soon about your website project.');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', projectType: '', message: '' });
        }, 1000);
    };

    return (
        <div className="py-32 px-4">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    {
                        contactPage ?
                            <React.Fragment>
                                {/* Form Title */}
                                <h1 className="text-white text-3xl font-light mb-4 text-center font-mono">Get Your Website Built</h1>
                                <p className="text-gray-400 text-center mb-12">Tell me about your project and I will help bring your vision to life</p>
                            </React.Fragment> :
                            <React.Fragment>
                                {/* Form Title */}
                                <h1 className="text-white text-5xl font-light mb-8 text-center font-mono">Contact Me</h1>
                            </React.Fragment>
                    }
                </motion.div>
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 rounded-2xl p-8 shadow-2xl border border-gray-800"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Project Type Select */}
                        <div>
                            <label htmlFor="projectType" className="block text-white text-sm font-medium mb-2">
                                Project Type *
                            </label>
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            >
                                <option value="">Select your project type</option>
                                <option value="portfolio">Portfolio Website</option>
                                <option value="business">Business/Corporate Website</option>
                                <option value="ecommerce">E-commerce Store</option>
                                <option value="blog">Blog/Content Website</option>
                                <option value="landing">Landing Page</option>
                                <option value="webapp">Web Application</option>
                                <option value="redesign">Website Redesign</option>
                                <option value="other">Other (Please specify in message)</option>
                            </select>
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                                Project Description *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                                placeholder="Tell us about your website project... What's your vision? What features do you need? Any specific requirements or preferences?"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    'Send Project Request'
                                )}
                            </button>
                        </div>

                        {/* Success Message */}
                        {submitMessage && (
                            <div className="bg-green-900 border border-green-700 text-green-300 px-4 py-3 rounded-lg text-center">
                                {submitMessage}
                            </div>
                        )}
                    </form>
                </motion.div>


                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        We typically respond within 24 hours • Free consultation included
                    </p>
                    <p className="text-gray-400 text-xs mt-2 italic">
                        Please do not submit spam or unsolicited offers. This form is for genuine project inquiries only.
                    </p>
                    {/* <div className="mt-4">
                        <p className="text-gray-400 text-sm">
                            By submitting this form, you agree to our <Link href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link>.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
