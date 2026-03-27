'use client';

import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Slider,
    TextField,
    Stack,
    Button,
    Paper,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import {
    Calculator,
    ArrowLeft,
    TrendingUp,
    PieChart,
    Calendar,
    IndianRupee,
    ChevronDown,
    User,
    Home as HomeIcon,
    CreditCard,
    Coins,
    ArrowLeftRight,
    Layers,
    Zap
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LoanRequirement } from '@/components/loan-requirement';


export default function EMICalculator() {
    const [selectedLoan, setSelectedLoan] = useState('personal');
    const [amount, setAmount] = useState(300000);
    const [rate, setRate] = useState(10.5);
    const [tenure, setTenure] = useState(24); // Months

    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [schedule, setSchedule] = useState([]);

    const calculateEMI = () => {
        const principal = amount;
        const monthlyRate = rate / (12 * 100);
        const numberOfMonths = tenure;

        if (principal > 0 && numberOfMonths > 0) {
            let calculatedEmi = 0;
            if (rate > 0) {
                const emiValue =
                    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
                    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
                calculatedEmi = Math.round(emiValue);
            } else {
                calculatedEmi = Math.round(principal / numberOfMonths);
            }

            setEmi(calculatedEmi);
            const totalAmt = calculatedEmi * numberOfMonths;
            setTotalAmount(totalAmt);
            setTotalInterest(Math.max(0, totalAmt - principal));

            // Generate Schedule
            const tempSchedule = [];
            let remainingBalance = principal;
            for (let i = 1; i <= numberOfMonths; i++) {
                let interest = rate > 0 ? remainingBalance * monthlyRate : 0;
                let princ = calculatedEmi - interest;

                // Adjust last month
                if (i === numberOfMonths) {
                    princ = remainingBalance;
                    interest = calculatedEmi - princ;
                }

                remainingBalance -= princ;
                tempSchedule.push({
                    month: i,
                    emi: calculatedEmi,
                    principal: Math.round(princ),
                    interest: Math.round(interest),
                    balance: Math.max(0, Math.round(remainingBalance))
                });
            }
            setSchedule(tempSchedule);
        } else {
            setEmi(0);
            setTotalAmount(principal);
            setTotalInterest(0);
            setSchedule([]);
        }
    };

    useEffect(() => {
        calculateEMI();
    }, [amount, rate, tenure]);

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    const principalPercent = totalAmount > 0 ? (amount / totalAmount) * 100 : 0;

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
            <Header />

            <Box sx={{ py: 6, bgcolor: 'primary.main', color: 'white' }}>
                <Container maxWidth="lg">
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Button
                            component={Link}
                            href="/"
                            startIcon={<ArrowLeft size={20} />}
                            sx={{ color: 'white', textTransform: 'none' }}
                        >
                            Back to Home
                        </Button>
                    </Stack>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                        EMI Calculator
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600 }}>
                        Calculate your EMI and plan your finances with our easy-to-use tool.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -4, mb: 4 }}>
                <Grid container spacing={4} alignItems="flex-start">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack spacing={3}>
                            <Card sx={{ borderRadius: 4, p: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <LoanRequirement selectedLoan={selectedLoan} onLoanChange={setSelectedLoan} />
                            </Card>

                            <Card sx={{ borderRadius: 4, p: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <Stack spacing={2.5}>
                                    <Box>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                                            <Typography variant="body2" sx={{ fontWeight: '600', color: 'text.primary' }}>
                                                Loan Amount
                                            </Typography>
                                            <TextField
                                                size="small"
                                                value={amount}
                                                onChange={(e) => setAmount(Number(e.target.value.replace(/[^0-9]/g, '')))}
                                                sx={{ width: 150 }}
                                            />
                                        </Stack>
                                        <Slider
                                            value={amount}
                                            min={10000}
                                            max={10000000}
                                            step={10000}
                                            onChange={(e, val) => setAmount(val)}
                                            sx={{ height: 6 }}
                                        />
                                        <Stack direction="row" justifyContent="space-between" sx={{ mt: 0.5 }}>
                                            <Typography variant="caption" color="text.secondary">₹10K</Typography>
                                            <Typography variant="caption" color="text.secondary">₹1Cr</Typography>
                                        </Stack>
                                    </Box>

                                    <Box>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                                            <Typography variant="body2" sx={{ fontWeight: '600', color: 'text.primary' }}>
                                                Rate of Interest (%)
                                            </Typography>
                                            <TextField
                                                size="small"
                                                value={rate}
                                                onChange={(e) => setRate(Number(e.target.value))}
                                                sx={{ width: 100 }}
                                            />
                                        </Stack>
                                        <Slider
                                            value={rate}
                                            min={5}
                                            max={25}
                                            step={0.1}
                                            onChange={(e, val) => setRate(val)}
                                            sx={{ height: 6, color: '#448AFF' }}
                                        />
                                        <Stack direction="row" justifyContent="space-between" sx={{ mt: 0.5 }}>
                                            <Typography variant="caption" color="text.secondary">5%</Typography>
                                            <Typography variant="caption" color="text.secondary">25%</Typography>
                                        </Stack>
                                    </Box>

                                    <Box>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                                            <Typography variant="subtitle1" sx={{ fontWeight: '600', color: 'text.primary' }}>
                                                Loan Tenure (Months)
                                            </Typography>
                                            <TextField
                                                size="small"
                                                value={tenure}
                                                onChange={(e) => setTenure(Number(e.target.value))}
                                                sx={{ width: 100 }}
                                            />
                                        </Stack>
                                        <Slider
                                            value={tenure}
                                            min={6}
                                            max={120}
                                            onChange={(e, val) => setTenure(val)}
                                            sx={{ height: 6, color: '#FF7043' }}
                                        />
                                        <Stack direction="row" justifyContent="space-between" sx={{ mt: 0.5 }}>
                                            <Typography variant="caption" color="text.secondary">6 months</Typography>
                                            <Typography variant="caption" color="text.secondary">10 years</Typography>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack spacing={2}>
                            <Card sx={{
                                borderRadius: 4,
                                background: 'linear-gradient(135deg, #1A73E8 0%, #00C853 100%)',
                                color: 'white',
                                p: 3,
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2, opacity: 0.9 }}>
                                    <TrendingUp size={20} />
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>
                                        Your EMI Breakdown
                                    </Typography>
                                </Stack>

                                <Box sx={{
                                    textAlign: 'center',
                                    py: 4,
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    borderRadius: 3,
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    mb: 4
                                }}>
                                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>Monthly EMI</Typography>
                                    <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>{formatCurrency(emi)}</Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: 'white',
                                            color: '#1A73E8',
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: 2,
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                                        }}
                                    >
                                        Apply Now
                                    </Button>
                                </Box>

                                <Stack spacing={3}>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1.5 }}>
                                            <IndianRupee size={20} />
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" sx={{ opacity: 0.8, display: 'block' }}>Total Interest Payable</Typography>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{formatCurrency(totalInterest)}</Typography>
                                        </Box>
                                    </Stack>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1.5 }}>
                                            <Calculator size={20} />
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" sx={{ opacity: 0.8, display: 'block' }}>Total Amount Payable</Typography>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{formatCurrency(totalAmount)}</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Card>

                            <Card sx={{ borderRadius: 4, p: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>Payment Breakdown</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                                    <Box sx={{ position: 'relative', width: 220, height: 220 }}>
                                        <svg width="220" height="220" viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r="50" fill="none" stroke="#00C853" strokeWidth="12" />
                                            <circle
                                                cx="60" cy="60" r="50" fill="none" stroke="#1A73E8" strokeWidth="12"
                                                strokeDasharray={`${(amount / totalAmount) * 314} 314`}
                                                transform="rotate(-90 60 60)"
                                            />
                                        </svg>
                                        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                                                {principalPercent.toFixed(1)}%
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: '600' }}>
                                                Principal
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            p: 2,
                                            bgcolor: 'rgba(26, 115, 232, 0.04)',
                                            borderRadius: 3,
                                            border: '1px solid rgba(26, 115, 232, 0.08)'
                                        }}>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Box sx={{ width: 12, height: 12, bgcolor: '#1A73E8', borderRadius: '50%' }} />
                                                <Typography variant="body2" sx={{ fontWeight: '600' }}>Principal Amount</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{formatCurrency(amount)}</Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            p: 2,
                                            bgcolor: 'rgba(0, 200, 83, 0.04)',
                                            borderRadius: 3,
                                            border: '1px solid rgba(0, 200, 83, 0.08)'
                                        }}>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Box sx={{ width: 12, height: 12, bgcolor: '#00C853', borderRadius: '50%' }} />
                                                <Typography variant="body2" sx={{ fontWeight: '600' }}>Total Interest</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{formatCurrency(totalInterest)}</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Detailed Repayment Plan Section */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>Detailed Repayment Plan</Typography>
                    <Accordion sx={{
                        borderRadius: '16px !important',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        overflow: 'hidden',
                        '&:before': { display: 'none' }
                    }}>
                        <AccordionSummary expandIcon={<ChevronDown color="#1A73E8" />}>
                            <Typography sx={{ fontWeight: 'bold', py: 1 }}>Repayment Schedule</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ p: 0 }}>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead sx={{ bgcolor: '#f8fafc' }}>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: 12 }}>MONTH</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: 12 }}>EMI</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: 12 }}>PRINCIPAL</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: 12 }}>INTEREST</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: 12 }}>BALANCE</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {schedule.map((row) => (
                                            <TableRow key={row.month} sx={{ '&:hover': { bgcolor: 'rgba(0,0,0,0.01)' } }}>
                                                <TableCell component="th" scope="row" sx={{ py: 2.5 }}>{row.month}</TableCell>
                                                <TableCell align="center" sx={{ color: 'text.secondary' }}>{formatCurrency(row.emi)}</TableCell>
                                                <TableCell align="center" sx={{ color: '#1A73E8', fontWeight: '500' }}>{formatCurrency(row.principal)}</TableCell>
                                                <TableCell align="center" sx={{ color: '#00C853', fontWeight: '500' }}>{formatCurrency(row.interest)}</TableCell>
                                                <TableCell align="center" sx={{ fontWeight: '600' }}>{formatCurrency(row.balance)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>

            <Footer />
        </Box >
    );
}
