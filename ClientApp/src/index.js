
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// imports for i18n translations
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
// end i18n

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import './components/NavMenu.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      fr: {
          common: common_fr
      },
  },
});

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
  rootElement);

  // internationalisation
  //
registerServiceWorker();

