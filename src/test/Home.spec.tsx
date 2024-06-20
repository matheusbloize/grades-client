import { fireEvent, render } from "@testing-library/react";

import Home from "@/app/page";
import { AwardContextProvider } from "@/contexts/AwardContext";
import { GradeContextProvider } from "@/contexts/GradeContext";

window.scrollTo = jest.fn();

describe("Home Component", () => {
  const Component = () => (
    <AwardContextProvider>
      <GradeContextProvider>
        <Home />
      </GradeContextProvider>
    </AwardContextProvider>
  );

  it("should render home page with a message to Mr. John Doe", () => {
    const { getByText } = render(Component());

    const johnDoesMessage = getByText(/Hello, Mr. John Doe/);

    expect(johnDoesMessage).toBeVisible();
  });

  it("should remove initial message on click", () => {
    sessionStorage.clear();
    const { getByText } = render(Component());

    const initialMessage = getByText("Click anywhere to close");

    expect(initialMessage).toBeVisible();
    fireEvent.click(initialMessage);
    expect(initialMessage).not.toBeVisible();
  });

  it("should render all 10 students", () => {
    const { getAllByTestId } = render(Component());

    const studentsLength = getAllByTestId(/student-\d+$/).length;
    expect(studentsLength).toBe(10);
  });

  it("should start the awarded cards with the black color", () => {
    const { getAllByTestId } = render(Component());

    const awardedCards = getAllByTestId("awarded-card");

    for (let i = 0; i < awardedCards.length; i++) {
      expect(awardedCards[i].children[0]).toHaveStyle("border-color: #010101;");
    }
  });

  it("should give an award to student when it's dragged to the right area", () => {
    const { getAllByTestId, getByTestId } = render(Component());

    const awardedCards = getAllByTestId("awarded-card");
    const colors = ["#FF1B6D", "#4EF6FF", "#4F52B1", "#5BFFD4"];

    for (let i = 0; i < awardedCards.length; i++) {
      fireEvent.dragStart(getByTestId(`student-${i + 1}`));
      fireEvent.drop(awardedCards[i]);
      expect(awardedCards[i].children[0]).toHaveStyle(
        `border-color: ${colors[i]};`,
      );
    }
  });
});
