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
      },
      {
        header: 'Tjänstegrad',
        accessorKey: 'tjänstegrad',
        enableGrouping: false,
      },
      {
        header: 'Tjänstetyp',
        accessorKey: 'tjänstetyp',
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
        data={data}
        enableGrouping
        enableStickyHeader
        enableStickyFooter
        initialState={{
          density: 'compact',
          expanded: true, //expand all groups by default
          grouping: ['grupp', 'team'], //an array of columns to group by by default (can be multiple)
          pagination: { pageIndex: 0, pageSize: 100 },
          sorting: [{ id: 'namn', desc: false }], //sort by name by default
        }}
      />
    </div>
  );
};
