import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/paygdqpa", userinfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div>
          <h1 className="text-xl font-semibold">Contact</h1>
          <p className="py-5">Please Fill Out The Form To Contact</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow appearance-none border rounded py-2 px-3 text-gray leading-tight focus:out"
                type="text"
                id="Name"
                name="name"
                placeholder="Enter Your Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div>
              <label className="block text-gray-700 py-3">Email</label>
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded py-2 px-3 text-gray leading-tight focus:out"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div>
              <label className="block text-gray-700 py-3">Phone No</label>
              <input
                {...register("phone no", { required: true })}
                className="shadow appearance-none border rounded py-2 px-3 text-gray leading-tight focus:out"
                type="number"
                name="phone no"
                id="Phone"
                placeholder="Enter Your Phone No"
              />
              {errors["phone no"] && <span>This field is required</span>}
            </div>

            <div>
              <label className="block text-gray-700 py-3">Message</label>
              <input
                {...register("message", { required: true })}
                className="shadow appearance-none border rounded py-2 px-3 h-36 text-gray leading-tight focus:out"
                type="text"
                id="Message"
                name="message"
                placeholder="Enter Message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-gray-500 text-white hover: rounded-xl mx-24 w-24 py-4 mt-6 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
