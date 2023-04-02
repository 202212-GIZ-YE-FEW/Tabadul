import renderer from "react-test-renderer";

import ListedItems from "../ListedItems";

it("renders correctly", () => {
    const tree = renderer.create(<ListedItems />).toJSON();
    expect(tree).toMatchSnapshot();
});
