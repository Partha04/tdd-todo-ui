import React, {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {addTodo} from "../api/TodoApi";
import Form from "./form/Form";
import Button from "./form/Button";
import Input from "./form/Input";
import Loader from "./form/Loader";
import {ThemeContext} from "../contexts/ThemeContext";

const AddTodoForm = () => {
    const {showNotification} = useContext(TodoContext);
    const [task, setTask] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const {pallet} = useContext(ThemeContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("addTodoForm");
        setLoading(true)
        addTodo(task)
            .then(() => {
                showNotification({
                    text: "Added new task",
                    type: "success"
                });
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
                showNotification({
                    text: "Failed to add task",
                    type: "warning"
                });
                setLoading(false);
            });
    };


    return (
        <Form data-testid="addTodoForm" onSubmit={(e) => handleSubmit(e)}>
            <Input
                name="task"
                value={task}
                required
                styleProps={{
                    width: "20rem"
                }}
                onChange={(value) => {
                    setTask(value);
                }}
            />
            <Button
                styleProps={{
                    width: "7rem",
                    height: "2rem",
                    background: pallet.primary,
                    color:pallet.text
                }}
                type="submit">
                {loading ? <Loader/> : "Add Task"}
            </Button>
        </Form>
    );
};

export default AddTodoForm;
