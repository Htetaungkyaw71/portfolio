import { useCallback, useRef, useState } from "react";
import Header from "./components/Header";
import SideContext from "./components/SideContext";

function App() {
  const [activeTag, setActiveTag] = useState("about");
  const containerRef = useRef(null);
  const highlightRef = useRef(null);
  const animationFrameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current || !highlightRef.current) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      highlightRef.current.style.setProperty("--highlight-x", `${offsetX}px`);
      highlightRef.current.style.setProperty("--highlight-y", `${offsetY}px`);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-slate-900 min-h-screen text-white overflow-hidden px-0 sm:px-0 md:px-20 lg:px-0 xl:px-0"
      id="container"
      onMouseMove={handleMouseMove}
    >
      <div ref={highlightRef} className="highlight"></div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
        <div className="mt-5 p-5 sm:p-5 md:p-5 lg:p-16 xl:p-16">
          <Header activeTag={activeTag} setActiveTag={setActiveTag} />
        </div>
        <div className="overflow-y-auto">
          <SideContext setActiveTag={setActiveTag} />
        </div>
      </div>
    </div>
  );
}

export default App;
