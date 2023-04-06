import renderer from "react-test-renderer";

import SingleBlog from "..";

it("renders correctly", () => {
    const tree = renderer.create(<SingleBlog />).toJSON();
    expect(tree).toMatchSnapshot();
});
