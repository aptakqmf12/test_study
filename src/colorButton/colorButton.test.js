import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ColorButton from ".";

test("initial button status", () => {
  render(<ColorButton />);

  const colorButton = screen.getByRole("button", { name: "비활성화 하기" });
  const checkbox = screen.getByRole("checkbox", { name: "체크박스" });

  // 초기에 버튼은 빨간색, 체크박스는 활성화상태.
  expect(colorButton).toHaveStyle({ backgroundColor: "#f00" });
  expect(checkbox).not.toBeDisabled();
});

// 버튼을 1번 2번 클릭했을때
describe("clicks button", () => {
  test("click button once", async () => {
    const user = userEvent.setup();
    render(<ColorButton />);

    const colorButton = screen.getByRole("button", { name: "비활성화 하기" });
    const checkbox = screen.getByRole("checkbox", { name: "체크박스" });

    await user.click(colorButton);

    expect(
      screen.getByRole("button", { name: "활성화 하기" })
    ).toBeInTheDocument();
    expect(colorButton).toHaveStyle({ backgroundColor: "#00f" });
    expect(checkbox).toBeDisabled();

    await user.click(checkbox);
    expect(checkbox).toBeDisabled();
  });

  test("click button twice", () => {
    render(<ColorButton />);

    const colorButton = screen.getByRole("button", { name: "비활성화 하기" });
    const checkbox = screen.getByRole("checkbox", { name: "체크박스" });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: "#00f" });
    expect(checkbox).toBeDisabled();

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: "#f00" });
    expect(checkbox).not.toBeDisabled();
  });
});

// 최초 체크박스 클릭, 버튼 클릭후 체크박스 클릭 테스트
describe("clicks checkbox", () => {
  test("click check box", () => {
    render(<ColorButton />);

    const colorButton = screen.getByRole("button", { name: "비활성화 하기" });
    const checkbox = screen.getByRole("checkbox", { name: "체크박스" });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    fireEvent.click(colorButton);
    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
