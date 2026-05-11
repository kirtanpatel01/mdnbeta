import { IconChevronRight, IconNut } from "@tabler/icons-react"

function Header() {
  const links = [
    { title: "Use Cases", href: "/usecase" },
    { title: "Templates", href: "/templates" },
    { title: "Integrations", href: "/integrations" },
    { title: "Patch", href: "/patch" },
    { title: "Career", href: "/career" },
  ]
  return (
    <header className="w-full sticky top-0 px-3 py-2 border-b border-zinc-200">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div className="flex items-center gap-1">
          <IconNut size={40} className="" />
          <h1 className="font-black text-xl ">
            <span>MDN</span>
            <span className="bg-linear-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent">Beta</span>
          </h1>
        </div>

        <nav className="transition-all duration-300 flex items-center gap-16">
          <ul className="flex items-center gap-8">
            {links.map((link, index) => (
              <li key={index} className="font-semibold hover:text-blue-600 hover:underline underline-offset-2 decoration-blue-500">
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>

          <button className="flex items-center border-2 hover:text-blue-700 hover:border-blue-700 px-2 py-1 rounded-md cursor-pointer">
            <span className="font-medium">Explore More</span>
            <IconChevronRight size={16} className="mt-1" />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header