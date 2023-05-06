import renderer from "react-test-renderer";
import Signin from "../index";

jest.mock("react-i18next", () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

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
