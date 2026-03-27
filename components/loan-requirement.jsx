'use client';

import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Button
} from '@mui/material';
import {
    User,
    Home as HomeIcon,
    CreditCard,
    Coins,
    ArrowLeftRight,
    Layers
} from 'lucide-react';

const loanTypes = [
    { id: 'personal', name: 'Personal Loan', icon: <User size={24} /> },
    { id: 'home', name: 'Home Loan', icon: <HomeIcon size={24} /> },
    { id: 'credit', name: 'Credit Card Loan', icon: <CreditCard size={24} /> },
    { id: 'gold', name: 'Gold Loan', icon: <Coins size={24} /> },
    { id: 'transfer', name: 'Loan Transfer', icon: <ArrowLeftRight size={24} /> },
    { id: 'debt', name: 'Debt Consolidation', icon: <Layers size={24} /> },
];

export function LoanRequirement({ selectedLoan, onLoanChange }) {
    return (
        <Box sx={{ mb: 0 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>Loan Requirement</Typography>
            <Grid container spacing={1.5}>
                {loanTypes.map((type) => (
                    <Grid size={{ xs: 4, sm: 4, md: 2 }} key={type.id}>
                        <Button
                            fullWidth
                            onClick={() => onLoanChange(type.id)}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0.5,
                                p: 1,
                                borderRadius: 1.5,
                                border: '1px solid',
                                borderColor: selectedLoan === type.id ? 'primary.main' : 'rgba(0,0,0,0.05)',
                                bgcolor: selectedLoan === type.id ? 'rgba(97, 199, 104, 0.08)' : 'rgba(0,0,0,0.02)',
                                color: selectedLoan === type.id ? 'primary.main' : 'text.secondary',
                                textTransform: 'none',
                                minWidth: 0,
                                '&:hover': {
                                    bgcolor: selectedLoan === type.id ? 'rgba(97, 199, 104, 0.12)' : 'rgba(0,0,0,0.05)',
                                }
                            }}
                        >
                            <Box sx={{
                                color: selectedLoan === type.id ? 'primary.main' : 'text.secondary',
                                p: 0,
                                display: 'flex'
                            }}>
                                {React.cloneElement(type.icon, { size: 18 })}
                            </Box>
                            <Typography variant="caption" sx={{ fontWeight: '600', textAlign: 'center', fontSize: '0.65rem' }}>
                                {type.name}
                            </Typography>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
