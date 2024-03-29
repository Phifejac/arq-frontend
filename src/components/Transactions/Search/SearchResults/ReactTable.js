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
import { Container, Row, Col, FormGroup, Input } from "reactstrap";

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <FormGroup>
      <Input
        style={{backgroundColor:'#202225', borderWidth:0, marginLeft:'-.25rem'}}
        placeholder={`Search ${count} records...`}
        type="text"
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
      />
    </FormGroup>
  );
}

function styleFn(provided, state) {
  return { ...provided, color: state.isFocused ? 'blue' : 'red' };
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

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted grey',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    isSelected: () => ({
      // none of react-select's styles are passed to <Control />
    color:'white'
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
  return (

    <>
      <div className="ReactTable -striped -highlight primary-pagination">
        <div className="pagination-top">
          <div className='ml-auto d-flex justify-content-end'>
                    <Select
                      className="react-select select-table"
                      classNamePrefix="react-select"
                      name="numberOfRows"
                      value={numberOfRows}
                      styles={customStyles}
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
                    />
                    <Select
                      className="react-select select-table"
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

            <a disabled={!canPreviousPage} onClick={() => previousPage()}>
              <i className={!canPreviousPage ? 'fa fa-chevron-left fa-2x tablenavbutton-disabled' : 'fas fa-chevron-left fa-2x tablenavbutton'} />
            </a>
            <a disabled={!canNextPage} onClick={() => nextPage()}>
              <i className={!canNextPage ? 'fa fa-chevron-right fa-2x tablenavbutton-disabled' : 'fas fa-chevron-right fa-2x tablenavbutton'} />
            </a>
              
          </div>
        </div>
        <div style={{border:'solid 1px', marginLeft:'-1rem', padding:'1rem', paddingTop:'0rem', minHeight:'35rem', marginTop:'1rem', borderRadius:'1rem', marginBottom:'2rem'}}>
        <table {...getTableProps()} className="rt-table" style={{borderWidth:0, paddingTop:'1rem'}}>
          <div className='todaystable-header card-shadow'>
            <thead className="rt-thead -header">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr text-white" style={{borderBottomColor:'white', borderBottom:'transparent .5px'}}>
                  {headerGroup.headers.map((column, key) => (
                    <th style={{borderWidth:0}}
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
                      {/* <div>
                        {headerGroup.headers.length - 1 === key
                          ? null
                          : column.canFilter
                          ? column.render("Filter")
                          : null}
                      </div> */}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          </div>
        
          
          <tbody {...getTableBodyProps()} className="rt-tbody text-white">
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={classnames(
                    "rt-tr grow-small",
                    { " -odd": i % 2 === 0 },
                    { " -even": i % 2 === 1 }
                  )}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="rt-td text-white" style={{borderWidth:0}}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        
        {/* {data && */}
            <div style={{display:'flex', flexDirection:'column', minHeight:'30rem'}} className='justify-content-center align-items-center'>
            {/* <div> */}
              <i className="fa fa-calendar-times-o" style={{fontSize:'6em', color:'#27292d', marginBottom:'.5rem'}}/>
              {/* <img src={require("../../../../assets/img/calendar.png")} style={{width:'7rem', marginBottom:'0rem'}}></img> */}
              <h5 style={{color:'#27292d', fontWeight:'600'}}>No date input</h5>
            {/* </div> */}
          </div>
       {/* } */}
          
      </div>
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
