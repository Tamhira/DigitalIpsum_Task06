import navLogo from "../assets/navLogo.png";
function Navigation() {
  return (
    <>
      <nav className="px-36">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex">
            <div>
              <img src={navLogo} alt="" />
            </div>
            <div className="text-xl font-bold pt-2">RETAWE</div>
          </div>
          <div className="hidden md:flex space-x-14">
            <a href="/" className="hover:text-gray-700 font-semibold">
              Home
            </a>
            <a href="/" className="hover:text-gray-700 font-semibold">
              About Us
            </a>
            <a href="/" className="hover:text-gray-700 font-semibold">
              Services
            </a>
            <a href="/" className="hover:text-gray-700 font-semibold">
              Blog
            </a>
            <a href="/" className="hover:text-gray-700 font-semibold">
              Contact Us
            </a>
          </div>
          <button className="border-black border-2 font-semibold py-2 px-4 rounded">
            Register Now
          </button>
        </div>
        <div className="w-full h-[2px] bg-black"></div>
      </nav>
    </>
  );
}
export default Navigation;
