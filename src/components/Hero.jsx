import { Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <main
      id="beranda"
      className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/20"
    >
      <motion.div
        className="hero-content text-center pt-8 lg:pt-20 md:m-0 lg:-mt-6 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Container */}
        <div className="max-w-4xl">
          {/* Image */}
          <motion.div className="avatar mb-8" variants={imageVariants}>
            <motion.div className="w-64 lg:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="Foto_Rehund.webp"
                alt="foto saya"
                width={1400}
                height={720}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.h1
            className="text-3xl lg:text-5xl font-bold mb-2"
            variants={itemVariants}
          >
            Halo, Saya Rehund
          </motion.h1>

          <motion.p
            className="text-xl lg:text-3xl mb-2 font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Web Developer
          </motion.p>

          <motion.p
            className="py-4 text-base-content/70"
            variants={itemVariants}
          >
            I am a web developer with experience in building websites, eager to
            gain more hands-on opportunities to enhance and test my skills. I'm
            also looking to expand my network and connect with diverse teams for
            collaborative projects. My front-end skills include HTML, CSS, and
            JavaScript, with experience in frameworks like React, Next.js, and
            Tailwind. On the back-end, I am currently building my expertise,
            having worked with technologies like SpringBoot Java also Cloud computing things (Google Cloud Platform).
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center mb-6"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Mail className="h-4 w-4" />
              Hubungi Saya
            </motion.a>
            <motion.a
              href="/CV_Rehund.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Eye className="h-4 w-4" />
              Lihat CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/HappyRehund"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline"
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rayhanardian0705"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline"
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

export default Hero;
