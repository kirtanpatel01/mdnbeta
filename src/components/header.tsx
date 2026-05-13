import { IconChevronRight, IconNut } from "@tabler/icons-react"
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  }
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.12,
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  })
};

function Header() {
  const links = [
    { title: "Use Cases", href: "/usecase" },
    { title: "Templates", href: "/templates" },
    { title: "Integrations", href: "/integrations" },
    { title: "Patch", href: "/patch" },
    { title: "Career", href: "/career" },
  ]

  return (
    <header className="w-full sticky top-0 px-3 py-2 border-b border-zinc-200 bg-white/80 backdrop-blur-md z-9999">
      <motion.div 
        className="container mx-auto flex justify-between items-center gap-4" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center gap-1" variants={itemVariants} custom={0}>
          <IconNut size={40} className="" />
          <h1 className="font-black text-xl ">
            <span>MDN</span>
            <span className="bg-linear-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent">Beta</span>
          </h1>
        </motion.div>

        <nav className="transition-all duration-300 flex items-center gap-4 md:gap-16">
          <ul className="hidden md:flex items-center gap-4 lg:gap-8">
            {links.map((link, index) => (
              <motion.li 
                key={index} 
                className="font-semibold hover:text-blue-600 hover:underline underline-offset-2 decoration-blue-500"
                variants={itemVariants}
                custom={index + 1}
              >
                <a href={link.href}>{link.title}</a>
              </motion.li>
            ))}
          </ul>

          <motion.button 
            className="flex items-center border-2 hover:text-blue-700 hover:border-blue-700 px-2 py-1 rounded-md cursor-pointer"
            variants={itemVariants}
            custom={links.length + 1}
          >
            <span className="font-medium">Explore More</span>
            <IconChevronRight size={16} className="mt-1" />
          </motion.button>
        </nav>
      </motion.div>
    </header>
  )
}

export default Header