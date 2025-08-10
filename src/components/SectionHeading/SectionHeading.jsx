import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
    const ref = useRef(null);
    // Detect if this ref is in view, options: once: false to trigger every time in view
    const isInView = useInView(ref, { once: false, margin: '-100px' });

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            ref={ref}
            className="mb-10 lg:mb-12 text-center"
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            {title && (
                <motion.h2
                    className="text-primary text-4xl lg:text-5xl font-bold mb-2"
                // Optional stagger or individual animation for title
                // You can keep it simple or animate separately if you want
                >
                    {title}
                </motion.h2>
            )}
            {subtitle && (
                <motion.p
                    className="text-secondary"
                    // Optional delay
                    transition={{ delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
