import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { brokders } from "../models/Funds";
import LinearProgress from '@material-ui/core/LinearProgress';
import ReactDOM from "react-dom";

const columns = [
  { id: "unique_id", label: "ID", minWidth: 170 },
  {
    id: "name_th",
    label: "TH",
    minWidth: 170,
    align: "right",
  },
  {
    id: "name_en",
    label: "EN",
    minWidth: 170,
    align: "right",
  },
  {
    id: "last_upd_date",
    label: "last update",
    minWidth: 170,
    align: "right",
  },
];

const useStyles = makeStyles((theme) => ({
  load: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
}));


function BrokersTable() {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState();

  useEffect(() => {

    brokders().then(res => {
      setData(res);
    });

  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!data) return <div className={classes.load}>
    <LinearProgress color="secondary" />
  </div>

  return (

    <React.Suspense>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.unique_id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            { value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </React.Suspense>


  );
}

ReactDOM.render(
  <React.Suspense>
    <BrokersTable />
  </React.Suspense>,
  document.getElementById('table_view')
)
