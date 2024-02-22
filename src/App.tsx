import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import SideBar from './shared/components/side_bar/SideBar';

export default function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <SideBar>
            <AppRoutes />
          </SideBar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}
