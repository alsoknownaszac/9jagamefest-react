import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav page", () => {
  it("renders the nav page", () => {
    const { getByText } = render(<Nav />);
    expect(getByText("9jagames")).toBeInTheDocument();
  });
});
