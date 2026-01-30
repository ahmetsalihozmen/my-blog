import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLanguage } from '../src/context/LanguageContext';

const About = ({ postEn, postTr }) => {
    const { language, t } = useLanguage();
    const post = language === 'tr' ? postTr : postEn;

    return (
        <>
            <Head>
                <title>{t('about')} | Ahmet Salih Özmen</title>
                <meta name="description" content="About Ahmet Salih Özmen - Software Developer and Tech Enthusiast" />
            </Head>

            <Box sx={{ minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
                {/* Ambient Background Effects */}
                <Box
                    sx={{
                        position: 'fixed',
                        top: '20%',
                        right: '10%',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(232, 165, 75, 0.06) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                />

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Box sx={{ mb: 6, textAlign: 'center' }}>
                            <Typography
                                component="h1"
                                sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 600,
                                    color: '#f5f5f7',
                                    mb: 2,
                                }}
                            >
                                {t('aboutMe')}
                            </Typography>
                            <Box
                                sx={{
                                    width: 60,
                                    height: 3,
                                    background: 'linear-gradient(90deg, #e8a54b, #f5c77a)',
                                    borderRadius: '9999px',
                                    mx: 'auto',
                                }}
                            />
                        </Box>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        key={language}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Box
                            sx={{
                                background: 'linear-gradient(145deg, rgba(31, 31, 38, 0.5) 0%, rgba(26, 26, 31, 0.5) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                borderRadius: '20px',
                                p: { xs: 3, md: 5 },
                                mb: 8,
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <Box
                                className="post-text"
                                sx={{
                                    '& h1, & h2, & h3, & h4': {
                                        fontFamily: "'Playfair Display', serif",
                                        color: '#f5f5f7',
                                        mt: 4,
                                        mb: 2,
                                    },
                                    '& h1': { fontSize: '2rem' },
                                    '& h2': { fontSize: '1.75rem' },
                                    '& h3': { fontSize: '1.5rem' },
                                    '& p': {
                                        color: '#a1a1aa',
                                        fontSize: '1.1rem',
                                        lineHeight: 1.9,
                                        mb: 2,
                                    },
                                    '& a': {
                                        color: '#e8a54b !important',
                                        textDecoration: 'none',
                                        borderBottom: '1px solid transparent',
                                        transition: 'border-color 0.2s ease',
                                        '&:hover': {
                                            borderColor: '#e8a54b',
                                        },
                                    },
                                    '& ul, & ol': {
                                        color: '#a1a1aa',
                                        pl: 3,
                                        mb: 2,
                                    },
                                    '& li': {
                                        mb: 1,
                                        lineHeight: 1.8,
                                    },
                                    '& blockquote': {
                                        borderLeft: '3px solid #e8a54b',
                                        pl: 3,
                                        my: 3,
                                        fontStyle: 'italic',
                                        color: '#71717a',
                                    },
                                    '& code': {
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: '4px',
                                        fontSize: '0.9em',
                                        fontFamily: "'JetBrains Mono', monospace",
                                    },
                                    '& img': {
                                        maxWidth: '100%',
                                        borderRadius: '12px',
                                        my: 3,
                                    },
                                    '& strong': {
                                        color: '#f5f5f7',
                                        fontWeight: 600,
                                    },
                                }}
                            >
                                <Markdown>{post}</Markdown>
                            </Box>
                        </Box>
                    </motion.div>
                </Container>

                {/* Footer */}
                <Box
                    sx={{
                        py: 4,
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: '#71717a',
                                fontSize: '0.85rem',
                            }}
                        >
                            {t('copyright')}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export async function getStaticProps() {
    const postEn = require('../src/posts/about_eng.md').default;
    const postTr = require('../src/posts/about_tr.md').default;
    return { props: { postEn, postTr } };
}

export default About;
