import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { AppThemeProvider } from './shared/contexts';
import SideBar from './shared/components/side_bar/SideBar';

export default function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <SideBar>
          <AppRoutes />
        </SideBar>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
