import renderer from "react-test-renderer";
import Product from "../ProductPage";

it("renders correctly", () => {
    const tree = renderer.create(<Product />).toJSON();
    expect(tree).toMatchSnapshot();
});
