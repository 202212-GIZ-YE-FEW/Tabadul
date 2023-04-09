import renderer from "react-test-renderer";

import AddItem from "..";

it("renders correctly", () => {
    const tree = renderer.create(<AddItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
