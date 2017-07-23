import { shallow } from "enzyme";
import * as React from "react";
import {Title} from "../components/title";

describe("Testing title component", () => {
  it("renders", () => {
    const titleElement: React.ReactElement<{name: string, byline: string}> = React.createElement(Title,
      {
        byline: "Passionate about creating value using machine learning.",
        name: "Daniel Langkilde",
      },
    );
    const component = shallow(titleElement);
    const text = component.text();
    expect(text).toBe("Daniel LangkildePassionate about creating value using machine learning.");
  });
});
