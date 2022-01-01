import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./features/todo.feature/todoList.feature/todoList";
import Header from "./features/header.feature/header.feature";
import Footer from "./features/footer.feature/footer.feature";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>TO DO LIST </p>
        <p>📝</p>
      </nav>
      <main>
        <section className="medium-container">
          <div className="todoapp">
            <Header />
            <ToDoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
