import { screen, render, waitFor } from "@testing-library/react";
import MockTest from ".";

test.skip("mock hanlder에서는 길이가 4인 배열을 return한다.", async () => {
  render(<MockTest />);

  const list = await screen.findAllByRole("listitem", {
    name: /입니다$/i,
  });

  expect(list).toHaveLength(4);
});
