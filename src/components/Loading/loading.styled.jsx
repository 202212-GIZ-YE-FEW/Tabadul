import styled from "@emotion/styled";
export const Balls = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .loader {
        color: #33956d;
        position: relative;
        font-size: 11px;
        background: #33956d;
        animation: escaleY 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
        animation-delay: -0.16s;
    }
    .loader:before,
    .loader:after {
        content: "";
        position: absolute;
        top: 0;
        left: 2em;
        background: #33956d;
        width: 1em;
        height: 4em;
        animation: escaleY 1s infinite ease-in-out;
    }
    .loader:before {
        left: -2em;
        animation-delay: -0.32s;
    }

    @keyframes escaleY {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }
`;
