import {
  render,
  fireEvent,
  act,
  screen,
  waitFor,
  queryByTitle,
  queryByPlaceholderText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Home from "../src/pages/index";

describe("Home component", () => {
  beforeEach(() => {
    render(<Home />);
  });
  test("renders the AWelcome to Agile analyses header", () => {
    const headerElement = screen.getByText(/Welcome to agile analyses/i);
    expect(headerElement).toBeInTheDocument();
  });
  test("renders the MailComponent when mail is not set", () => {
    const emailInput = screen.getByTestId("email input");
    expect(emailInput).toBeInTheDocument();
  });
  test("renders the statement items when email is submitted", async () => {
    const emailInput = screen.getByTestId("email input");
    const submitButton = screen.getByRole("button", { name: /Start/i });

    userEvent.type(emailInput, "test@example.com");
    userEvent.click(submitButton);

    await waitFor(() => {
      const header = screen.getByTestId("heading");
      expect(header).toBeInTheDocument();
    });
  });

  test("can fill in email input and submit", async () => {
    const emailInput = screen.getByLabelText("Enter your email");
    const submitButton = screen.getByText("Start");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);
  });
});
