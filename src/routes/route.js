import React, { useContext } from 'react';
import { AppContext } from '../context/context';

// Import Pages View
import Dashboard from '../contents/dashboard/dashboard'
import Anggota from '../contents/anggota/anggota';

export default function Routes() {
  // Context
  const { route } = useContext(AppContext);

  const renderPage = () => {
    switch (route) {
      case 'dashboard':
        return <Dashboard />;
      case 'anggota':
        return <Anggota />;
      default:
        return <Dashboard />;
    }
  };
  //    case "admin":
  //      return userLoged?.USER_ROLE === "SUPERADMIN" ? <AdminDashboard /> : <ForbiddenPage />;

  return <>{renderPage()}</>;
}