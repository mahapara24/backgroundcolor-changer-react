import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200 p-8"
      style={{ backgroundColor: color }}
    >
      <h1 className=" text-center justify-center p-4 text-4xl shadow-slate-900 font-extrabold text-white shadow-2xl mb-4 rounded-full">
        Color Changer{" "}
      </h1>
      <div class="flex justify-center gap-2 mt-8 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <button
          onClick={() => setcolor("black")}
          style={{ backgroundColor: "black" }}
          className="rounded-md bg-black px-3 py-2 text-md font-semibold text-white shadow-sm "
        >
          Black
        </button>
        <button
          onClick={() => setcolor("yellow")}
          type="button"
          class="rounded-md bg-yellow-600 px-3 py-2 text-md  font-semibold text-black shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setcolor("red")}
          type="button"
          class="rounded-md bg-red-600 px-3 py-2 text-md font-semibold text-black shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setcolor("green")}
          type="button"
          class="rounded-md bg-green-600 px-3 py-2 text-md font-semibold text-black shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => setcolor("purple")}
          type="button"
          class="rounded-md bg-purple-600 px-3 py-2 text-md font-semibold text-black shadow-sm hover:bg-purple-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>

        <button
          onClick={() => setcolor("brown")}
          type="button"
          class="rounded-md bg-brown-600 px-3 py-2 text-md font-semibold text-black shadow-sm hover:bg-purple-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          style={{ backgroundColor: "brown" }}
        >
          Brown
        </button>
        <button
          onClick={() => setcolor("orange")}
          type="button"
          class="rounded-md bg-orange-600 px-3 py-2 text-md font-semibold text-black shadow-sm hover:bg-orange-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>

        <button
          onClick={() => setcolor("pink")}
          type="button"
          class="rounded-md bg-pink-600 px-3 py-2 text-md font-semibold text-black shadow-sm hover:bg-pink-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>

        <button
          onClick={() => setcolor("blue")}
          type="button"
          class="rounded-md bg-blue-800 px-3 py-2 text-md font-semibold text-black shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>

        <button
          onClick={() => setcolor("aqua")}
          type="button"
          class="rounded-md bg-aqua-800 px-3 py-2 text-md font-semibold text-black shadow-sm hover:bg-aqua-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-600"
          style={{ backgroundColor: "aqua" }}
        >
          Aqua
        </button>


        <button
          onClick={() => setcolor("gray")}
          type="button"
          class="rounded-md bg-gray-800 px-3 py-2 text-md font-semibold text-gray shadow-sm hover:bg-gray-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          style={{ backgroundColor: "gray" }}
        >
          Gray
        </button>
      </div>
    </div>
  );
}

export default App;
