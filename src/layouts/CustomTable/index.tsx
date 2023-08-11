import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IApplication } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import { TablePagination } from '@mui/material';
import { URL } from '../../constants';

function createData(id: number, name: string) {
  return {
    id,
    name,
  };
}

function Row(props: { row: ReturnType<typeof createData>; page: string }) {
  const { row, page } = props;
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <TableRow
        sx={{ '& > *': { borderBottom: 'unset' } }}
        style={{ cursor: 'pointer' }}
        onClick={() =>
          page === URL.Applications
            ? navigate(`${URL.ApplicationDetails}/${row.name}`)
            : navigate(`${URL.Resources}/${row.name}`)
        }
      >
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="left">{row.name?.toUpperCase()}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}
interface IProps {
  data: IApplication[];
  heading: string;
  page: string;
}
export const CustomTable = ({ data, heading, page }: IProps) => {
  const rows = data?.map((name, index) => createData(index + 1, `${name}`));
  const [pageNo, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div style={{ width: '250%', margin: '8%' }}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>S.NO</TableCell>
              <TableCell align="left">{heading}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(pageNo * rowsPerPage, pageNo * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row key={row.id} row={row} page={page} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows?.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={pageNo}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  );
};
