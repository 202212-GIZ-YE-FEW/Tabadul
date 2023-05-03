import renderer from "react-test-renderer";

import Card from "../Card";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            pathname: "",
            // ... whatever else you you call on `router`
        };
    },
}));

it("renders correctly", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
});
