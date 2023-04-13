import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as SelectStories from "./Select.stories";

const { Select } = composeStories(SelectStories);

describe("Select", () => {
  it("renders", () => {
    render(<Select />);
    const select = screen.getByTestId("select-1");

    expect(select).toHaveAttribute("aria-label", "Select an option");
    expect(select).toHaveAttribute("aria-describedby", "select-description");
  });
});
