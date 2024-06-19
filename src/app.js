import React, { useEffect } from 'react';

//** React Google Analytics **//
import ReactGA from 'react-ga';
//** ___________________________________________________________ **/

import { createRoot } from 'react-dom/client';
import DjWebsite from './components/DjWebsite';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
/** __________________________________________________________  **/


function App() {

  useEffect(() => {
    ReactGA.initialize('UA-195821893-1')

    // to report page view
    ReactGA.pageview('/');
  }, [])

  return (
    <DjWebsite />
  )
}


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);