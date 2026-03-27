'use client';

import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack
} from '@mui/material';

export function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Box sx={{
              width: 32,
              height: 32,
              bgcolor: 'primary.main',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>L</Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
              LoanGrid
            </Typography>
          </Link>

          {/* Navigation */}
          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="#products" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'text.primary' } }}>
                Loan Products
              </Typography>
            </Link>
            <Link href="#offers" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'text.primary' } }}>
                Special Offers
              </Typography>
            </Link>
            <Link href="/emi-calculator" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'text.primary' } }}>
                EMI Calculator
              </Typography>
            </Link>
          </Stack>

          {/* User Actions */}
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="inherit" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
              My Profile
            </Button>
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
