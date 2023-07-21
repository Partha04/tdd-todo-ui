import { render, screen } from "@testing-library/react";
import AddTodoForm from "../../components/AddTodoForm";

describe("Add todo form", () => {
  test("should render todo form", async () => {
    render(<AddTodoForm />);
    const inputText = await screen.findByRole("textbox");
    expect(inputText).toBeInTheDocument();
  });
});
