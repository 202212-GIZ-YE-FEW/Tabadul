import renderer from "react-test-renderer";

import UserDetails from "..";

it("renders correctly", () => {
    const tree = renderer.create(<UserDetails />).toJSON();
    expect(tree).toMatchSnapshot();
});
