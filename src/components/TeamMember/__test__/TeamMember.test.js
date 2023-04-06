import renderer from "react-test-renderer";

import TeamMember from "..";

it("renders correctly", () => {
    const tree = renderer.create(<TeamMember />).toJSON();
    expect(tree).toMatchSnapshot();
});
