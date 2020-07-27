/*eslint-disable*/
import React from "react";
import {
  useTable,
  useFilters,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import classnames from "classnames";
// A great library for fuzzy filtering/sorting items
import matchSorter from "match-sorter";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { Container, Row, Col, FormGroup, Input, Button, Label } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { isThisTypeNode } from "typescript";

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <div style={{}}>
      <FormGroup>
        <Input
          // placeholder={`Search ${count}...`}
          placeholder={`Search...`}
          type="text"
          style={{borderWidth:0, marginBottom:5, padding:0, paddingTop:5, paddingLeft:3, paddingBottom:5, fontSize:'.8rem', backgroundColor:'#F3F2F160'}}
          onChange={(e) => {
            setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
          }}
        />
      </FormGroup>
    </div>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

// Our table component
function Table({ columns, data }) {
  const [numberOfRows, setNumberOfRows] = React.useState({
    value: 10,
    label: "10 rows",
  });
  const [pageSelect, handlePageSelect] = React.useState({
    value: 0,
    label: "Page 1",
  });
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    visibleColumns,
    nextPage,
    pageOptions,
    pageCount,
    previousPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      initialState: { pageSize: 10, pageIndex: 0 },
    },
    useFilters, // useFilters!
    useSortBy,
    usePagination
  );

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  // const firstPageRows = rows.slice(0, 10);
  let pageSelectData = Array.apply(
    null,
    Array(pageOptions.length)
  ).map(function () {});
  let numberOfRowsData = [5, 10, 20, 25, 50, 100];

  return (
    
    <>
      <div className="ReactTable -highlight primary-pagination">
        <div className="pagination-top">
          <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                  <div style={{width:'10%', marginTop:'.7rem', marginRight:'1rem'}}>
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      name="pageSelect"
                      value={pageSelect}
                      onChange={(value) => {
                        gotoPage(value.value);
                        handlePageSelect(value);
                      }}
                      options={pageSelectData.map((prop, key) => {
                        return {
                          value: key,
                          label: "Page " + (key + 1),
                        };
                      })}
                      placeholder="Choose Page"
                    />
                  </div>
                  <div style={{width:'10%', marginTop:'.7rem', marginRight:'1rem'}}>
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      name="numberOfRows"
                      value={numberOfRows}
                      onChange={(value) => {
                        setPageSize(value.value);
                        setNumberOfRows(value);
                      }}
                      options={numberOfRowsData.map((prop) => {
                        return {
                          value: prop,
                          label: prop + " rows",
                        };
                      })}
                      placeholder="Choose Rows"
                    />
                  </div>
              <Button className="btn-round" color="primary" outline onClick={() => previousPage()}
                disabled={!canPreviousPage}>
                <span>Previous</span>
              </Button>
              <Button className="btn-round" color="primary" outline onClick={() => nextPage()}
                disabled={!canNextPage}>
                <span>Next</span>
              </Button>
          </div>
        </div>
        <table {...getTableProps()} className="rt-table" style={{border:'none'}}>
          <thead className="rt-thead -header">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
                {headerGroup.headers.map((column, key) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={classnames("rt-th rt-resizable-header", {
                      "-cursor-pointer": headerGroup.headers.length - 1 !== key,
                      "-sort-asc": column.isSorted && !column.isSortedDesc,
                      "-sort-desc": column.isSorted && column.isSortedDesc,
                    })}
                  >
                    <div className="rt-resizable-header-content">
                      {column.render("Header")}
                    </div>
                    {/* Render the columns filter UI */}
                    <div>
                      { key === 8
                        
                        ? null
                        : column.canFilter
                        ? column.render("Filter")
                        : null}
                    </div>
                  </th>
                  
                ))}
                <div style={{marginRight:'3.35rem', alignItems:'center', position:'absolute', right:-28, top:'5rem'}}>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{fontSize:'.7rem', color:'#707070'}}>
                      <p style={{margin:0, marginRight:14}}>Select All</p>
                    </div>
                    <div style={{marginLeft:14}}>
                    <Input  type="checkbox"/>
                    </div>
                    {/* <p>Select All</p> */}
                    {/* <Input  type="checkbox"/> */}
                  </div>
                </div>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="rt-tbody"style={{ fontFamily:'Rubik'}}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={classnames(
                    "rt-tr",
                    { " -odd": i % 2 === 0 },
                    { " -even": i % 2 === 1 }
                  )}
                  // style={{backgroundColor:'red'}}
                  // onClick={() => warningWithConfirmAndCancelMessage()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="rt-td" style={{height:'3.25rem', borderRightWidth:0, borderTopColor:'#f0f3f7', fontSize:'.8rem'}}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-bottom" style={{paddingBottom:'1rem'}}></div>
      </div>
    </>
  );
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== "number";

export default Table;
