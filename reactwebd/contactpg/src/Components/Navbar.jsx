
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between bg-red-500">
      <div> 
        <img src="logo.png" alt="logo" />
      </div>

      <div className="flex flex-row justify-center mx-7">
      <div className="mx-7 my-5 text-xl font-bold  hover:text-white">Home</div>
      <div className="mx-7 my-5 text-xl font-bold  hover:text-white">About</div>
      <div className="mx-7 my-5 text-xl font-bold hover:text-white">Contact</div>
      </div>
    </div>

    </div>
  )
}

export default Navbar


