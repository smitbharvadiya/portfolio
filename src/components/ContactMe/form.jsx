import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Form = ({ name, setName, email, setEmail, message, setMessage }) => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="w-full md:w-3/7 h-full bg-[#020817] text-white flex items-center justify-center px-4 md:pl-10 py-8 md:py-0">
      <div className="w-full max-w-3xl font-mono">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-blue-400">
          // Send Me a Message
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Row: Name & Email */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1">
              <label className="block mb-1 md:mb-2 text-xs md:text-sm text-gray-400">
                /* Name */
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="const name = "
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#0f172a] border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 font-mono text-xs md:text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 md:mb-2 text-xs md:text-sm text-gray-400">
                /* Email */
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="const email = "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#0f172a] border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 font-mono text-xs md:text-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 md:mb-2 text-xs md:text-sm text-gray-400">
              /* Message */
            </label>
            <textarea
              placeholder="const message = "
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#0f172a] border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 font-mono text-xs md:text-sm"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 md:py-3 rounded hover:bg-blue-700 transition-all duration-200 font-mono text-xs md:text-sm border border-blue-400"
          >
            submitMessage();
          </button>

          {/* Success */}
          {submitted && (
            <p className="text-green-400 text-center text-xs md:text-sm mt-1">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Form;