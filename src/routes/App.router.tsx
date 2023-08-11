import { useRoutes } from 'react-router-dom';

import { Applications } from '../pages/Applications';
import ApplicationDetails from '../pages/ApplicationDetails';
import { Resources } from '../pages/Resources';
import ResourceDetails from '../pages/ResourceDetails';
import { DashboardLayout } from '../pages/Layout/DashboardLayout';
import { URL } from '../constants';

export default function Router() {
  const element = useRoutes([
    {
      path: URL.Applications,
      element: <Applications />,
    },
    {
      path: `${URL.ApplicationDetails}/:name`,
      element: <ApplicationDetails />,
    },
    {
      path: URL.Resources,
      element: <Resources />,
    },
    {
      path: `${URL.Resources}/:name`,
      element: <ResourceDetails />,
    },
  ]);
  return (
    <DashboardLayout>
      <div style={{ marginTop: 65 }}>{element}</div>
    </DashboardLayout>
  );
}
