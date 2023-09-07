import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// triple A: Arrange, Act, Assert
it("should have Docs text", () => {
  render(<Home></Home>); // ARRANGE

  const myElem = screen.getByTestId("home-page"); // ACT

  expect(myElem).toBeInTheDocument(); // ASSERT
});
