import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const TabManager = () => {
  const location = useLocation();
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("projects")) {
      setTabs(["projects.json"]);
      setActiveTab("projects.json");
    } else if (path.includes("tech-stack")) {
      setTabs(["tech-stack.json"]);
      setActiveTab("tech-stack.json");
    } else if (path.includes("contact")) {
      setTabs(["contact.json"]);
      setActiveTab("contact.json");
    } else if (path.includes("about")) {
      setTabs(["about.json"]);
      setActiveTab("about.json");
    }
  }, [location.pathname]);

  const openTab = (tabName) => {
    setTabs((prevTabs) =>
      prevTabs.includes(tabName) ? prevTabs : [...prevTabs, tabName]
    );
    setActiveTab(tabName);
  };

  const closeTab = (tabName) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab !== tabName));
    if (activeTab === tabName) {
      setActiveTab((prev) => tabs.find((t) => t !== tabName) || "");
    }
  };

  return { tabs, activeTab, openTab, closeTab, setActiveTab };
};
