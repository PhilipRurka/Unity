import clsx from 'clsx';
import React, { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';

import TriangleIcon from '../Icons/TriangleIcon';

/* #region Types */

type TableComponent = FC<TableProps> & {
  Header: FC<HeaderProps>;
  Heading: FC<HeadingProps>;
  Row: FC<RowProps>;
  Content: FC<ContentProps>;
  Data: FC<DataProps>;
};

type HeaderProps = {
  children: ReactNode;
};

type HeadingProps = {
  property?: string;
  children: ReactNode;
};

type RowProps = {
  children: ReactNode;
};

type ContentProps = {
  children: ReactNode;
};

type DataProps = {
  children: ReactNode;
};

type List = Record<string, any>[];

type TableProps = {
  gridCols: string;
  children: ReactNode;
  listForFilter?: List;
  defaultFilterProperty?: string;
  handleFilterUpdateCallback?: (filteredList: List) => void;
};

type TableContextType =
  | undefined
  | {
      gridCols: string;
      filterProperty?: string;
      isFilterDirectionAscend?: boolean;
      handleFilterProperty: (property: string) => void;
    };

type SortByProperty = (property?: string, isAscending?: boolean) => List;

/* #endregion */

/* #region Context */

const TableContext = createContext<TableContextType>(undefined);

const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTable must be used within a TableProvider');
  }
  return context;
};

/* #endregion */

/* #region Main Components */

const Table: TableComponent = ({
  gridCols,
  children,
  defaultFilterProperty,
  handleFilterUpdateCallback,
  listForFilter,
}) => {
  const [filterProperty, setFilterProperty] = useState<string | undefined>(defaultFilterProperty);
  const [isFilterDirectionAscend, setFilterDirectionAscend] = useState<boolean>(!!defaultFilterProperty);

  const sortByProperty: SortByProperty = (propertyParam, isAscendingpParam) => {
    const property = typeof propertyParam === 'undefined' ? filterProperty : propertyParam;
    const isAscending = typeof isAscendingpParam === 'undefined' ? isFilterDirectionAscend : isAscendingpParam;

    if (!listForFilter || !filterProperty || !property) return [];

    const newFilterOrder = [...listForFilter];

    if (isAscending) {
      newFilterOrder.sort((a, b) => {
        if (a[property] === null) return -1;
        if (b[property] === null) return 1;

        if (typeof a[property] === 'string' && typeof b[property] === 'string') {
          return a[property].localeCompare(b[property]);
        }

        if (typeof a[property] === 'number' && typeof b[property] === 'number') {
          return a[property] - b[property];
        }

        if (a[property] instanceof Date && b[property] instanceof Date) {
          return (a[property] as Date).getTime() - (b[property] as Date).getTime();
        }

        return 0;
      });
    } else {
      newFilterOrder.sort((a, b) => {
        if (a[property] === null) return 1;
        if (b[property] === null) return -1;

        if (typeof a[property] === 'string' && typeof b[property] === 'string') {
          return b[property].localeCompare(a[property]);
        }

        if (typeof a[property] === 'number' && typeof b[property] === 'number') {
          return b[property] - a[property];
        }

        if (a[property] instanceof Date && b[property] instanceof Date) {
          return (b[property] as Date).getTime() - (a[property] as Date).getTime();
        }

        return 0;
      });
    }

    return newFilterOrder;
  };

  const handleFilterProperty = (property: string) => {
    if (!defaultFilterProperty || !handleFilterUpdateCallback || !listForFilter) return;

    let newFilterOrder;

    if (filterProperty === property) {
      newFilterOrder = sortByProperty(undefined, !isFilterDirectionAscend);

      setFilterDirectionAscend(!isFilterDirectionAscend);
    } else {
      newFilterOrder = sortByProperty(property, true);
      setFilterDirectionAscend(true);
      setFilterProperty(property);
    }

    handleFilterUpdateCallback(newFilterOrder);
  };

  useEffect(() => {
    if (!handleFilterUpdateCallback || !listForFilter || listForFilter.length === 0) return;

    const newFilterOrder = sortByProperty();

    handleFilterUpdateCallback(newFilterOrder || []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listForFilter]);

  return (
    <TableContext.Provider value={{ gridCols, filterProperty, isFilterDirectionAscend, handleFilterProperty }}>
      <div data-component="Table">{children}</div>
    </TableContext.Provider>
  );
};

/* #endregion */

/* #region Sub Components */

const Header: FC<HeaderProps> = ({ children }) => {
  const { gridCols } = useTable();

  return <div className={clsx('grid gap-12 rounded-md bg-gray-100 p-1', gridCols)}>{children}</div>;
};

const Heading: FC<HeadingProps> = ({ children, property }) => {
  const { filterProperty, handleFilterProperty, isFilterDirectionAscend } = useTable();

  const showTriangle = typeof isFilterDirectionAscend !== 'undefined' && property && property === filterProperty;

  return (
    <div className="flex">
      <div
        className={clsx('flex gap-1 text-sm', property && 'cursor-pointer')}
        onClick={property ? () => handleFilterProperty(property) : undefined}
      >
        {children}
        {showTriangle && (
          <TriangleIcon
            size="3"
            className={clsx('inline transition-transform', !isFilterDirectionAscend && 'rotate-180')}
          />
        )}
      </div>
    </div>
  );
};

const Row: FC<RowProps> = ({ children }) => {
  const { gridCols } = useTable();

  return <div className={clsx('grid gap-12 border-b border-solid border-gray-100 py-4', gridCols)}>{children}</div>;
};

const Content: FC<ContentProps> = ({ children }) => <div className="p-1">{children}</div>;

const Data: FC<DataProps> = ({ children }) => <div className="">{children}</div>;

/* #endregion */

Table.Header = Header;
Table.Heading = Heading;
Table.Row = Row;
Table.Content = Content;
Table.Data = Data;

export default Table;
