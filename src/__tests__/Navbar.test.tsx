import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it, jest } from "@jest/globals";
import * as Navbar from "../components/Navbar";
import { AppRouterContextProviderMock } from "./contexts/app_router_context_provider";

describe("Navbar", () => {
	it("should render properly", () => {
		const push = jest.fn();
		render(
			<AppRouterContextProviderMock router={{ push }}>
				<Navbar.default />
			</AppRouterContextProviderMock>
		);

		expect(screen.getByText("Projetos")).toBeInTheDocument();
	});

	/* it("should call scrollSmoothly", () => {
		jest.mock("../src/components/Navbar/useScroll", () => ({
			...jest.requireActual("../src/components/Navbar/useScroll"),
			scrollSmoothly: jest.fn()
		}))

		const fakeScrollSmoothly = jest.spyOn(useScroll, "scrollSmoothly")
		const push = jest.fn();
		render(
			<AppRouterContextProviderMock router={{ push }}>
				<Navbar.default />
			</AppRouterContextProviderMock>
		);
		const projectsLink = screen.getByText("Projetos");
		const aboutMeLink = screen.getByText("Sobre mim");
		const contactLink = screen.getByText("Contato");

		fireEvent.click(projectsLink);

		expect(fakeScrollSmoothly).toHaveBeenCalledWith("projects");
	}); */
});