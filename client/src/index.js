import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <App />
        </SimpleReactLightbox>
    </React.StrictMode>
  , document.getElementById('charityFundApp'));
