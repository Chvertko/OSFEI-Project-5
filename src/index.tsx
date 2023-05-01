import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './styles/mainTheme';
import { Provider } from 'react-redux';
import { configureAppStore } from './redux/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = configureAppStore()
root.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);

