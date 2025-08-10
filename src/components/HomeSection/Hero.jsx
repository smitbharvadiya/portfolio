import { motion } from "framer-motion";
import TerminalBox from "./TerminalBox";
import AnimatedTitles from "./AnimatedTitles";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const terminalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 80
      }
    }
  };

  return (
    <motion.section 
      className="min-h-[90vh] bg-[#020817] text-white flex flex-col md:flex-row items-center justify-evenly md:justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 gap-6 sm:gap-0 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Content */}
      <motion.div 
        className="max-w-xl mb-8 sm:mb-10 md:mb-0"
        variants={containerVariants}
      >
        <motion.p 
          className="text-gray-400 mb-2 font-mono text-sm sm:text-base"
          variants={itemVariants}
        >
          Hello, I am
        </motion.p>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2"
          variants={itemVariants}
        >
          Smit Bharvadiya
        </motion.h1>

        <motion.div variants={itemVariants}>
          <AnimatedTitles />
        </motion.div>

        <motion.div 
          className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6 font-mono"
          variants={itemVariants}
        >
          <p className="text-gray-500">// Todo: Add more projects</p>
          <p className="text-gray-500">// My Github account:</p>
          <motion.p
            whileHover={{ x: 5 }}
          >
            <span className="text-purple-400">const </span>
            <span className="text-green-400">githubLink </span>
            <span className="text-pink-400">= </span>
            <a 
              href="https://github.com/smitbharvadiya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#f58b12] cursor-pointer hover:underline"
            >
              "https://github.com/smit-bharvadiya"
            </a>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Terminal Box */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        variants={terminalVariants}
      >
        <TerminalBox />
      </motion.div>
    </motion.section>
  );
};

export default Hero;