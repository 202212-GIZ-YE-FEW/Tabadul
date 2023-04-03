import renderer from "react-test-renderer";

import SingleBlogCard from "..";

it("renders correctly", () => {
    const tree = renderer.create(<SingleBlogCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
