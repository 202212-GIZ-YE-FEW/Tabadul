import renderer from "react-test-renderer";

import Statistics from "../Statistics";

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
    const tree = renderer.create(<Statistics />).toJSON();
    expect(tree).toMatchSnapshot();
});
