import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import Main from './Main';

injectTapEventPlugin();

render(<Main />, document.getElementById('app'));
