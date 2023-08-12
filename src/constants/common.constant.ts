import { GridColDef } from '@mui/x-data-grid';

const basePath = `${
  process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : ''
}/icons/`;

export const icons = {
  logoIcon: `${basePath}`,
};

export const favIcons = `${process.env.REACT_APP_BASE_URL}/favicons`;

export const enum ApiVersions {
  V1 = 'V1',
  MOCK = 'MOCK',
}

export const enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
export const token = 'token';

export const columns: GridColDef[] = [
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
