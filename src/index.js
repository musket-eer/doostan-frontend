import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes/appRoutes';
import { AppProviders } from './contexts'; // Wrap with all context providers

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppProviders>
            <AppRoutes />
        </AppProviders>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
