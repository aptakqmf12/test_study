import { screen, render, act } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import PopOver from ".";

const user = useEvent.setup();

test("팝오버 초기상태", async () => {
  render(<PopOver />);

  const modal = screen.queryByText(/popOver/i);
  expect(modal).not.toBeInTheDocument();
});

test("버튼에 hover 하여 팝오버가 나타나고 unhover시 사라진다", async () => {
  render(<PopOver />);

  const button = screen.getByRole("button", { name: "클릭하여 팝오버하기" });

  await act(async () => {
    await user.hover(button);
  });

  const modal = screen.getByText("popOver");
  expect(modal).toBeInTheDocument();

  await act(async () => {
    await user.unhover(button);
  });

  expect(modal).not.toBeInTheDocument();
});
