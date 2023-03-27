import renderer from "react-test-renderer";

import Statistics from "../Statistics";

it("renders correctly", () => {
    const tree = renderer.create(<Statistics />).toJSON();
    expect(tree).toMatchSnapshot();
});
