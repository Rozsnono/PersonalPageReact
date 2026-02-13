"use client";
import { color, motion } from "framer-motion";
import { BookOpen, Gamepad, Globe, Lightbulb, Music, Rocket, Star, StarIcon, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
    const t = useTranslations('aboutPage.hero');

    return (
        <section className="pt-20 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="mb-4">
                            <span className="text-blue-400 font-medium">{t('hello')}</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {t('name')}
                        </h1>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200 mb-6">
                            {t('title')}
                        </h2>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            {t('description')}
                        </p>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            {t('description2')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                                {t('frontend')}
                            </span>
                            <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                                {t('fullstack')}
                            </span>
                            <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm">
                                {t('custom')}
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <Image
                            src="/myself2.jpg"
                            alt="Rozs Norbert"
                            className="rounded-lg shadow-2xl w-full h-auto"
                            width={600}
                            height={800}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export const Journey = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>

                <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        My passion for web development began during my studies at Győri SZC Jedlik Ányos, where I
                        discovered the perfect blend of creativity and technical problem-solving. What started as
                        curiosity quickly became a calling.
                    </p>

                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Since 2020, I have been working as a freelance developer, helping businesses bring their
                        digital visions to life. Each project teaches me something new, and I love the challenge
                        of creating solutions that are both beautiful and functional.
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        Currently, I am balancing my role as a Frontend Developer at Tiwala Solution with my
                        Computer Engineering studies at Győri Széchenyi István Egyetem. I believe in continuous
                        learning and staying ahead of the latest technologies to deliver the best results for my clients.
                    </p>
                </div>
            </div>
        </section>
    )
}

export const Skills = () => {
    const t = useTranslations('aboutPage.skills');

    const skills = [
        {
            title: t('frontend.title'),
            description: t('frontend.description'),
            skills: [
                { name: 'React', level: '95%', favorite: true },
                { name: 'Next.js', level: '90%', favorite: true },
                { name: 'Angular', level: '85%' },
                { name: 'Vue.js', level: '60%' },
                { name: 'TypeScript', level: '90%', favorite: true },
                { name: 'JavaScript', level: '95%' },
                { name: 'HTML5 & CSS3', level: '95%' }
            ],
            color: 'blue',
            hex: '#51a2ff'
        },
        {
            title: t('backend.title'),
            description: t('backend.description'),
            skills: [
                { name: 'Node.js', level: '85%', favorite: true },
                { name: 'C#', level: '70%' },
                { name: 'MongoDB', level: '90%', favorite: true },
                { name: 'MySQL', level: '70%' },
                { name: 'REST APIs', level: '90%' }
            ],
            color: 'green',
            hex: '#05df72'
        },
        {
            title: t('tools.title'),
            description: t('tools.description'),
            skills: [
                { name: 'Tailwind CSS', level: '90%', favorite: true },
                { name: 'Bootstrap', level: '85%' },
                { name: 'Git & GitHub', level: '90%' },
                { name: 'Vercel', level: '85%' },
                { name: 'Slack', level: '80%' }
            ],
            color: 'purple',
            hex: '#c27aff'
        }
    ]

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-6">{t('title')}</h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        skills.map((skillSet, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                key={index}
                                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                            >
                                <h3 className={`text-xl font-semibold mb-4 text-${skillSet.color}-400 text-center`}>{skillSet.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{skillSet.description}</p>
                                <div className="space-y-3">
                                    {skillSet.skills.map(skill => (
                                        <div key={skill.name} className="flex items-center justify-between">
                                            <span className={`text-gray-300 flex items-center gap-2 ${skill.favorite ? 'font-medium' : ''}`}>
                                                {skill.name} {skill.favorite && <Star className={`inline-block ${skill.favorite ? 'text-yellow-400' : 'text-gray-500'}`} size={18} />}
                                            </span>
                                            <div className="w-20 bg-gray-700 rounded-full h-2">
                                                <div className={`bg-${skillSet.color}-400 h-2 rounded-full`} style={{ width: skill.level, backgroundColor: skillSet.hex }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export const Philosophy = () => {

    const t = useTranslations('aboutPage.philosophy');

    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-lg border border-blue-600/30"
            >
                <h3 className="text-2xl font-semibold mb-4 text-center">{t('title')}</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="text-3xl mb-2 flex justify-center text-blue-400"><Target size={32} /></div>
                        <h4 className="font-semibold text-blue-400 mb-2">{t('precision.title')}</h4>
                        <p className="text-gray-300 text-sm">{t('precision.description')}</p>
                    </div>
                    <div>
                        <div className="text-3xl mb-2 flex justify-center text-green-400"><Rocket size={32} /></div>
                        <h4 className="font-semibold text-green-400 mb-2">{t('performance.title')}</h4>
                        <p className="text-gray-300 text-sm">{t('performance.description')}</p>
                    </div>
                    <div>
                        <div className="text-3xl mb-2 flex justify-center text-purple-400"><Lightbulb size={32} /></div>
                        <h4 className="font-semibold text-purple-400 mb-2">{t('innovation.title')}</h4>
                        <p className="text-gray-300 text-sm">{t('innovation.description')}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )

}

export const Jobs = () => {

    const t = useTranslations('aboutPage.jobs');

    const jobs = [
        {
            title: t('erp2u.title'),
            company: t('erp2u.company'),
            duration: t('erp2u.duration'),
            description: t('erp2u.description'),
            skills: t('erp2u.skills').split(', '),
            color: 'red',
            hex: '#ff4d4d',
            direction: 'left'
        },
        {
            title: t('tiwala.title'),
            company: t('tiwala.company'),
            duration: t('tiwala.duration'),
            description: t('tiwala.description'),
            skills: t('tiwala.skills').split(', '),
            color: 'blue',
            hex: '#51a2ff',
            direction: 'left'
        },
        {
            title: t('integrity.title'),
            company: t('integrity.company'),
            duration: t('integrity.duration'),
            description: t('integrity.description'),
            skills: t('integrity.skills').split(', '),
            color: 'green',
            hex: '#05df72',
            direction: 'right'
        },
        {
            title: t('freelance.title'),
            company: t('freelance.company'),
            duration: t('freelance.duration'),
            description: t('freelance.description'),
            skills: t('freelance.skills').split(', '),
            color: 'purple',
            hex: '#c27aff',
            direction: 'left'
        }
    ]

    return (
        <section className="py-16 px-4" id="experience">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-6">{t('title')}</h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Job Experiences */}
                <div className="space-y-8">

                    {
                        jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: job.direction === 'left' ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`bg-gray-800/50 p-6 rounded-lg border border-gray-700 relative ${job.direction === 'right' ? 'md:ml-auto' : ''}`}
                            >
                                <div style={{ backgroundColor: job.hex }} className={`absolute -left-3 top-6 w-6 h-6 bg-${job.color}-500 rounded-full border-4 border-gray-900`}></div>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className={`text-xl font-semibold text-${job.color}-400`}>{job.title}</h3>
                                        <p className="text-gray-300">{job.company}</p>
                                    </div>
                                    <span className={`text-gray-200 text-sm bg-${job.color}-600/20 px-3 py-1 rounded-full`}>{job.duration}</span>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    {job.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {job.skills.map(skill => (
                                        <span key={skill} className={`text-xs bg-${job.color}-600/20 text-${job.color}-400 px-2 py-1 rounded`}>{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>

                {/* Achievements */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-lg border border-blue-600/30"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center">{t('proud.title')}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                            <p className="text-gray-300">{t('proud.projects.title')}</p>
                            <p className="text-gray-500 text-sm">{t('proud.projects.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                            <p className="text-gray-300">{t('proud.years.title')}</p>
                            <p className="text-gray-500 text-sm">{t('proud.years.description')}</p>
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg mt-6 leading-relaxed text-center text-xs">
                        {t('proud.description')}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export const Studies = () => {
    const t = useTranslations('aboutPage.studies');

    const studies = [
        {
            title: t('sze.title'),
            institution: t('sze.school'),
            duration: t('sze.duration'),
            description: t('sze.description'),
            skills: t('sze.skills').split(', '),
            color: 'blue',
            direction: 'left'
        },
        {
            title: t('jedlik.title'),
            institution: t('jedlik.school'),
            duration: t('jedlik.duration'),
            description: t('jedlik.description'),
            skills: t('jedlik.skills').split(', '),
            color: 'green',
            direction: 'right'
        }
    ]

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-6">{t('title')}</h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>



                <div className="space-y-6">

                    {
                        studies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: study.direction === 'left' ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`bg-gray-800/50 p-6 rounded-lg border border-gray-700 relative ${study.direction === 'right' ? 'md:ml-auto' : ''}`}
                            >
                                <div className={`absolute -left-3 top-6 w-6 h-6 bg-${study.color}-500 rounded-full border-4 border-gray-900`}></div>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className={`text-xl font-semibold text-${study.color}-400`}>{study.title}</h3>
                                        <p className="text-gray-300">{study.institution}</p>
                                    </div>
                                    <span className={`text-gray-200 text-sm bg-${study.color}-600/20 px-3 py-1 rounded-full`}>{study.duration}</span>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    {study.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {study.skills.map(skill => (
                                        <span key={skill} className={`text-xs bg-${study.color}-600/20 text-${study.color}-400 px-2 py-1 rounded`}>{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export const Personal = () => {
    const t = useTranslations('aboutPage.personal');

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-4">{t('title')}</h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <motion.div
                        initial={{ opacity: 0, y: 0, x: -20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center"
                    >
                        <div className="text-4xl mb-4 flex justify-center text-blue-400"><Music size={48} /></div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">{t('music.title')}</h3>
                        <p className="text-gray-300 text-sm">
                            {t('music.description')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center"
                    >
                        <div className="text-4xl mb-4 flex justify-center text-green-400"><BookOpen size={48} /></div>
                        <h3 className="text-lg font-semibold text-green-400 mb-2">{t('learning.title')}</h3>
                        <p className="text-gray-300 text-sm">
                            {t('learning.description')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20, x: 20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center"
                    >
                        <div className="text-4xl mb-4 flex justify-center text-purple-400"><Gamepad size={48} /></div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-2">{t('gaming.title')}</h3>
                        <p className="text-gray-300 text-sm">
                            {t('gaming.description')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 0, x: 20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center"
                    >
                        <div className="text-4xl mb-4 flex justify-center text-yellow-400"><Globe size={48} /></div>
                        <h3 className="text-lg font-semibold text-yellow-400 mb-2">{t('travel.title')}</h3>
                        <p className="text-gray-300 text-sm">
                            {t('travel.description')}
                        </p>
                    </motion.div>
                </div>

                {/* Personal Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="mt-12 text-center">
                        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-lg border border-blue-600/30 max-w-3xl mx-auto">
                            <p className="text-3xl text-gray-200 italic mb-4 quote">
                                &quot;{t('quote')}&quot;
                            </p>
                            <p className="text-blue-400 font-semibold handwritten">- Michael Schumacher</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}