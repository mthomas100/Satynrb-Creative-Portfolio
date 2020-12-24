import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/frenchfries.woff';
import edo from '../assets/fonts/edo.ttf';
import alfaslab from '../assets/fonts/alfaslab.ttf';
import reenieBeanie from '../assets/fonts/ReenieBeanie-Regular.ttf';
import Montserrat from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }
  @font-face {
    font-family: alfaslab;
    src: url(${alfaslab});
  }
  @font-face {
    font-family: Edo;
    src: url(${edo});
  }
  @font-face {
    font-family: ReenieBeanie;
    src: url(${reenieBeanie});
  }
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat});
  }
  html {
    font-family: edo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--blue);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
