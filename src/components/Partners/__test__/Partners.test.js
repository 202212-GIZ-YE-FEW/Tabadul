import renderer from "react-test-renderer";

import Partners from "..";

it("renders correctly", () => {
    const tree = renderer.create(<Partners />).toJSON();
    expect(tree).toMatchSnapshot();
});
