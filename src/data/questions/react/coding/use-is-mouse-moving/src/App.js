export const code = `
import useIsMouseMoving from "./useIsMouseMoving";

function App() {
  // const { isMouseMoving, refElement } = useIsMouseMoving();
  const { isMouseMoving, refElement } = { isMouseMoving: true, refElement: { current: null } };

  return (
    <div
      ref={refElement}
      className={
        "w-full flex items-center justify-center h-screen transition-background-color duration-300 ease-in " +
        (isMouseMoving ? "bg-[#90ee90]" : "bg-[#f08080]")
      }
    >
      <h1>Move your mouse!</h1>
    </div>
  );
}

export default App;
`;
