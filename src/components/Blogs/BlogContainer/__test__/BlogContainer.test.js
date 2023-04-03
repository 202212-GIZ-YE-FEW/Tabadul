import renderer from "react-test-renderer";

import BlogContainer from "..";

it("renders correctly", () => {
    const tree = renderer.create(<BlogContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});
