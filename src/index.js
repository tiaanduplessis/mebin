import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

import registerServiceWorker from './registerServiceWorker'

// HACK: - https://github.com/mui-org/material-ui/issues/11843
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: false,
  productionPrefix: 'p',
});

const Fix = () => <JssProvider generateClassName={generateClassName}><App/></JssProvider>

ReactDOM.render(<Fix />, document.getElementById('root'));
registerServiceWorker();