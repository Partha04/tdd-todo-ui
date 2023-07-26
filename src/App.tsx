import React from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import {TodoProvider} from "./contexts/TodoContext";
import Container from "./components/layouts/Container";

function App() {
    return (
        <div className="App">
            <TodoProvider>
                <Container>
                    <AddTodoForm/>
                </Container>
            </TodoProvider>
        </div>
    );
}

export default App;
