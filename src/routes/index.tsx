import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export default function AppRoutes() {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/página-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'star',
        path: '/página-inicial',
        label: 'Cidades',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path='/pagina-inicial'
        element={
          <Button
            variant='contained'
            color='primary'
            onClick={toggleDrawerOpen}
          >
            toggle drawer
          </Button>
        }
      />
      <Route
        path='*'
        element={<Navigate to='/pagina-inicial' />}
      />
    </Routes>
  );
}
