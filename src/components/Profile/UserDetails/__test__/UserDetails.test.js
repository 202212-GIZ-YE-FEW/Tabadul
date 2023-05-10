import renderer from "react-test-renderer";

import UserDetails from "..";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            pathname: "",
            // ... whatever else you you call on `router`
        };
    },
}));

it("renders correctly", () => {
    const tree = renderer.create(<UserDetails />).toJSON();
    expect(tree).toMatchSnapshot();
});
