import renderer from "react-test-renderer";

import Causes from "..";

it("renders correctly", () => {
    const tree = renderer.create(<Causes />).toJSON();
    expect(tree).toMatchSnapshot();
});
