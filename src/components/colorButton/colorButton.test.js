import { screen, render, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ColorButton from "./";

test("버튼 초기상태", () => {
  render(<ColorButton />);

  const colorButton = screen.getByRole("button", { name: "비활성화 하기" });
  const checkbox = screen.getByRole("checkbox", { name: "체크박스" });

  expect(colorButton).toHaveStyle({ backgroundColor: "#f00" });
  expect(checkbox).not.toBeDisabled();
});

describe("버튼 클릭에 관한 테스트들", () => {
  test("버튼 한번 클릭", async () => {
    const user = userEvent.setup();
    render(<ColorButton />);

    const colorButton = screen.getByRole("button", { name: "비활성화 하기" });
    const checkbox = screen.getByRole("checkbox", { name: "체크박스" });

    await act(async () => {
      await user.click(colorButton);
    });

    expect(
      screen.getByRole("button", { name: "활성화 하기" })
    ).toBeInTheDocument();
    expect(colorButton).toHaveStyle({ backgroundColor: "#00f" });
    expect(checkbox).toBeDisabled();

    await user.click(checkbox);
    expect(checkbox).toBeDisabled();
  });

  test("버튼 두번 클릭", async () => {
    const user = userEvent.setup();
    render(<ColorButton />);

    const colorButton = screen.getByRole("button", { name: "비활성화 하기" });
    const checkbox = screen.getByRole("checkbox", { name: "체크박스" });

    await act(async () => {
      await user.click(colorButton);
    });

    expect(colorButton).toHaveStyle({ backgroundColor: "#00f" });
    expect(checkbox).toBeDisabled();

    await act(async () => {
      await user.click(colorButton);
    });

    expect(colorButton).toHaveStyle({ backgroundColor: "#f00" });
    expect(checkbox).not.toBeDisabled();
  });
});

describe("체크박스 클릭에 대한 테스트들", () => {
  test("최초 체크박스 클릭", async () => {
    const user = userEvent.setup();
    render(<ColorButton />);

    const colorButton = screen.getByRole("button", { name: "비활성화 하기" });
    const checkbox = screen.getByRole("checkbox", { name: "체크박스" });

    await act(async () => {
      await user.click(checkbox);
    });
    expect(checkbox).toBeChecked();

    await act(async () => {
      await user.click(colorButton);
    });

    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });
});
