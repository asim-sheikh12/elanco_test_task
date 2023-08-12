import { styled } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IApplicationDetails, IResourceDetails } from '../../interfaces';

interface IProps {
  data: IApplicationDetails[] | IResourceDetails[];
  columns: GridColDef[];
}

export const CustomDetailTable = ({ data, columns }: IProps) => {
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    '.MuiDataGrid-columnHeader': {
      background: '#0067b1',
      color: '#ffffff',
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-cell:hover': {
      backgroundColor: theme.palette.grey[200],
      cursor: 'pointer',
    },
  }));

  const rows = [...data];
  for (let i = 0; i < rows.length; i++) {
    rows[i].id = i + 1;
  }
  return (
    <div style={{ height: 650, width: '100%' }}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        autoHeight
      />
    </div>
  );
};
