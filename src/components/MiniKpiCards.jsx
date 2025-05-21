// src/components/MiniKpiCards.jsx
import React from 'react';
import { Grid, Paper, Typography, Box, Tooltip } from '@mui/material';
import { People, MonetizationOn, TrendingUp, Description, Folder, SupportAgent, CheckCircle, AssignmentTurnedIn } from '@mui/icons-material';

const data = [
  { title: 'Customers', value: '1,485', pct: '+4.6%', icon: <People />, color: '#2196f3', bg: ['#e3f2fd', '#bbdefb'] },
  { title: 'Revenue',   value: '$5,873', pct: '+3.1%', icon: <MonetizationOn />, color: '#4caf50', bg: ['#e8f5e9', '#c8e6c9'] },
  { title: 'Profit',    value: '70%',    pct: '-2.3%', icon: <TrendingUp />, color: '#f44336', bg: ['#ffebee', '#ffcdd2'] },
  { title: 'Invoices',  value: '1,256',  pct: '+6.3%', icon: <Description />, color: '#ff9800', bg: ['#fff3e0', '#ffe0b2'] },
  { title: 'Projects',  value: '32',     pct: '+1.8%', icon: <Folder />, color: '#9c27b0', bg: ['#f3e5f5', '#e1bee7'] },
  { title: 'Tickets',   value: '14',     pct: '-0.7%', icon: <SupportAgent />, color: '#00bcd4', bg: ['#e0f7fa', '#b2ebf2'] },
  { title: 'Checked Projects', value: '18', pct: '+2.2%', icon: <CheckCircle />, color: '#43a047', bg: ['#e8f5e9', '#a5d6a7'] },
  { title: 'Resolved Tickets', value: '9', pct: '+1.1%', icon: <AssignmentTurnedIn />, color: '#1976d2', bg: ['#e3f2fd', '#90caf9'] },
];

const MiniKpiCards = () => (
  <Grid container spacing={3} mt={1} justifyContent="center">
    {data.map((d, i) => (
      <Grid item xs={12} sm={6} md={3} lg={2} key={i}>
        <Paper
          elevation={4}
          sx={{
            p: 2.5,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            background: `linear-gradient(120deg, ${d.bg[0]}, ${d.bg[1]})`,
            boxShadow: '0 4px 24px 0 rgba(33,150,243,0.07)',
            transition: 'transform 0.18s, box-shadow 0.18s',
            '&:hover': {
              transform: 'translateY(-6px) scale(1.03)',
              boxShadow: `0 8px 32px 0 ${d.color}33`,
            },
          }}
        >
          <Box
            sx={{
              background: `linear-gradient(135deg, ${d.color} 60%, #fff 100%)`,
              borderRadius: '50%',
              p: 1.3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 2px 8px 0 ${d.color}22`,
              minWidth: 48,
              minHeight: 48,
              color: '#fff',
              fontSize: 28,
            }}
          >
            {d.icon}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" fontWeight={700} color="text.secondary" sx={{ letterSpacing: 0.5 }}>
              {d.title}
            </Typography>
            <Typography variant="h5" fontWeight={800} sx={{ color: d.color, mb: 0.2 }}>
              {d.value}
            </Typography>
            <Tooltip title={d.pct.startsWith('+') ? 'Growth' : 'Decline'}>
              <Typography
                variant="caption"
                fontWeight={600}
                sx={{
                  color: d.pct.startsWith('+') ? 'success.main' : 'error.main',
                  background: d.pct.startsWith('+') ? '#e8f5e9' : '#ffebee',
                  px: 1,
                  borderRadius: 1,
                  fontSize: 13,
                }}
              >
                {d.pct} than last
              </Typography>
            </Tooltip>
          </Box>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

export default MiniKpiCards;
