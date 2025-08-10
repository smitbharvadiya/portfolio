const ContactTerminal = ({ name, email, message }) => {
  // Function to format current date as "Day DD Mon" (e.g., "Thu 21 Apr")
  const getCurrentDate = () => {
    const date = new Date();
    const options = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="w-full md:w-4/7 h-full bg-[#020817] text-white flex items-center justify-center px-4 pb-4 md:p-0">
      <div className="w-full md:w-3/4 max-w-2xl overflow-hidden rounded-lg md:rounded-xl shadow-2xl">
        {/* Terminal header */}
        <div className="relative bg-[#e0e0e0] px-3 md:px-4 py-2 flex items-center">
          <div className="flex space-x-1 md:space-x-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="absolute left-0 right-0 flex justify-center">
            <span className="text-[10px] md:text-xs text-[#334155] font-inter font-semibold">
              Terminal — smit@portfolio
            </span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="bg-[#112240] text-white text-xs md:text-sm font-mono p-3 md:p-4 pl-4 md:pl-6 h-[200px] md:h-65 overflow-y-auto whitespace-pre">
          <span className="text-[#c792ea]">const</span> button = document.<span className="text-[#c792ea]">querySelector</span>(<span className="text-[#a5e844]">"#sendBtn"</span>);<br />
          <span className="text-[#c792ea]">const</span> message = <span className="text-[#89ddff]">{`{`}</span><br />
          {`    name`}<span className="text-[#89ddff]">: </span>{name}<span className="text-[#89ddff]">,</span><br />
          {`    email`}<span className="text-[#89ddff]">: </span>{email}<span className="text-[#89ddff]">,</span><br />
          {`    message`}<span className="text-[#89ddff]">: </span>{message}<span className="text-[#89ddff]">,</span><br />
          {`    date`}<span className="text-[#89ddff]">: </span><span className="text-[#a5e844]">"{getCurrentDate()}"</span><br />
          {`}`}<br /><br />
          button.<span className="text-[#c792ea]">addEventListener</span>{`(`}<span className="text-[#a5e844]">'click'</span>{', () =>  {'}<br />
          {`    form.`}<span className="text-[#c792ea]">send</span>(message);<br />
          {`})`}
        </div>
      </div>
    </div>
  );
};

export default ContactTerminal;