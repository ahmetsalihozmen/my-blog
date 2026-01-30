import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLanguage } from '../src/context/LanguageContext';
import { getLocalizedPost } from '../src/blog-posts';

const ArticlesPage = ({ posts }) => {
    const { t, language } = useLanguage();
    
    // Localize all posts
    const localizedPosts = posts.map(post => getLocalizedPost(post, language));

    return (
        <>
            <Head>
                <title>{t('articles')} | Ahmet Salih Özmen</title>
                <meta name="description" content="All articles about technology, science, and programming" />
            </Head>

            <Box sx={{ minHeight: '100vh', pt: { xs: 12, md: 14 } }}>
                {/* Header Section */}
                <Container maxWidth="lg">
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
                                {t('allArticles')}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.1rem',
                                    color: '#a1a1aa',
                                    maxWidth: '600px',
                                    mx: 'auto',
                                }}
                            >
                                {t('articlesDescription')}
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Articles List */}
                    <Box sx={{ maxWidth: '800px', mx: 'auto', pb: 8 }}>
                        {localizedPosts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1] 
                                }}
                            >
                                <Link href={post.slug} style={{ textDecoration: 'none' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: { xs: 2, md: 3 },
                                            p: { xs: 2, md: 3 },
                                            mb: 2,
                                            borderRadius: '16px',
                                            border: '1px solid transparent',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                borderColor: 'rgba(255, 255, 255, 0.06)',
                                                '& .article-title': {
                                                    color: '#e8a54b',
                                                },
                                                '& .article-image': {
                                                    transform: 'scale(1.05)',
                                                },
                                                '& .read-more': {
                                                    opacity: 1,
                                                    transform: 'translateX(0)',
                                                },
                                            },
                                        }}
                                    >
                                        {/* Image */}
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: { xs: 100, md: 160 },
                                                minWidth: { xs: 100, md: 160 },
                                                height: { xs: 80, md: 120 },
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                background: '#141418',
                                            }}
                                        >
                                            <Box
                                                className="article-image"
                                                sx={{
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '100%',
                                                    transition: 'transform 0.4s ease',
                                                }}
                                            >
                                                <Image
                                                    src={post.image || '/next.jpg'}
                                                    alt={post.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Box>
                                        </Box>

                                        {/* Content */}
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            {/* Date */}
                                            <Typography
                                                sx={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: 500,
                                                    color: '#71717a',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.08em',
                                                    mb: 1,
                                                }}
                                            >
                                                {post.date}
                                            </Typography>

                                            {/* Title */}
                                            <Typography
                                                className="article-title"
                                                sx={{
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: { xs: '1.1rem', md: '1.35rem' },
                                                    fontWeight: 600,
                                                    color: '#f5f5f7',
                                                    lineHeight: 1.3,
                                                    mb: 1,
                                                    transition: 'color 0.2s ease',
                                                }}
                                            >
                                                {post.title}
                                            </Typography>

                                            {/* Intro - hidden on mobile */}
                                            <Typography
                                                sx={{
                                                    display: { xs: 'none', md: '-webkit-box' },
                                                    fontSize: '0.9rem',
                                                    color: '#a1a1aa',
                                                    lineHeight: 1.6,
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    mb: 1.5,
                                                }}
                                            >
                                                {post.intro}
                                            </Typography>

                                            {/* Read More */}
                                            <Box
                                                className="read-more"
                                                sx={{
                                                    display: { xs: 'none', md: 'flex' },
                                                    alignItems: 'center',
                                                    gap: 0.5,
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500,
                                                    color: '#e8a54b',
                                                    opacity: 0,
                                                    transform: 'translateX(-10px)',
                                                    transition: 'all 0.3s ease',
                                                }}
                                            >
                                                {t('readMore')}
                                                <span>→</span>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>

                                {/* Divider */}
                                {index < localizedPosts.length - 1 && (
                                    <Box
                                        sx={{
                                            height: '1px',
                                            background: 'rgba(255, 255, 255, 0.04)',
                                            mx: 3,
                                        }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </Box>
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
    const posts = require('../src/blog-posts').blogPosts;
    const sortedPosts = [...posts].reverse();
    return {
        props: { posts: sortedPosts }, // Will be localized on client side
    };
}

export default ArticlesPage;
