import * as React from 'react';
import { getResourceData } from '../../services';
import { IApplication } from '../../interfaces';
import { CustomTable } from '../../components';

export const Resources = () => {
  const [data, setData] = React.useState<IApplication[]>([]);
  const [filterData, setFilterData] = React.useState<IApplication[]>([]);
  const fetchResources = async () => {
    const result = await getResourceData();
    setData(result);
    setFilterData(result);
  };
  React.useEffect(() => {
    fetchResources();
  }, []);

  return (
    <CustomTable
      data={data}
      heading={'Resources'}
      page={'resources'}
      filterData={filterData}
      setData={setData}
    />
  );
};
