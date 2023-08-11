import * as React from 'react';
import { getApplicationData } from '../../services';
import { IApplication } from '../../interfaces';
import { CustomTable } from '../../layouts';
import { URL } from '../../constants';

export const Applications = () => {
  const [data, setData] = React.useState<IApplication[]>([]);
  const fetchApplications = async () => {
    const result = await getApplicationData();
    setData(result);
  };
  React.useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <CustomTable data={data} heading={'Application'} page={URL.Applications} />
  );
};
