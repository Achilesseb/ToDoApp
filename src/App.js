import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./features/todo.feature/todoList";
import Header from "./features/header.feature/header.feature";

function App() {
  return (
    <div className="App">
      <nav>
        {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>TO DO APP 📝</p>
        {/* </header> */}
      </nav>
      <main>
        <section className="medium-container">
          <h2>TODOS</h2>
          <div className="todoapp">
            <Header />
            <ToDoList />
            {/* <Footer /> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
