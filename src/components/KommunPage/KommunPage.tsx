import React, { useMemo } from 'react';
import './KommunPage.scss';

import MaterialReactTable, { MRT_Cell, MRT_ColumnDef, MRT_Row, MRT_TableInstance } from 'material-react-table';
import { Box, Stack } from '@mui/material';
import { data } from '../../api/makeData';
import { Person } from '../../types/Person';

export const KommunPage: React.FC = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: 'Namn',
        accessorKey: 'namn',
        enableGrouping: false, //do not let this column be grouped
      },
      {
        header: 'Grupp',
        accessorKey: 'grupp',
        GroupedCell: ({ cell }: { row: MRT_Row<Person>, cell: MRT_Cell<Person> }) => (
          <>
            Grupp {cell.getValue<string>()}
          </>
        ),
      },
      {
        header: 'Team',
        accessorKey: 'team',
        GroupedCell: ({ cell }: { row: MRT_Row<Person>, cell: MRT_Cell<Person> }) => (
          <>
            Team {cell.getValue<string>()}
          </>
        ),
      },
      {
        header: 'Tjänstegrad',
        accessorKey: 'tjänstegrad',
      },
      {
        header: 'Tjänstetyp',
        accessorKey: 'tjänstetyp',
      },
      {
        header: 'Undantagsregler',
        accessorKey: 'undantagsregler',
      },
      {
        header: 'Delegeringar',
        accessorKey: 'delegeringar',
        Cell: ({ cell }: { cell: MRT_Cell<Person> }) => (
          <>
            {cell.getValue<string[]>().map(value => (
              <Box
                sx={{ display: 'inline', marginLeft: 1, backgroundColor: '#0B567114', borderRadius: 8 }}
              >
                {value}
              </Box>
            ))}
          </>
        ),
        GroupedCell: ({ cell, row }: { row: MRT_Row<Person>, cell: MRT_Cell<Person> }) => (
          <Box sx={{ color: 'primary.main' }}>
            <strong>{cell.getValue<string[]>().join(',')}s </strong> ({row.subRows?.length})
          </Box>
        ),
      },
    ],
    [],
  );

  return (
    <div className="kommun-page">
      <MaterialReactTable
        columns={columns}
        data={data}
        enableGrouping
        enableStickyHeader
        enableStickyFooter
        initialState={{
          density: 'compact',
          expanded: true, //expand all groups by default
          grouping: ['grupp', 'team'], //an array of columns to group by by default (can be multiple)
          pagination: { pageIndex: 0, pageSize: 30 },
          sorting: [{ id: 'namn', desc: false }], //sort by state by default
        }}
        muiToolbarAlertBannerChipProps={{ color: 'primary' }}
        muiTableContainerProps={{ sx: { maxHeight: 700 } }}
      />
    </div>
  );
};
