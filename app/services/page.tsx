'use client'

import { Metadata } from 'next';
import {motion} from 'framer-motion'
import { FaSolarPanel, FaBolt, FaTools, FaChartLine, FaBatteryFull, FaRecycle } from 'react-icons/fa';
import ServiceCard from '@/components/ServiceCard';
import ServiceModal from '@/components/ServiceModal';
import { useState } from 'react';

export const metadata: Metadata = {
    title: "Services Offered - PMAW Solar Technologies, Bangalore, Karnataka",
    description: " Various serves offered for Solar Powerplant projects in Karnataka."
}
    const serviceBunch = [
        {
            title: 'Rooftop Solar Installations',
            description: 'Design and deploy customized rooftop solar systems for residential, commercial, and industrial buildings.',
            icon: FaSolarPanel,
            details: `• Site survey & design\n• Net-metering support\n• High-efficiency modules\n• Residential & commercial expertise`,
        },
        {
            title: 'Ground-Mount Power Plants',
            description: 'Utility-scale solar farms with optimized layouts and high-efficiency energy output.',
            icon: FaBolt,
            details: `• MW-scale installations\n• EPC + O&M services\n• Grid compliance\n• Tracker & fixed-tilt options`,
        },
        {
            title: 'Operations & Maintenance (O&M)',
            description: 'Comprehensive monitoring, maintenance, and support for long-term performance.',
            icon: FaTools,
            details: `• 24x7 monitoring\n• Monthly reporting\n• Panel cleaning & repair\n• Remote diagnostics`,
        },
        {
            title: 'Energy Audit & Consultancy',
            description: 'Professional analysis to identify energy saving opportunities and reduce operational costs.',
            icon: FaChartLine,
            details: `• Audit reports\n• Tariff optimization\n• Demand-side management\n• ROI analysis`,
        },
        {
            title: 'Hybrid & Battery Storage',
            description: 'Integrate solar with battery storage and grid backup for uninterrupted power supply.',
            icon: FaBatteryFull,
            details: `• Lithium & LFP batteries\n• Hybrid inverters\n• Grid-tied or off-grid\n• Smart BMS integration`,
        },
        {
            title: 'Recycling & Decommissioning',
            description: 'Eco-friendly disposal and upgrade solutions for old or damaged solar systems.',
            icon: FaRecycle,
            details: `• Panel recycling\n• Safe disposal\n• Regulatory compliance\n• Retrofit recommendations`,
        },
    ];

const Services = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return(
        
        <div className='py-20 p-20 w-full bg-gray-800 rounded-lg sm:rounded-sm'>
            <main className=" mx-auto px-4 py-12 bg-gray-300 dark:bg-gray-950">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center text-slate-800 dark:text-slate-300 mb-4">Our Solar Services
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center text-gray-600 mb-10">
                    We offer end-to-end solar energy solutions with expert consultation, quality products, and efficient execution.
                </motion.p>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                    hidden: {},
                    visible: {
                            transition: {
                            staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {serviceBunch.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            onClick={() => setSelected(index)}
                        />
                    ))}
                </motion.div>
                {selected !== null && (
                    <ServiceModal
                        open={selected !== null}
                        onClose={() => setSelected(null)}
                        title={serviceBunch[selected].title}
                        description={serviceBunch[selected].description}
                        details={serviceBunch[selected].details}
                    />
                )}
            </main>
        </div>
    )
}

export default Services;