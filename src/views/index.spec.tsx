import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./index";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    expect(screen.getByText("Progress Bar Demo")).toBeInTheDocument();
    expect(screen.getByTestId("progress-bar-1")).toHaveTextContent("0%");
    expect(screen.getByTestId("progress-bar-2")).toHaveTextContent("0%");
    expect(screen.getByTestId("progress-bar-3")).toHaveTextContent("0%");
    expect(screen.getByTestId("progress-selection")).toHaveTextContent(
      "#progress 1"
    );
    expect(screen.getByTestId("progress-selection")).toHaveValue("1");
    expect(screen.getByTestId("decrease-25")).toHaveTextContent("-25");
    expect(screen.getByTestId("decrease-10")).toHaveTextContent("-10");
    expect(screen.getByTestId("increase-10")).toHaveTextContent("+10");
    expect(screen.getByTestId("increase-25")).toHaveTextContent("+25");
  });

  it("should change progress bar value on increment and decrement", async () => {
    render(<App />);

    expect(screen.getByTestId("progress-bar-1")).toHaveTextContent("0%");

    userEvent.click(screen.getByTestId("increase-10"));
    await waitFor(() => {
      expect(screen.getByTestId("progress-bar-1")).toHaveTextContent("10%");
    });

    userEvent.click(screen.getByTestId("increase-25"));
    await waitFor(() => {
      expect(screen.getByTestId("progress-bar-1")).toHaveTextContent("35%");
    });

    userEvent.click(screen.getByTestId("decrease-10"));
    await waitFor(() => {
      expect(screen.getByTestId("progress-bar-1")).toHaveTextContent("25%");
    });

    userEvent.click(screen.getByTestId("decrease-25"));
    await waitFor(() => {
      expect(screen.getByTestId("progress-bar-1")).toHaveTextContent("0%");
    });

    userEvent.click(screen.getByTestId("decrease-25"));
    await waitFor(() => {
      expect(screen.getByTestId("progress-bar-1")).toHaveTextContent("0%");
    });
  });

  it("should change progress-selection and progress bar value on selection change", async () => {
    render(<App />);
    expect(screen.getByTestId("progress-selection")).toHaveValue("1");
    expect(screen.getByTestId("progress-bar-1")).toHaveTextContent("0%");
    expect(screen.getByTestId("progress-bar-2")).toHaveTextContent("0%");
    expect(screen.getByTestId("progress-bar-3")).toHaveTextContent("0%");
    userEvent.selectOptions(screen.getByTestId("progress-selection"), "3");

    await waitFor(() => {
      expect(screen.getByTestId("progress-selection")).toHaveValue("3");
      expect(screen.getByTestId("progress-bar-3")).toHaveTextContent("0%");
    });

    userEvent.click(screen.getByTestId("increase-10"));

    await waitFor(() => {
      expect(screen.getByTestId("progress-bar-3")).toHaveTextContent("10%");
    });

    userEvent.selectOptions(screen.getByTestId("progress-selection"), "2");

    userEvent.click(screen.getByTestId("increase-25"));

    await waitFor(() => {
      expect(screen.getByTestId("progress-selection")).toHaveValue("2");
      expect(screen.getByTestId("progress-bar-2")).toHaveTextContent("25%");
    });

    userEvent.click(screen.getByTestId("increase-10"));

    await waitFor(() => {
      expect(screen.getByTestId("progress-bar-3")).toHaveTextContent("0%");
      expect(screen.getByTestId("progress-bar-3")).toHaveTextContent("10%");
      expect(screen.getByTestId("progress-bar-2")).toHaveTextContent("35%");
    });
  });
});
