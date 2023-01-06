'use client';
import { motion } from 'framer-motion';

function Banner() {
  return (
    <>
      <motion.h1
        initial={{ x: -200 }}
        animate={{
          x: 0,
          transition: { type: 'spring', stiffness: 200, damping: 10 },
        }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-8"
      >
        Create Your Own Card
      </motion.h1>
      <div className="flex justify-center my-6">
        <motion.a
          whileHover={{
            scale: 1.5,
            transition: { type: 'spring', stiffness: 200, damping: 10 },
          }}
          className="text-indigo-200 whitespace-nowrap font-semibold text-3xl py-2 px-4 rounded-lg bg-gray-800 cursor-pointer"
          href='/create'
        >
          Get started
        </motion.a>
      </div>
    </>
  );
}

export default Banner;
