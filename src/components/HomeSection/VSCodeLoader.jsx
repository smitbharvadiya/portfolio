import { useEffect, useState } from "react";
import vscodeLogo from "../../assets/vscodeLogo.svg";

export default function VSCodeLoader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const iv = setInterval(() => {
        setProgress((p) => Math.min(p + 4, 100));
      }, 75);
      return () => clearInterval(iv);
    } else {
      setTimeout(onDone, 300);
    }
  }, [progress]);

  return (
    <div className="h-45 flex flex-col justify-center items-center space-y-4">
      <img src={vscodeLogo} alt="VS Code" className="w-16 h-16 animate-bounce" />
      <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
