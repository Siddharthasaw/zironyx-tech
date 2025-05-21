// src/components/RecentOrdersTable.jsx
import React from 'react';
import {
  Paper,
  Table, TableHead, TableBody, TableRow,
  TableCell, Typography, Box, Avatar, Chip, TextField, IconButton, Tooltip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const orders = [
  { name: 'Elle Amberson',  id: '#Gh3649K', date: '15 Nov, 22', time: '02:45 PM', status: 'Paid' },
  { name: 'Anna Catmire',   id: '#A5647KB', date: '25 Nov, 22', time: '01:24 PM', status: 'Pending' },
  { name: 'Laura Dagson',   id: '#K0093M', date: '26 Nov, 22', time: '12:34 PM', status: 'Paid' },
  { name: 'Rachel Green',   id: '#KMG403', date: '28 Nov, 22', time: '10:27 PM', status: 'Overdue' },
];

const statusColor = {
  Paid:    'success',
  Pending: 'warning',
  Overdue: 'error'
};

const RecentOrdersTable = () => (
  <Paper
    sx={{
      p: { xs: 2, md: 3 },
      borderRadius: 3,
      boxShadow: '0 4px 24px 0 rgba(33,150,243,0.09)',
      background: 'linear-gradient(120deg, #f7faff 80%, #e3e9f7 100%)',
      overflow: 'hidden'
    }}
  >
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h6" fontWeight={700} sx={{ letterSpacing: 1 }}>
        Recent Orders
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <TextField
          size="small"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
            ),
            sx: { borderRadius: 2, background: '#fff' }
          }}
          sx={{ minWidth: 140 }}
        />
        <Tooltip title="More options">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
    <Table size="small" sx={{ background: 'transparent' }}>
      <TableHead>
        <TableRow sx={{ background: 'rgba(33,150,243,0.04)' }}>
          <TableCell sx={{ fontWeight: 700 }}>Customer</TableCell>
          <TableCell sx={{ fontWeight: 700 }}>Order Date</TableCell>
          <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((o, i) => (
          <TableRow
            key={i}
            hover
            sx={{
              transition: 'background 0.18s',
              '&:hover': { background: 'rgba(33,150,243,0.07)' }
            }}
          >
            <TableCell>
              <Box display="flex" alignItems="center" gap={1.5}>
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: 18,
                    boxShadow: 1,
                  }}
                >
                  {o.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" fontWeight={700}>{o.name}</Typography>
                  <Typography variant="caption" color="textSecondary">{o.id}</Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography variant="body2" fontWeight={600}>{o.date}</Typography>
              <Typography variant="caption" color="textSecondary">{o.time}</Typography>
            </TableCell>
            <TableCell>
              <Chip
                label={o.status}
                color={statusColor[o.status]}
                size="small"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  px: 1.2,
                  boxShadow: `0 1px 4px 0 ${
                    statusColor[o.status] === 'success'
                      ? '#43a04733'
                      : statusColor[o.status] === 'warning'
                      ? '#ff980033'
                      : '#e5393533'
                  }`
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default RecentOrdersTable;
