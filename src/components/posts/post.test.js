import { screen, render, waitFor, act } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import Posts from "./";

const renderPosts = () => {
  render(<Posts />);
};

test("페이지 로딩시", async () => {
  renderPosts();

  await waitFor(() => {
    expect(screen.getByText("voluptatem eligendi optio")).toBeInTheDocument();
  });

  const clearBtn = screen.getByRole("button", { name: /clear/i });
  const list = screen.getByRole("listbox");
  const liList = await screen.findAllByRole("listitem");

  expect(clearBtn).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(liList).toHaveLength(100);
});

test("clear버튼 클릭시 아이템 개수는 0개가 된다", async () => {
  const user = useEvent.setup();
  renderPosts();

  const clearBtn = screen.getByRole("button", { name: /clear/i });
  expect(clearBtn).toBeInTheDocument();
  await act(async () => {
    await user.click(clearBtn);
  });

  const liList = screen.queryAllByRole("listitem"); // ajax 이후 btn event이므로 query사용
  await waitFor(() => {
    expect(liList).toHaveLength(0);
  });
});
