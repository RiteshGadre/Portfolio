import Logo from "../assets/Logo.png"

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full bg-[#505f6e] text-white py-5">
      <nav className="font-mono px-4 flex justify-between items-center w-full flex-wrap">
        <div className="logo max-w-9">
            <img src={Logo} alt="" />
            {/* <h1 className="font-serif font-bold text-2xl">RITESH</h1> */}
        </div>
        <ul className="flex gap-6 font-semibold">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">DSA</li>
            <li className="cursor-pointer">Blogs</li>
        </ul>
        <button className="rounded-full px-4 py-1 font-bold bg-white text-[#505f6e]">
            Resume
        </button>
      </nav>
    </div>
  )
}

export default Header
