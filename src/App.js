import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1 className="title">React Todos</h1>
      <div className="cards">
        <Todo text="Learn React" />
        <Todo text="Master React" />
        <Todo text="Explore The React" />
      </div>
    </div>
  );
}

export default App;
