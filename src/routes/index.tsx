import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import Dashboard from '../pages/dashboard/Dashboard';

export default function AppRoutes() {
  const { setDrawerOptions } = useDrawerContext();

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
        element={<Dashboard />}
      />
      <Route
        path='*'
        element={<Navigate to='/pagina-inicial' />}
      />
    </Routes>
  );
}
