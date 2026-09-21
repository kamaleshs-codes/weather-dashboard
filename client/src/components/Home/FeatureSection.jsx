import React from "react";
import { motion } from "framer-motion";
import { CloudSun, CalendarDays, Map, Wind } from "lucide-react";

const features = [
  {
    title: "Current Weather",
    description:
      "View temperature, humidity, wind, pressure, visibility, sunrise, sunset, and other current conditions.",
    icon: CloudSun,
  },
  {
    title: "Weather Forecast",
    description:
      "Check upcoming weather conditions and plan your day with useful forecast information.",
    icon: CalendarDays,
  },
  {
    title: "Interactive Map",
    description:
      "Explore weather conditions geographically using an interactive weather map.",
    icon: Map,
  },
  {
    title: "Air Quality",
    description:
      "Monitor air-quality information alongside your current weather conditions.",
    icon: Wind,
  },
];

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.45,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};

export const FeaturesSection = () => {
  return (
    <section className='border-y border-border bg-secondary px-8 py-16 lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-md font-semibold uppercase tracking-wider text-text-title'>
            Features
          </p>
          <h2 className='mt-2 text-3xl font-bold text-accent'>
            Everything you need to understand the weather
          </h2>
          <p className='mt-4 text-text-light'>
            Explore weather information through a simple and intuitive
            interface.
          </p>
        </div>
        <motion.div
          className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'
          variants={cardContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardItem}
                className='rounded-xl bg-primary p-6 hover:shadow-drop transition-all duration-300 hover:border-border-muted ease-in-out hover:translate-y-1'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-secondary'>
                  <Icon size={26} className='text-accent' />
                </div>
                <h3 className='mt-5 text-lg font-semibold text-accent-secondary'>
                  {feature.title}
                </h3>
                <p className='mt-3 text-sm leading-6 font-semibold text-text-muted'>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
