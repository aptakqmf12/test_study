import { screen, render, waitFor } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import Posts from "./";

test.skip("첫 페이지 로딩", async () => {
  const user = useEvent.setup();
  render(<Posts />);

  await waitFor(() => {
    expect(screen.getByText("voluptatem eligendi optio")).toBeInTheDocument();
  });

  const clearBtn = screen.getByRole("button", { name: "clear" });

  await user.click(clearBtn);

  expect(
    screen.queryByText("voluptatem eligendi optio")
  ).not.toBeInTheDocument();
});
