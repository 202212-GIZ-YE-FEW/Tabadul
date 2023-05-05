import renderer from "react-test-renderer";

import MyItems from "..";

it("renders correctly", () => {
    const tree = renderer.create(<MyItems />).toJSON();
    expect(tree).toMatchSnapshot();
});
