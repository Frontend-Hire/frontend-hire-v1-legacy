export const code = `import useHover from "./useHover";
import "./App.css";

function App() {
  // const { isHovering, refElement } = useHover();
  const { isHovering, refElement } = { isHovering: false, refElement: null };

  return (
    <div
      ref={refElement}
      className={
        "p-5 mt-5 rounded cursor-pointer transition-all duration-300 ease-out" +
        (isHovering ? " bg-green-500 text-white" : " bg-gray-300 text-black")
      }
    >
      {isHovering ? "Hovering!" : "Hover me!"}
    </div>
  );
}

export default App;
`;
