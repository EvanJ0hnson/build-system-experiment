import React from "react";
import ReactDOM from 'react-dom';

import { Card } from './card';

const ROOT_ELEMENT_ID = 'root';
const rootElement = document.getElementById(ROOT_ELEMENT_ID);

const App = () => {
  return (
    <React.StrictMode>
      <h1>Hello World</h1>

      <Card title="Card #1" />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, rootElement);

/** @desc Enable basic HMR */
if (module.hot) module.hot.accept();
