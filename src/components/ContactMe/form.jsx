const Form = () => {
  return (
    <section className="w-full md:w-2/5 h-full bg-[#020817] text-white flex items-center justify-center px-4 py-8 md:py-0">
      <div className="w-full max-w-3xl font-mono">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-400">
          // Send Me a Message
        </h2>

        <form className="space-y-6">
          {/* Row: Name & Email */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 text-sm text-gray-400">
                /* Name */
              </label>
              <input
                type="text"
                placeholder="const name = "
                className="w-full px-4 py-3 bg-[#0f172a] border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 font-mono text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm text-gray-400">
                /* Email */
              </label>
              <input
                type="email"
                placeholder="const email = "
                className="w-full px-4 py-3 bg-[#0f172a] border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 font-mono text-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              /* Message */
            </label>
            <textarea
              placeholder="const message = "
              rows={5}
              className="w-full px-4 py-3 bg-[#0f172a] border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 font-mono text-sm"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-700 transition-all duration-200 font-mono text-sm border border-blue-400"
          >
            submitMessage();
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;