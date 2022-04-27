import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-font: ${props=>props.theme.colorFont};
        --color-alfa: ${props=>props.theme.colorDark};
        --color-beta: ${props=>props.theme.colorLight};
        --color-contrast:${props=>props.theme.colorContrast};
        --color-line:${props=>props.theme.colorLine};
    }

    html {
        font-size: 10px;
    }

    body {
        max-width: 1300px;
        width: 100%;
        margin: auto;
        padding: 2rem;
        font-family: "Lato", Verdana, sans-serif;
        font-size: 1.6rem;
        color: rgb(var(--color-font));
        line-height:1.5;
    }
`

export default GlobalStyle;