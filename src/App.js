import "./App.css";

const name = "hello world";

function App() {
  const object = {
    name: "hello",
    fatherName: "world",
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{object.name}</h1>
      <h1>{object.fatherName}</h1>
    </div>
  );
}

export default App;
