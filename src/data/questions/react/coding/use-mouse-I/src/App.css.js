export const code = `
#root {
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 1.5em;
  font-weight: 600;
  margin: 20px;
}

.app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.center-card {
  width: 200px;
  padding: 20px;
  background-color: white;
  border: 1px dotted black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.8s ease;
  cursor: crosshair;
  background-color: lightblue;
}

.inside {
  background-color: lightgreen;
  cursor: pointer;
}

.dialog {
  display: block;
  position: absolute;
  margin: 0%;
  min-width: 250px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid black;
  background-color: beige;
}

.position-table {
  width: 100%;
  border-collapse: collapse;
}

.position-table td {
  padding: 8px;
  border: 1px solid #ccc;
}

.position-table strong {
  font-weight: bold;
}
`;
