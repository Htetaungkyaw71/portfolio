import { useEffect, useState } from "react";
import Header from "./components/Header";
import SideContext from "./components/SideContext";
import Loader from "./components/Loader";

function App() {
  const [activeTag, setActiveTag] = useState("about");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Highlight
  const [highlightPosition, setHighlightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const container = document.querySelector("#container");
    const containerRect = container.getBoundingClientRect();

    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;

    setHighlightPosition({ x: offsetX, y: offsetY });
  };
  // Highlight

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="bg-slate-900 min-h-screen text-white overflow-hidden"
          id="container"
          onMouseMove={handleMouseMove}
        >
          <div
            className="highlight"
            style={{ left: highlightPosition.x, top: highlightPosition.y }}
          ></div>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
            <div className="mt-5 p-5 sm:p-5 md:p-5 lg:p-16 xl:p-16">
              <Header activeTag={activeTag} setActiveTag={setActiveTag} />
            </div>
            <div className="overflow-y-auto">
              <SideContext setActiveTag={setActiveTag} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
