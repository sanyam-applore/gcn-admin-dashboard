import React from 'react';
import styles from './Sellers.module.css';
import { TablePagination } from '@material-ui/core'
import GET from '../../../Requests/GET';
import Seller from './Seller/Seller';
const Sellers = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [itemCount, setItemCount] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const [dropdownFilter, setDropdownFilter] = React.useState('all');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    React.useEffect(() => {
        GET('/sellers/count', localStorage.getItem('JWTTOKEN') || sessionStorage.getItem('JWTTOKEN'))
            .then(res => {
                setItemCount(res)
            });
    }, []);
    React.useEffect(() => {
        let path = `/sellers?_limit=${rowsPerPage}&_start=${page * rowsPerPage}`
        if (dropdownFilter !== 'all') {
            path += `&qaStatus=${dropdownFilter}`
        }
        GET(path, localStorage.getItem('JWTTOKEN') || sessionStorage.getItem('JWTTOKEN'))
            .then(res => {
                setResults(res);
                console.log(res);
            });
    }, [page, rowsPerPage, dropdownFilter]);

    const filteredResults = results.map((m, i) => <Seller key={i} props={m} />)

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.header}>Seller List</div>
                <div className={styles.filters}>
                    <div className={styles.filterSearch}><input type="text" placeholder="Search Users..." /></div>
                    <div className={styles.pagination}>
                        <select className={styles.dropdown} value={dropdownFilter} onChange={(e) => setDropdownFilter(e.target.value)}>
                            <option value="all">All</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                        <TablePagination
                            component="div"
                            count={itemCount}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.tableHeaders}>
                    <div className={styles.th}>User ID</div>
                    <div className={styles.th}>Email</div>
                    <div className={styles.th}>Date of Joining</div>
                    <div className={styles.th}>Name</div>
                </div>
                <div className={styles.resultContainer}>
                    <hr className={styles.singleHR} />
                    {filteredResults}
                </div>
            </div>
        </div>
    );
}

export default Sellers;