import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import storeGenerator from "./store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
const {store, persistor} = storeGenerator()
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
