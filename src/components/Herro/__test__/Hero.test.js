import renderer from "react-test-renderer";

import Herro from "..";

it("renders correctly", () => {
    const tree = renderer.create(<Herro />).toJSON();
    expect(tree).toMatchSnapshot();
});

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: ",",
        };
    },
}));
