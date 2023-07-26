import React, {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {addTodo} from "../api/TodoApi";
import Form from "./form/Form";
import Button from "./form/Button";
import Input from "./form/Input";

const AddTodoForm = () => {
    const {showNotification} = useContext(TodoContext);
    const [task, setTask] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("addTodoForm");
        addTodo(task)
            .then(() => {
                showNotification("Added new task");
            })
            .catch((err) => {
                console.log(err)
                showNotification("Failed to add task");
            });
    };


    return (
        <Form data-testid="addTodoForm" onSubmit={(e) => handleSubmit(e)}>
            <Input
                name="task"
                value={task}
                required
                onChange={(value) => {
                    setTask(value);
                }}
            />
            <Button
                type="submit">
                Add Task
            </Button>
        </Form>
    );
};

export default AddTodoForm;
