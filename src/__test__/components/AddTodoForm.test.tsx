import { fireEvent, render, screen } from "@testing-library/react";
import AddTodoForm from "../../components/AddTodoForm";
import { TodoProvider } from "../../contexts/TodoContext";
import { server } from "../../mocks/server";
import React from "react";

describe("Add todo form", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
  test("should render todo form", async () => {
    render(<AddTodoForm />);
    const inputText = await screen.findByRole("textbox");
    expect(inputText).toBeInTheDocument();
    const submitButton = await screen.findByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
  test("should add new todo with test task 1 ", async () => {
    render(
      <TodoProvider>
        <AddTodoForm />
      </TodoProvider>
    );
    const inputText = await screen.findByRole("textbox");
    const submitButton = await screen.findByRole("button");
    fireEvent.change(inputText, {
      target: {
        value: "Task 1",
      },
    });
    fireEvent.click(submitButton);
    const message = await screen.findByText("Added new task");
    expect(message).toBeInTheDocument();
    setTimeout(() => {
      expect(message).not.toBeInTheDocument();
    }, 3000);
  });
});
