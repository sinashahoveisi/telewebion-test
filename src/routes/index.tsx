import {Route, Routes, Navigate} from 'react-router-dom';
import Main from '@/pages/Main';
import Live from '@/pages/Live';

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/live" element={<Live />} />
        <Route path="*" element={<Navigate to="/live" replace />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
