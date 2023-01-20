import React, { useMemo } from 'react';
import './KommunPage.scss';

import MaterialReactTable, { MRT_Cell, MRT_ColumnDef, MRT_Row, MRT_TableInstance } from 'material-react-table';
import { Box } from '@mui/material';
import { Person } from '../../types/Person';

interface Props {
  persons: Person[],
}

export const KommunPage: React.FC<Props> = ({ persons }) => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: 'Namn',
        accessorKey: 'namn',
        enableGrouping: false,
      },
      {
        header: 'Grupp',
        accessorKey: 'grupp',
        GroupedCell: ({ cell }: { cell: MRT_Cell<Person> }) => (
          <>
            Grupp {cell.getValue<string>()}
          </>
        ),
        enableColumnDragging: false,
      },
      {
        header: 'Team',
        accessorKey: 'team',
        GroupedCell: ({ cell }: { cell: MRT_Cell<Person> }) => {
          const teamName = cell.getValue<string>();
          return (
            <>
              {(teamName) ? `Team ${teamName}` : ''}
            </>
          )
        },
        enableColumnDragging: false,
      },
      {
        header: 'Tjänstegrad',
        accessorKey: 'tjänstegrad',
        enableGrouping: false,
      },
      {
        header: 'Tjänstetyp',
        accessorKey: 'tjänstetyp',
        enableColumnDragging: false,
      },
      {
        header: 'Undantagsregler',
        accessorKey: 'undantagsregler',
        enableGrouping: false,
      },
      {
        header: 'Delegeringar',
        accessorKey: 'delegeringar',
        Cell: ({ cell }: { cell: MRT_Cell<Person> }) => (
          <>
            {cell.getValue<string[]>().map((value) => (
              <Box
                id={value}
                sx={{ display: 'inline', marginLeft: 1, backgroundColor: '#0B567114', borderRadius: 8 }}
              >
                {value}
              </Box>
            ))}
          </>
        ),
        enableGrouping: false,
      },
    ],
    [],
  );

  return (
    <div className="kommun-page">
      <MaterialReactTable
        columns={columns}
        data={persons}
        enableGrouping
        enableStickyHeader
        enableStickyFooter
        enableHiding={false}
        enableFilters={false}
        enableTopToolbar={false}
        initialState={{
          density: 'compact',
          expanded: true,
          grouping: ['grupp', 'team'],
          pagination: { pageIndex: 0, pageSize: 100 },
        }}
        muiTableContainerProps={{ sx: { maxHeight: 2000 } }}
        muiTableHeadRowProps={{ sx: { backgroundColor: '#d9d9d9' } }}
        muiTablePaperProps={{ sx: { boxShadow: 'none' } }}
        muiTableBodyCellProps={{ sx: { fontFamily: ['Nunito', 'sans-serif'], fontWeight: 500 } }}
      />
    </div>
  );
};
