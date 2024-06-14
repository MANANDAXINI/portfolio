

const Navbar = () => {
  return (
    <div>
      <div className="header flex flex-row justify-around pt-5">
      <div className="flex justify-items-start px-10">
      <img className="BrandLogo w-20 h-11" src="nike.jpg" />
      </div>

        <div className="nav">
        <div className="Navlink w-11 h-6  inline-flex">
          <div className="Navlink text-zinc-800 text-base font-semibold font-['Poppins']  hover:text-red-700 ">MENU</div>
        </div>

        <div className="Navlink w-20 h-6  items-center inline-flex px-20">
        <div className="Navlink text-zinc-800 text-base font-semibold font-['Poppins']  hover:text-red-700 hover:text-xl">LOCATION</div>
        </div>

        <div className="Navlink w-14 h-6 px-20  items-center inline-flex hover:text-black">
        <div className="Navlink text-zinc-800 text-base font-semibold font-['Poppins']  hover:text-red-700 hover:text-xl">ABOUT</div>
        </div>
        <div className="Navlink w-20 h-6  items-center inline-flex px-20 hover:text-black">
         <div className="Navlink text-zinc-800 text-base font-semibold font-['Poppins']  hover:text-red-700 hover:text-xl">CONTACT</div>
        </div>

        </div>

        <div className="Button w-20 h-8 px-4 py-1.5 bg-red-600 mx-5">
        <div className="Login text-white text-base font-semibold font-['Inter'] hover:text-xl  hover:text-black">Login</div>
        </div>

        
      
    </div>
    </div>
  )
}

export default Navbar
