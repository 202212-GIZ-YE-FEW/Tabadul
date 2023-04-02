import renderer from "react-test-renderer";

import BlogPage from "..";

it("renders correctly", () => {
    const tree = renderer.create(<BlogPage />).toJSON();
    expect(tree).toMatchSnapshot();
});
