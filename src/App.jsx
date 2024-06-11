import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200 flex flex-col"
      style={{ backgroundColor: color }}
      
    >
      <span className="text-white text-3xl text-center p-10  mx-auto mt-10 rounded-md" style={{ backgroundColor: 'grey' }}>
        Background Changer 
      </span>

      <div className="rounded-md flex flex-wrap justify-center fixed bottom-10 inset-x-0">
        <div className="bg-white flex flex-wrap justify-center rounded-full px-3 py-2 gap-10">
          <button onClick={()=> setColor("red")}
            className="px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={()=> setColor("blue")}
            className="px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button onClick={()=> setColor("green")}
            className="px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button onClick={()=> setColor("yellow")}
            className="px-4 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button onClick={()=> setColor("orange")}
            className="px-4 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button onClick={()=> setColor("purple")}
            className="px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
