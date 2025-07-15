

const ContactTerminal = ( {name, email, message} ) => {

    return (
        <div className="w-full md:w-4/7 h-full bg-[#020817] text-white flex items-center justify-center">

        <div className="w-3/4 max-w-2xl overflow-hidden rounded-xl shadow-2xl">
          
          <div className="relative bg-[#e0e0e0] px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="absolute left-0 right-0 flex justify-center">
              <span className="text-xs text-[#334155] font-inter font-semibold">
                Terminal — smit@portfolio
              </span>
            </div>
          </div>
    
          {/* Terminal content */}
          <div className="bg-[#112240] text-white text-sm font-mono p-4 pl-6 h-65 overflow-y-auto whitespace-pre">
                    <span className="text-[#c792ea]">const</span> button = document.<span className="text-[#c792ea]">querySelector</span>(<span className="text-[#a5e844]">"#sendBtn"</span>);<br />
                    <span className="text-[#c792ea]">const</span> message = <span className="text-[#89ddff]">{`{`}</span><br />
                     {`    name`}<span className="text-[#89ddff]">: </span>{name}<span className="text-[#89ddff]">,</span><br />
                    {`    email`}<span className="text-[#89ddff]">: </span>{email}<span className="text-[#89ddff]">,</span><br />
                    {`    message`}<span className="text-[#89ddff]">: </span>{message}<span className="text-[#89ddff]">,</span><br />
                    {`    date`}<span className="text-[#89ddff]">: </span><span className="text-[#a5e844]">"Thu 21 Apr"</span><br />
                    {`}`}<br /><br />
                    button.<span className="text-[#c792ea]">addEventListener</span>{`(`}<span className="text-[#a5e844]">'click'</span>{', () =>  {'}<br />
                    {`    form.`}<span className="text-[#c792ea]">send</span>(message);<br />
                    {`})`}
                </div>
        </div>
            </div>
      );
}

export default ContactTerminal;