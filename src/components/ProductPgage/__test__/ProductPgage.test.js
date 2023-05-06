import renderer from "react-test-renderer";

import Product from "../ProductPage";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            pathname: "",
            // ... whatever else you you call on `router`
        };
    },
}));

it("renders correctly", () => {
    const tree = renderer.create(<Product />).toJSON();
    expect(tree).toMatchSnapshot();
});
