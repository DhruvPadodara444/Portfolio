import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/raeqjora", data);
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="w-full bg-linear-to-br from-indigo-50 via-white to-purple-50 py-28"
    >
      <div className="w-full px-10 md:px-24 lg:px-32">

        {/* SECTION TITLE */}
        <div className="space-y-4 mb-16">
          <h1 className="text-5xl font-bold">
            Contact <span className="text-indigo-600">Me</span>
          </h1>
          <div className="w-24 h-1 bg-indigo-600 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Feel free to reach out for collaboration, opportunities,
            or just a friendly conversation.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE INFO */}
          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Let's Connect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                I am always open to discussing new projects,
                creative ideas, or opportunities to be part
                of your vision.
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/DhruvPadodara444"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                <FaGithub className="text-2xl text-gray-800" />
              </a>

              <a
                href="https://www.linkedin.com/in/dhruv-padodara/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10">

            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    Name is required
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Email is required
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register("message", { required: true })}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    Message is required
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;