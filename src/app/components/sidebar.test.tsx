import { render, screen } from "@testing-library/react";
import { Sidebar } from "./sidebar";

// triple A: Arrange, Act, Assert

describe("Sidebar", () => {
  it("should render navigation menus", async () => {
    render(<Sidebar />);
    const sidebarMenus = await screen.findAllByTestId("sidebar-menu-item");
    expect(sidebarMenus.length).toBeGreaterThan(0);
  });
});
