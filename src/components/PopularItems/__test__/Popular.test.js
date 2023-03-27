import renderer from "react-test-renderer";
import PopularItems from "..";

it("renders correctly", () => {
    const tree = renderer.create(<PopularItems />).toJSON();
    expect(tree).toMatchSnapshot();
});
