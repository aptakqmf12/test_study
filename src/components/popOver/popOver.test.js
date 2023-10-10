import { screen, render } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import PopOver from ".";

const user = useEvent.setup();
test("팝오버 초기상태", async () => {
  render(<PopOver />);

  const modal = screen.queryByText(/popOver/i);
  expect(modal).not.toBeInTheDocument();
});

test("버튼에 hover 하여 팝오버가 나타남", async () => {
  render(<PopOver />);

  const button = screen.getByRole("button", { name: "클릭하여 팝오버하기" });

  await user.hover(button);

  // user이후에 get을 해줘야함
  const modal = screen.getByText("popOver");
  expect(modal).toBeInTheDocument();

  // 한꺼번에도 test가능
  // await user.unhover(button);
  // expect(modal).not.toBeInTheDocument();
});

test("버튼에 unhover 하여 팝오버가 사라짐", async () => {
  render(<PopOver />);

  const button = screen.getByRole("button", { name: "클릭하여 팝오버하기" });

  await user.unhover(button);

  // 사라진 Element라서 query
  const modal = screen.queryByText("popOver");

  expect(modal).not.toBeInTheDocument();
});
