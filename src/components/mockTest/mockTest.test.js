import { screen, render, act } from "@testing-library/react";
import MockTest from ".";

test("mock hanlder에서는 길이가 4인 배열을 return한다.", async () => {
  render(<MockTest />);

  const heading = screen.getByRole("heading", { name: /MockTest/i });

  expect(heading).toBeInTheDocument();

  // const list = await screen.findAllByRole("listitem", {
  //   name: /입니다/i,
  // });

  // expect(list).toHaveLength(4);
});
