"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

export const services = [
  {
    num: "01",
    title: "DApp Development",
    description:
      "Build decentralized applications (DApps) with interactive frontends that seamlessly connect to blockchain networks. Integrate wallet connections, blockchain transactions, and custom user interfaces for an optimal Web3 experience.",
    href: "",
  },
  {
    num: "02",
    title: "Smart Contract Development",
    description:
      "Design, develop, and deploy secure smart contracts on Ethereum, Binance Smart Chain, and other EVM-compatible blockchains. Ensure reliability through thorough testing and gas optimization.",
    href: "",
  },
  {
    num: "03",
    title: "Web2/Web3 Integration",
    description:
      "Connect Web2 applications with Web3 features, enabling users to interact with blockchain-based functionalities from traditional web interfaces. This includes integrating wallets, token transfers, and blockchain data access.",
    href: "",
  },
  {
    num: "04",
    title: "Responsive and Mobile-Optimized Design",
    description:
      "Design highly responsive and mobile-friendly interfaces, providing a consistent user experience across devices, whether interacting with traditional Web2 features or decentralized Web3 components.",
    href: "",
  },
  {
    num: "05",
    title: "UI/UX Design for Web2 and Web3",
    description:
      "Craft user-friendly and visually appealing designs for Web2 and Web3 applications. Prioritize usability, with features like wallet connections, transaction feedback, and simplified Web3 onboarding.",
    href: "",
  },
  {
    num: "06",
    title: "Performance Optimization",
    description:
      "Optimize web applications for faster load times and smoother interactions. Implement best practices in asset loading, caching, and resource management to enhance both Web2 and Web3 user experiences.",
    href: "",
  },
  {
    num: "07",
    title: "Consulting and Technical Advisory",
    description:
      "Provide consulting on Web2/Web3 best practices, blockchain integration strategies, and smart contract implementation to help clients navigate the evolving Web3 landscape.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 cl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group border-b border-white/20 pb-6"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
