import renderer from "react-test-renderer";
import Signin from "../index";

it("renders correctly", () => {
    const tree = renderer.create(<Signin />).toJSON();
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
