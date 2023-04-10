import renderer from "react-test-renderer";

import AddItem from "../index";

it("renders correctly", () => {
    const tree = renderer.create(<AddItem />).toJSON();
    expect(tree).toMatchSnapshot();
});
