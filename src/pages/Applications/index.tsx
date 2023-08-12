import * as React from 'react';
import { getApplicationData } from '../../services';
import { IApplication } from '../../interfaces';
import { CustomTable } from '../../components';
import { URL } from '../../constants';

export const Applications = () => {
  const [data, setData] = React.useState<IApplication[]>([]);
  const [filterData, setFilterData] = React.useState<IApplication[]>([]);
  const fetchApplications = async () => {
    const result = await getApplicationData();
    if (result) {
      setData(result);
      setFilterData(result);
    }
  };
  React.useEffect(() => {
    fetchApplications();
  }, []);
  return (
    <CustomTable
      data={data}
      heading={'Applications'}
      page={URL.Applications}
      filterData={filterData}
      setData={setData}
    />
  );
};
