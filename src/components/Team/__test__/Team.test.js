import renderer from "react-test-renderer";

import Team from "../index.jsx";

it("renders correctly", () => {
    const tree = renderer.create(<Team />).toJSON();
    expect(tree).toMatchSnapshot();
});
