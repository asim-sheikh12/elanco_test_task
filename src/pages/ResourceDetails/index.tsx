/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getResourceDetails } from '../../services';
import { GridColDef } from '@mui/x-data-grid';
import { IResourceDetails } from '../../interfaces';
import { CustomDetailTable } from '../../layouts';
const ResourceDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState<IResourceDetails[]>([]);
  const fetchResourceDetails = async () => {
    const result = await getResourceDetails(name!);
    setData(result);
  };
  useEffect(() => {
    fetchResourceDetails();
  }, [name]);
  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'ConsumedQuantity',
      headerName: 'Consumed \n Quantity',
      width: 150,
    },
    { field: 'Cost', headerName: 'Cost', width: 110 },
    {
      field: 'Date',
      headerName: 'Date',
      type: 'number',
      width: 120,
      sortable: true,
    },
    {
      field: 'InstanceId',
      headerName: 'Instance Id',
      sortable: true,
      width: 180,
    },
    {
      field: 'MeterCategory',
      headerName: 'Meter Category',
      sortable: true,
      width: 130,
    },
    {
      field: 'ResourceGroup',
      headerName: 'Resource Group',
      sortable: true,
      width: 160,
    },
    {
      field: 'ResourceLocation',
      headerName: 'Resource Location',
      sortable: true,
      width: 160,
    },

    {
      field: 'UnitOfMeasure',
      headerName: 'Unit Of Measure',
      sortable: true,
      width: 160,
    },
    {
      field: 'Location',
      headerName: 'Location',
      sortable: true,
      width: 110,
    },
    {
      field: 'ServiceName',
      headerName: 'Service Name',
      sortable: true,
      width: 120,
    },
  ];
  return <CustomDetailTable data={data} columns={columns} />;
};

export default ResourceDetails;
