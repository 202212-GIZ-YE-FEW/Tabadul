import renderer from "react-test-renderer";
import ScrollTop from "..";

it("renders correctly", () => {
    const tree = renderer.create(<ScrollTop />).toJSON();
    expect(tree).toMatchSnapshot();
});
