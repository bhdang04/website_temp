
const Header = () => {
  return (
    <header className="flex justify-between items-center 
    py-4 px-4 lg:px-20"> 
        <h1 className="text-3xl md:text-4x1 
        lg:text-5x1 font-light m-0">
            MCODE
        </h1>

        {/* Nav Bar */}
        <nav className="hidden md:flex items-center gap-12">
            <a className="text-base tracking-wider
            transition-colors hover-grey-300 z-50" href="#">
                COMPANY
            </a>
            <a className="text-base tracking-wider
            transition-colors hover-grey-300 z-50" href="#">
                FEATURE
            </a>
            <a className="text-base tracking-wider
            transition-colors hover-grey-300 z-50" href="#">
                RESOURCES
            </a>
            <a className="text-base tracking-wider
            transition-colors hover-grey-300 z-50" href="#">
                PRICING
            </a>
        </nav>
    </header>
  )
}

export default Header