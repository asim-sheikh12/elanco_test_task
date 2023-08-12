/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IApplication, SetState } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  InputAdornment,
  SvgIcon,
  TablePagination,
  TextField,
} from '@mui/material';
import { URL } from '../../constants';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { capitalize } from '../../shared';
import SearchIcon from '@mui/icons-material/Search';

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
        hover
        sx={{ '& > *': { fontWeight: 600 } }}
        style={{ cursor: 'pointer' }}
      >
        <TableCell
          sx={{ fontWeight: 600 }}
          component="th"
          scope="row"
          align="center"
          style={{ minWidth: 150 }}
        >
          {row.id}
        </TableCell>
        <TableCell
          sx={{ fontWeight: 600 }}
          style={{ minWidth: 300 }}
          align="left"
        >
          {capitalize(row.name)}
        </TableCell>
        <TableCell
          sx={{ fontWeight: 600 }}
          align="left"
          style={{ minWidth: 100 }}
        >
          <VisibilityOutlinedIcon
            onClick={() =>
              page === URL.Applications
                ? navigate(`${URL.ApplicationDetails}/${row.name}`)
                : navigate(`${URL.Resources}/${row.name}`)
            }
          />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
interface IProps {
  data: IApplication[];
  filterData: IApplication[];
  heading: string;
  page: string;
  setData: SetState<IApplication[]>;
}
export const CustomTable = ({
  data,
  heading,
  page,
  filterData,
  setData,
}: IProps) => {
  const rows = data?.map((name, index) => createData(index + 1, `${name}`));
  const [pageNo, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSearch = (value: string) => {
    const query = value?.trim();
    if (query.length >= 1) {
      const filterSuggestions = data?.filter((application: any) =>
        application?.toLowerCase().startsWith(query.toLowerCase())
      );
      setData(filterSuggestions);
    } else {
      setData(filterData);
    }
  };
  return (
    <div style={{ padding: '1% 20%' }}>
      <TableContainer component={Paper}>
        <Table
          style={{ height: '100%', minWidth: '100%' }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow sx={{ background: '#0067b1' }}>
              <TableCell>
                <Box>
                  <TextField
                    sx={{ background: 'white', marginY: 0.5 }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleSearch(e.target.value)
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon color="action" fontSize="small">
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Search"
                    variant="outlined"
                  />
                </Box>
              </TableCell>
              <TableCell
                sx={{ color: 'white', fontWeight: 600, fontSize: 18 }}
                align="left"
              >
                {heading}
              </TableCell>
              <TableCell />
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
