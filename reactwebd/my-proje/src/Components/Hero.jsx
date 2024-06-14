

const Hero = () => {
  return (
    <div className="flex flex-row justify-around pt-7 px-12">
    <div className="part1">
      <div className="flex flex-col">
        <div className="text-7xl font-bold py-2">YOUR FEET </div>
        <div className="text-7xl font-bold py-2">DESERVES</div>
        <div className="text-7xl font-bold py-2">THE BEST</div>
      </div>

      <div>
      <div className="YourFeetDeserveTheBestAndWeReHereToHelpYouWithOurShoesYourFeetDeserveTheBestAndWeReHereToHelpYouWithOurShoes w-96 h-24 text-zinc-600 text-base font-semibold font-['Poppins'] pt-7">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>
      </div>

      <div className="w-76 flex flex-row pt-20 ">
        <div>
        <button className="bg-red-700 text-white h-10">SHOP NOW</button></div>
        <div className="px-5  border-black">
        <button className="bg-white text-gray-700 h-10">CATEGORY</button>
        </div>

      </div>

      
        
        <div className="AlsoAvailableOn text-zinc-600 text-base font-normal font-['Inter'] pt-4">Also Available On</div>

        <div className="pt-5 flex flex-row">
        <div >
          <img className=""src="fliplogo.png" alt="flip" />
        </div>
        <div className="px-4">
          <img src="amazon.jpg" alt="amazon" />
        </div>
        </div>
      
    </div>

    <div className="part">
    <img src="shoe_image.png" alt="show" />
    </div>
    </div>
  )
}

export default Hero
