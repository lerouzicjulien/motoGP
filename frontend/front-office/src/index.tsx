import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import TabsContextProvider from './contexts/Tabs';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TabsContextProvider>
    <App />
  </TabsContextProvider>
);
