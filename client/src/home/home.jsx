import React, { useState, useEffect } from 'react';
import './home.css';
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion";
// import { images } from '../assets/images';

export function Home() {
    const [[page, direction], setPage] = useState([0, 0]);
    const [images, setImages] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/pieski/all', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            response.data[i].Zdjecie ? setImages(images => [...images, `data:image/jpeg;base64,${response.data[i].Zdjecie}`]) : console.log('No image')
        }
      })
    }, []);

    console.log(images.length);

    if (sessionStorage.getItem('userId') === null) {
        return (
            <div className='home__notLogged'>
                Please login to see the content.
            </div>
        );
    } else if (images.length !== 0) {


        const variants = {
            enter: (direction) => {
                return {
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0
                };
            },
            center: {
                zIndex: 1,
                x: 0,
                opacity: 1
            },
            exit: (direction) => {
                return {
                    zIndex: 0,
                    x: direction < 0 ? 1000 : -1000,
                    opacity: 0
                };
            }
        };
        const swipeConfidenceThreshold = 10000;
        const swipePower = (offset, velocity) => {
            return Math.abs(offset) * velocity;
        };
        const imageIndex = wrap(0, images.length, page);
    
        const paginate = (newDirection) => {
            setPage([page + newDirection, newDirection]);
        };
    
        return (
            <div className='image-container'>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>
                <div className="next" onClick={() => paginate(1)}>
                    {"‣"}
                </div>
                <div className="prev" onClick={() => paginate(-1)}>
                    {"‣"}
                </div>
            </div>
        );
    } else {
        return(<h2>Loading...</h2>)
    }
}