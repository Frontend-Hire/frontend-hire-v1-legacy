export const code = `import useMouse from "./useMouse";
import "./App.css";

function App() {
  // const { ref, refMousePosition, mousePosition, isInside } = useMouse();
  const { ref, refMousePosition, mousePosition, isInside } = {
    ref: { current: null },
    refMousePosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 },
    isInside: false
  };

  return (
    <div className="app">
      <div
        className={isInside ? "center-card inside" : "center-card"}
        ref={ref}
      >
        <h2>Centered Card</h2>
        <p>This card is centered on the screen.</p>
      </div>
      <dialog
        className="dialog"
        style={{
          left: mousePosition.x + "px",
          top: mousePosition.y + "px",
        }}
      >
        <h2>Mouse Position</h2>
        <table className="position-table">
          <thead>
            <tr>
              <th colSpan={2}>Absolute Mouse Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Mouse X:</strong>
              </td>
              <td>{mousePosition.x}px</td>
            </tr>
            <tr>
              <td>
                <strong>Mouse Y:</strong>
              </td>
              <td>{mousePosition.y}px</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>Relative to Element</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Element X:</strong>
              </td>
              <td>{refMousePosition.x}px</td>
            </tr>
            <tr>
              <td>
                <strong>Element Y:</strong>
              </td>
              <td>{refMousePosition.y}px</td>
            </tr>
          </tbody>
        </table>
      </dialog>
    </div>
  );
}

export default App;
`;
