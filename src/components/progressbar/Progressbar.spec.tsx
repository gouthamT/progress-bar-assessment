import { render, screen } from "@testing-library/react";
import { composeStories } from '@storybook/react';
import * as ProgressbarStories from './Progressbar.stories';

const { Progressbar } = composeStories(ProgressbarStories);

describe("Progressbar", () => {
  it("renders", () => {
    render(
      <Progressbar
        percentage={50}
        ariaLabel="progress-bar-description"
        testId="example-test-id"
      />
    );
    const progressbar = screen.getByTestId("example-test-id");

    expect(progressbar).toHaveAttribute("role", "progressbar");
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuenow", "50");
  });
});
