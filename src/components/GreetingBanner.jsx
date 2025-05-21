// src/components/GreetingBanner.jsx
import React from 'react';
import { Paper, Typography, Button, Box, Avatar } from '@mui/material';
import { EmojiEmotions } from '@mui/icons-material';

const GreetingBanner = ({ name }) => (
  <Paper
    sx={{
      p: { xs: 2, md: 4 },
      borderRadius: 3,
      background: 'linear-gradient(100deg, #1976d2 0%, #42a5f5 100%)',
      color: '#fff',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 3,
      boxShadow: '0 8px 32px 0 rgba(33,150,243,0.18)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 120,
    }}
  >
    {/* Decorative background icon */}
    <EmojiEmotions
      sx={{
        position: 'absolute',
        right: 24,
        top: 16,
        fontSize: 90,
        color: 'rgba(255,255,255,0.08)',
        display: { xs: 'none', md: 'block' }
      }}
    />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Avatar
        sx={{
          width: 56,
          height: 56,
          bgcolor: 'rgba(255,255,255,0.18)',
          color: '#fff',
          fontWeight: 700,
          fontSize: 28,
          boxShadow: 2,
        }}
      >
        {name?.[0] || 'U'}
      </Avatar>
      <Box>
        <Typography variant="h5" fontWeight={700} sx={{ letterSpacing: 1 }}>
          Hello, {name}
        </Typography>
        <Typography variant="body1" sx={{ mt: 0.5, opacity: 0.92 }}>
          Welcome back! Let’s pick up where you left.
        </Typography>
      </Box>
    </Box>
    <Button
      variant="contained"
      sx={{
        mt: { xs: 2, md: 0 },
        background: 'rgba(255,255,255,0.18)',
        color: '#fff',
        fontWeight: 700,
        borderRadius: 2,
        boxShadow: 1,
        px: 3,
        '&:hover': {
          background: 'rgba(255,255,255,0.28)',
          color: '#fff',
        },
        transition: 'all 0.2s'
      }}
    >
      View Profile
    </Button>
  </Paper>
);

export default GreetingBanner;
