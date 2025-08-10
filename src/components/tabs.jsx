const TabBar = ({ tabs, activeTab, setActiveTab, closeTab }) => {
  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="w-full h-10 bg-[#10182a] border-b border-gray-800">
      <div className="flex h-full px-2 text-white font-mono text-sm overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`group flex items-center px-3 h-full cursor-pointer border-b-2 transition-all duration-200
              ${activeTab === tab
                ? "border-blue-500 bg-[#1e293b]"
                : "border-transparent hover:bg-[#1e293b]/60 text-[#94a3b8]"}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="select-none">{tab}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab);
              }}
              className="ml-2 text-[#94a3b8] duration-200
                md:opacity-0 md:group-hover:opacity-100 opacity-100" 
              // Always visible on mobile (opacity-100), hover-to-show on md+
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
