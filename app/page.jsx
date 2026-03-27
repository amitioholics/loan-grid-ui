'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Grid,
    Stack,
    Card,
    CardContent,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import {
    ChevronDown,
    CheckCircle2,
    Zap,
    Shield,
    Clock,
    FileText,
    TrendingUp,
    Users,
    ArrowRight,
    Menu as MenuIcon,
    X,
    Calculator
} from 'lucide-react';

const loanProducts = [
    {
        id: 1,
        name: 'Personal Loan',
        amount: '₹10 Lakhs',
        rate: '10.50%',
        tenure: '12-60 months',
        icon: '👤',
        description: 'Quick loans for all your personal needs',
        features: ['Quick approval', 'Minimal docs', 'Flexible repayment'],
    },
    {
        id: 2,
        name: 'Home Loan',
        amount: '₹50 Lakhs',
        rate: '8.50%',
        tenure: '5-20 years',
        icon: '🏠',
        description: 'Build your dream home',
        features: ['Best rates', 'Long tenure', 'Easy process'],
    },
    {
        id: 3,
        name: 'Loan on Credit Card',
        amount: '₹5 Lakhs',
        rate: '12.00%',
        tenure: '12-48 months',
        icon: '💳',
        description: 'Convert credit card limit to loan',
        features: ['Instant approval', 'No extra docs', 'Low interest'],
    },
    {
        id: 4,
        name: 'Gold Loan',
        amount: '₹25 Lakhs',
        rate: '7.50%',
        tenure: '6-36 months',
        icon: '🥇',
        description: 'Unlock the value of your gold',
        features: ['Lowest rates', 'Safe storage', 'Quick disbursal'],
    },
    {
        id: 5,
        name: 'Loan Transfer',
        amount: 'Up to ₹1 Crore',
        rate: 'From 8.25%',
        tenure: 'Flexible',
        icon: '🔄',
        description: 'Transfer existing loans for better rates',
        features: ['Personal Loan Transfer', 'Home Loan Transfer', 'Lower EMI'],
    },
    {
        id: 6,
        name: 'Debt Consolidation',
        amount: '₹50 Lakhs',
        rate: '9.50%',
        tenure: '12-84 months',
        icon: '📊',
        description: 'Combine multiple debts into one easy EMI',
        features: ['Single EMI', 'Reduced interest', 'Better management'],
    },
];

const benefits = [
    {
        icon: <Zap size={32} />,
        title: 'Fastest Approvals',
        description: 'Get approved in minutes, not days',
    },
    {
        icon: <TrendingUp size={32} />,
        title: 'Best Interest Rates',
        description: 'Market-leading rates from 8.50%',
    },
    {
        icon: <FileText size={32} />,
        title: '100% Digital',
        description: 'Fully online, paperless process',
    },
    {
        icon: <Shield size={32} />,
        title: 'Secure & Safe',
        description: 'RBI regulated, data encrypted',
    },
    {
        icon: <Clock size={32} />,
        title: 'Instant Disbursal',
        description: 'Money in 24 hours',
    },
    {
        icon: <Users size={32} />,
        title: '24/7 Support',
        description: 'Always here to help you',
    },
];

const faqs = [
    {
        question: 'What is the minimum age requirement?',
        answer: 'You must be between 18-65 years old to be eligible for a loan from LoanGrid.',
    },
    {
        question: 'Do I need any collateral?',
        answer: 'No, most loans are unsecured. No collateral required for approval.',
    },
    {
        question: 'How long does approval take?',
        answer: 'Approval takes just 5 minutes with our quick verification process.',
    },
    {
        question: 'Is there a prepayment penalty?',
        answer: 'No prepayment penalty. Pay early without any extra charges.',
    },
    {
        question: 'What documents do I need?',
        answer: 'Minimal docs: ID, address proof, income proof, and bank statements.',
    },
    {
        question: 'Can I apply for multiple loans?',
        answer: 'Yes, apply for multiple loans based on your eligibility.',
    },
];

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* Header */}
            <AppBar position="sticky" color="inherit" elevation={1} sx={{ bgcolor: 'white' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Stack direction="row" spacing={1} alignItems="center">
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
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>LoanGrid</Typography>
                        </Stack>

                        {/* Desktop Nav */}
                        <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button href="#loans" color="inherit">Loans</Button>
                            <Button href="#benefits" color="inherit">Why Us</Button>
                            <Button href="#faq" color="inherit">FAQ</Button>
                        </Stack>

                        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="text" color="inherit">Profile</Button>
                            <Button variant="contained" color="primary">Apply Now</Button>
                        </Stack>

                        <IconButton
                            sx={{ display: { md: 'none' } }}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            >
                <Box sx={{ width: 250, p: 2 }}>
                    <Stack direction="row" justifyContent="flex-end">
                        <IconButton onClick={() => setMobileMenuOpen(false)}>
                            <X />
                        </IconButton>
                    </Stack>
                    <List>
                        <ListItem button Component="a" href="#loans" onClick={() => setMobileMenuOpen(false)}>
                            <ListItemText primary="Loans" />
                        </ListItem>
                        <ListItem button Component="a" href="#benefits" onClick={() => setMobileMenuOpen(false)}>
                            <ListItemText primary="Why Us" />
                        </ListItem>
                        <ListItem button Component="a" href="#faq" onClick={() => setMobileMenuOpen(false)}>
                            <ListItemText primary="FAQ" />
                        </ListItem>
                        <ListItem sx={{ mt: 2 }}>
                            <Button fullWidth variant="contained" color="primary">Apply Now</Button>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Hero Section */}
            <Box sx={{
                py: { xs: 8, md: 12 },
                background: (theme) => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: 'white'
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={4}>
                                <Typography variant="h2" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                                    Get Upto 10 Lakhs in Just 5 Minutes
                                </Typography>
                                <Typography variant="h5" sx={{ opacity: 0.9 }}>
                                    Fast, paperless loans with instant approval. No collateral needed.
                                </Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
                                        endIcon={<ArrowRight />}
                                    >
                                        Apply Now
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        sx={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
                                    >
                                        Learn More
                                    </Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 10 }}>
                                    <img src="/images/happy-family.jpg" alt="Happy family" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </Box>
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: -20,
                                    left: -20,
                                    bgcolor: 'white',
                                    p: 2,
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    display: { xs: 'none', sm: 'block' }
                                }}>
                                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold' }}>50,000+</Typography>
                                    <Typography variant="caption" color="text.secondary">Happy Families</Typography>
                                </Box>
                                <Box sx={{
                                    position: 'absolute',
                                    top: -20,
                                    right: -20,
                                    bgcolor: 'white',
                                    p: 2,
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    display: { xs: 'none', sm: 'block' }
                                }}>
                                    <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 'bold' }}>4.9/5</Typography>
                                    <Typography variant="caption" color="text.secondary">Customer Rating</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Loan Products */}
            <Box id="loans" sx={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h3" sx={{ mb: 2 }}>Choose Your Perfect Loan</Typography>
                        <Typography variant="h6" color="text.secondary">Explore our competitive rates and flexible terms</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {loanProducts.map((loan) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={loan.id}>
                                <Card sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h2" sx={{ mb: 2 }}>{loan.icon}</Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>{loan.name}</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{loan.description}</Typography>

                                        <Box sx={{ py: 2, borderY: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                            <Box>
                                                <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block' }}>AMOUNT</Typography>
                                                <Typography variant="h6" color="primary">{loan.amount}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block' }}>RATE</Typography>
                                                <Typography variant="h6" color="secondary">{loan.rate}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block' }}>TENURE</Typography>
                                                <Typography variant="body2">{loan.tenure}</Typography>
                                            </Box>
                                        </Box>

                                        <Stack spacing={1} sx={{ mb: 3 }}>
                                            {loan.features.map((feature, i) => (
                                                <Stack direction="row" spacing={1} key={i}>
                                                    <CheckCircle2 size={16} color="#61C768" />
                                                    <Typography variant="body2" color="text.secondary">{feature}</Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                        <Button fullWidth variant="contained" color="primary">Apply Now</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* EMI Calculator CTA */}
            <Box sx={{ py: 10, bgcolor: 'secondary.light', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                    opacity: 0.1,
                    filter: 'blur(80px)'
                }} />
                <Container maxWidth="lg">
                    <Card sx={{
                        bgcolor: 'white',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        border: '1px solid',
                        borderColor: 'divider'
                    }}>
                        <Grid container>
                            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 8 } }}>
                                <Stack spacing={3}>
                                    <Box sx={{
                                        display: 'inline-flex',
                                        p: 1.5,
                                        bgcolor: 'primary.light',
                                        color: 'primary.main',
                                        borderRadius: 2,
                                        width: 'fit-content'
                                    }}>
                                        <Calculator size={32} />
                                    </Box>
                                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                                        Calculate Your EMI in Seconds
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Planning your finances has never been easier. Use our smart EMI calculator to find the perfect loan structure for your needs.
                                    </Typography>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            href="/emi-calculator"
                                            endIcon={<ArrowRight />}
                                            sx={{
                                                px: 4,
                                                py: 2,
                                                borderRadius: 2,
                                                fontSize: '1.1rem',
                                                textTransform: 'none',
                                                boxShadow: 4
                                            }}
                                        >
                                            Try EMI Calculator
                                        </Button>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid size={{ xs: 12, md: 5 }} sx={{
                                bgcolor: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 4,
                                position: 'relative'
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                                    zIndex: 1
                                }} />
                                <Stack spacing={2} alignItems="center" sx={{ color: 'white', textAlign: 'center', zIndex: 2 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>8.5%</Typography>
                                    <Typography variant="body1" sx={{ opacity: 0.8 }}>Starting Interest Rate</Typography>
                                    <Box sx={{ width: '60%', height: 2, bgcolor: 'rgba(255,255,255,0.3)', my: 2 }} />
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>₹835/mo</Typography>
                                    <Typography variant="body1" sx={{ opacity: 0.8 }}>EMI per ₹1 Lakh</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </Box>

            {/* Benefits */}
            <Box id="benefits" sx={{ py: 10, bgcolor: 'rgba(97, 199, 104, 0.05)' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h3" sx={{ mb: 2 }}>Why Choose LoanGrid?</Typography>
                        <Typography variant="h6" color="text.secondary">Simple, fast, and transparent</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {benefits.map((benefit, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'white', borderRadius: 2, boxShadow: 1, border: 1, borderColor: 'divider' }}>
                                    <Box sx={{
                                        width: 64,
                                        height: 64,
                                        mx: 'auto',
                                        mb: 2,
                                        borderRadius: '50%',
                                        bgcolor: 'primary.light',
                                        color: 'primary.main',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0.8
                                    }}>
                                        {benefit.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>{benefit.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{benefit.description}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* FAQ */}
            <Box id="faq" sx={{ py: 10 }}>
                <Container maxWidth="md">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h3" sx={{ mb: 2 }}>Frequently Asked Questions</Typography>
                    </Box>
                    {faqs.map((faq, i) => (
                        <Accordion key={i} sx={{ mb: 1, boxShadow: 'none', border: 1, borderColor: 'divider', '&:before': { display: 'none' } }}>
                            <AccordionSummary expandIcon={<ChevronDown color="#61C768" />}>
                                <Typography sx={{ fontWeight: '600' }}>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ borderTop: 1, borderColor: 'divider', bgcolor: 'rgba(0,0,0,0.02)' }}>
                                <Typography color="text.secondary">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: 10, background: (theme) => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, color: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>Ready to Get Your Loan?</Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>Join thousands of satisfied customers. Apply now and get instant approval!</Typography>
                    <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'primary.main', p: '12px 40px', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}>
                        Apply Now
                    </Button>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ py: 8, bgcolor: 'secondary.dark', color: 'white' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                <Box sx={{ width: 32, height: 32, bgcolor: 'white', borderRadius: 1, color: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>L</Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>LoanGrid</Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Fast, transparent, and trusted loans for everyone.</Typography>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Products</Typography>
                            <Stack spacing={1}>
                                {['Personal Loan', 'Home Loan', 'Auto Loan', 'Business Loan'].map((link) => (
                                    <Typography key={link} variant="body2" sx={{ opacity: 0.7, cursor: 'pointer', '&:hover': { opacity: 1 } }}>{link}</Typography>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Company</Typography>
                            <Stack spacing={1}>
                                {['About Us', 'Contact Us', 'Blog', 'Careers'].map((link) => (
                                    <Typography key={link} variant="body2" sx={{ opacity: 0.7, cursor: 'pointer', '&:hover': { opacity: 1 } }}>{link}</Typography>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Legal</Typography>
                            <Stack spacing={1}>
                                {['Privacy Policy', 'Terms & Conditions', 'Security'].map((link) => (
                                    <Typography key={link} variant="body2" sx={{ opacity: 0.7, cursor: 'pointer', '&:hover': { opacity: 1 } }}>{link}</Typography>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 8, pt: 4, borderTop: 1, borderColor: 'rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Typography variant="body2" sx={{ opacity: 0.5 }}>© 2026 LoanGrid. All rights reserved.</Typography>
                        <Stack direction="row" spacing={3}>
                            {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                                <Typography key={social} variant="body2" sx={{ opacity: 0.5, cursor: 'pointer', '&:hover': { opacity: 1 } }}>{social}</Typography>
                            ))}
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
