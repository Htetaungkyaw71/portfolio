import { useState } from "react";
import Header from "./components/Header";
import SideContext from "./components/SideContext";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [activeTag, setActiveTag] = useState("about");
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="79, 198, 201"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.5}
      />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
        <div className="mt-5 p-16 ">
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
