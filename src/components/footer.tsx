import { IconNut } from "@tabler/icons-react"

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
        <div>
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
            Management De Nation or MDN is a poweful app for you to
            manage, create, or visuadze your product and growth
            throughout the easiest and smoothest way postible.
          </p>
        </div>

        {/* Right */}
        <ul className="flex flex-wrap gap-10 md:gap-16">
          {links.map(item => (
            <li key={item.heading} className="space-y-6">
              <h2 className="font-bold">{item.heading}</h2>
              <ul className="text-sm text-neutral-300 space-y-4">
                {item.subHeading.map((subItem, index) => (
                  <li key={index}>
                    <a href={subItem.href}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-10 rounded-full h-2.5 w-full bg-neutral-900 border-2 border-black shadow" />

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-sm text-neutral-400 text-center md:text-left">
        <p>@ 2022 Epsilon Inc. All rights reserved. - Privacy Policy - Terms of Service</p>
        <p>Supported by Microsoft Startup</p>
      </div>
    </footer>
  )
}

export default Footer