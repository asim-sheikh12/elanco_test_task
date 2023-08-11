import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const CustomDetailTable = ({ data, columns }: any) => {
  const rows: any = [...data];
  for (let i = 0; i < rows.length; i++) {
    rows[i].id = i + 1;
    //   for (let ele in rows[i].Tags) {
    //     console.log(
    //       'TAGS:- ',
    //       ele === 'environment' ? rows[i].Tags[ele] : undefined
    //     );
    //   }
  }
  console.log('Rowa:- ', rows);
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};
