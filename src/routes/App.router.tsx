import { useRoutes } from 'react-router-dom';

import { URL } from '../constants';
import { BackDrop } from '../components';
import {
  ApplicationDetails,
  Applications,
  ResourceDetails,
  Resources,
} from '../pages';

import { DashboardLayout } from '../layouts';

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
    <>
      <BackDrop />
      <DashboardLayout>
        <div
          style={{
            marginTop: 70,
            width: '100%',
          }}
        >
          {element}
        </div>
      </DashboardLayout>
    </>
  );
}
