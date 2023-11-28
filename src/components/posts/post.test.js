import {
  screen,
  render,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import Posts from "./";

test("페이지 로딩 후 clear 버튼 클릭 테스트", async () => {
  render(<Posts />);

  await waitFor(() => {
    expect(screen.getByText("voluptatem eligendi optio")).toBeInTheDocument();
  });

  const clearBtn = screen.getByRole("button", { name: "clear" });
  const list = screen.getByRole("listbox");
  const itemsBefore = await screen.findAllByRole("listitem");

  expect(clearBtn).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(itemsBefore).toHaveLength(100);
});

test("clear버튼 클릭시", async () => {
  const user = useEvent.setup();
  render(<Posts />);

  const clearBtn = screen.getByRole("button", { name: "clear" });

  // FIXME: fix me
  act(() => {
    user.click(clearBtn);
  });

  const itemsAfter = await screen.findAllByRole("listitem");
  await waitFor(() => {
    expect(itemsAfter).toHaveLength(0);
  });
});
