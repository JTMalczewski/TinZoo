import React, { useState } from 'react';
import './home.css';
import { motion, AnimatePresence } from "framer-motion"

export function Home() {

    return (
        <div>
            <AnimatePresence>
                <motion.img
                    key={'./../assets/sample-dog.jpg'}
                    src={'./../assets/sample-dog.jpg'}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                />X
            </AnimatePresence>
        </div>
    );

}