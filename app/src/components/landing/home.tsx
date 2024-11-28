import { motion } from "framer-motion";
import {
  TrendingUp,
  Wallet,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "../ui/navbar";
import { Footer } from "../ui/footer";

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />

      <motion.header
        className="container mx-auto px-4 pt-32 pb-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-6 bg-clip-text mt-10 text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          {...fadeIn}
        >
          HODL with Confidence
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          {...fadeIn}
        >
          Your trusted platform for long-term cryptocurrency investment. Build
          your digital wealth with secure, strategic holding.
        </motion.p>
        <motion.div className="flex gap-4 justify-center" {...fadeIn}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
            Get Started <ArrowRight size={20} />
          </button>
          <button className="border border-blue-600 hover:bg-blue-600/10 text-white px-8 py-3 rounded-lg font-medium">
            Learn More
          </button>
        </motion.div>
      </motion.header>

      <motion.section
        className="container mx-auto px-4 py-20"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeIn}>
          Why Choose HODL
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {HomeItems.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors"
              variants={fadeIn}
            >
              <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default HomePage;


const HomeItems = [
    {
      icon: <TrendingUp size={32} />,
      title: "Smart Portfolio Tracking",
      description:
        "Real-time monitoring of your crypto assets with advanced analytics and insights.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Storage",
      description:
        "Bank-grade security measures to protect your digital assets 24/7.",
    },
    {
      icon: <Wallet size={32} />,
      title: "Easy Management",
      description:
        "Intuitive interface for managing your long-term cryptocurrency investments.",
    },
  ]