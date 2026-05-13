import { IconNut } from "@tabler/icons-react"
import { motion } from 'motion/react'

function Footer() {
  const links = [
    {
      heading: "Others",
      subHeading: [
        { title: "Use Cases", href: "/" },
        { title: "Templates", href: "/" },
        { title: "Integrations", href: "/" },
        { title: "Patch Log", href: "/" },
      ],
    },
    {
      heading: "Support",
      subHeading: [
        { title: "FAQs", href: "/faqs" },
        { title: "Support Center", href: "/contact" },
        { title: "Helps", href: "/helps" }
      ]
    },
    {
      heading: "Company",
      subHeading: [
        { title: "Career", href: "/career" },
        { title: "Story", href: "/story" },
        { title: "Roadmap", href: "/roadmap" }
      ]
    }
  ]
  return (
    <footer className="container mx-auto py-12 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
        {/* Left */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-1">
            <IconNut size={40} className="" />
            <h1 className="font-black text-xl ">
              <span>MDN</span>
              <span className="bg-linear-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent">Beta</span>
            </h1>
          </div>

          {/* desc */}
          <p className="text-sm w-full max-w-96 mt-3 text-neutral-300">
            Management De Nation or MDN is a powerful app for you to
            manage, create, or visualize your product and growth
            throughout the easiest and smoothest way possible.
          </p>
        </motion.div>

        {/* Right */}
        <ul className="flex flex-wrap gap-10 md:gap-16">
          {links.map((item, idx) => (
            <li key={item.heading} className="space-y-6">
              <motion.h2 
                className="font-bold"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {item.heading}
              </motion.h2>
              <motion.ul 
                className="text-sm text-neutral-300 space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: idx * 0.1 + 0.2 }
                  }
                }}
              >
                {item.subHeading.map((subItem, index) => (
                  <motion.li 
                    key={index}
                    variants={{
                      hidden: { y: 15, opacity: 0, scale: 0.95 },
                      visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    <a href={subItem.href} className="hover:text-white transition-colors inline-block">{subItem.title}</a>
                  </motion.li>
                ))}
              </motion.ul>
            </li>
          ))}
        </ul>
      </div>

      <motion.div 
        className="my-10 rounded-full h-2.5 w-full bg-neutral-900 border-2 border-black shadow"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        style={{ originX: 0 }}
      />

      <motion.div 
        className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-sm text-neutral-400 text-center md:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p>@ 2022 Epsilon Inc. All rights reserved. - Privacy Policy - Terms of Service</p>
        <p>Supported by Microsoft Startup</p>
      </motion.div>
    </footer>
  )
}

export default Footer