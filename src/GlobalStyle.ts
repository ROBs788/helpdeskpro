import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    --color-primary: #030E2C;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323C;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
}`

export default GlobalStyle