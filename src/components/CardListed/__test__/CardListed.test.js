import renderer from "react-test-renderer";

import CardListed from "..";

it("renders correctly", () => {
    const tree = renderer.create(<CardListed />).toJSON();
    expect(tree).toMatchSnapshot();
});
