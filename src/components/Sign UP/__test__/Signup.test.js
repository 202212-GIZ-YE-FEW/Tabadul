import renderer from "react-test-renderer";

import Signup from "../Index";

it("renders correctly", () => {
    const tree = renderer.create(<Signup />).toJSON();
    expect(tree).toMatchSnapshot();
});
