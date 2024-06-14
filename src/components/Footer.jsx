import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";



function Footer() {
  return (
    <>
    <hr />
    <footer className="py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex space-x-5">
            <FaInstagram size={24}/>
            <FaDiscord size={24}/>
            <FaLinkedin size={24}/>
            <RiTwitterXLine size={24}/>

           
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
              Thank you for visiting my portfolio. Lets create something amazing together!
              </p>
              <p className="text-sm">Feel free to reach out to discuss potential collaborations or opportunities.

</p>
            </div>
        </div>

      </div>

    </footer>





    </>
   
        


        
   
  )
}

export default Footer
