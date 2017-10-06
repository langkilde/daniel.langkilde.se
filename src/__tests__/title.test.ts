import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

enzyme.configure({ adapter: new Adapter() });

import {Title} from "../components/Title";

describe("Testing title component", () => {
  it("renders", () => {
    const titleElement: React.ReactElement<{name: string, byline: string}> = React.createElement(Title,
      {
        byline: "Passionate about creating value using machine learning.",
        name: "Daniel Langkilde",
      },
    );
    const component = enzyme.shallow(titleElement);
    const text = component.text();
    expect(text).toBe("Daniel LangkildePassionate about creating value using machine learning.");
  });
});
