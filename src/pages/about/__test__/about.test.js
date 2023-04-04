import renderer from "react-test-renderer";

import About from "../index.jsx";
it("renders correctly", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
});
