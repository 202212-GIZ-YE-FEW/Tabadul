import renderer from "react-test-renderer";

import Product from "../ProductPage";

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
