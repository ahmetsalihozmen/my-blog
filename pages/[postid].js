import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../src/context/LanguageContext';
import { getLocalizedPost } from '../src/blog-posts';

const Blogpost = ({ post }) => {
    const { t, language } = useLanguage();
    
    // Localize the post
    const localizedPost = getLocalizedPost(post, language);

    if (!localizedPost) {
        return (
            <Box sx={{ minHeight: '100vh', pt: 20, textAlign: 'center' }}>
                <Typography variant="h4" color="#f5f5f7">
                    Post not found
                </Typography>
            </Box>
        );
    }

  return (
        <>
            <Head>
                <title>{localizedPost.title} | Ahmet Salih Özmen</title>
                <meta name="description" content={localizedPost.intro} />
            </Head>

            <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 } }}>
                {/* Hero Section */}
                <Box
                    sx={{
                        position: 'relative',
                        py: { xs: 4, md: 8 },
                        overflow: 'hidden',
                    }}
                >
                    {/* Ambient Background */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '800px',
                            height: '400px',
                            borderRadius: '50%',
                            background: 'radial-gradient(ellipse, rgba(232, 165, 75, 0.08) 0%, transparent 70%)',
                            filter: 'blur(60px)',
                            pointerEvents: 'none',
                        }}
                    />

                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Back Link */}
                            <Link href="/articles" style={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mb: 4,
                                        color: '#71717a',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        transition: 'color 0.2s ease',
                                        '&:hover': {
                                            color: '#e8a54b',
                                        },
                                    }}
                                >
                                    <span>←</span>
                                    {t('backToArticles')}
                                </Box>
                            </Link>

                            {/* Date */}
                            <Typography
                                sx={{
                                    fontSize: '0.8rem',
                                    fontWeight: 500,
                                    color: '#e8a54b',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    mb: 2,
                                }}
                            >
                                {localizedPost.date}
                            </Typography>

                            {/* Title */}
                            <Typography
                                component="h1"
                                sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                    fontWeight: 600,
                                    color: '#f5f5f7',
                                    lineHeight: 1.2,
                                    letterSpacing: '-0.02em',
                                    mb: 3,
                                }}
                            >
                                {localizedPost.title}
                            </Typography>

                            {/* Intro */}
                            {localizedPost.intro && (
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                                        color: '#a1a1aa',
                                        lineHeight: 1.7,
                                        fontStyle: 'italic',
                                    }}
                                >
                                    {localizedPost.intro}
                                </Typography>
                            )}
                        </motion.div>
                    </Container>
                </Box>

                {/* Featured Image */}
                {localizedPost.image && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Container maxWidth="md">
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: 250, md: 400 },
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    mb: 6,
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                                }}
                            >
                                <Image
                                    src={localizedPost.image}
                                    alt={localizedPost.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </Box>
                        </Container>
                    </motion.div>
                )}

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Container maxWidth="md">
                        <Box
                            className="post-text"
                            sx={{
                                pb: 8,
                                '& h1, & h2, & h3, & h4, & h5, & h6': {
                                    fontFamily: "'Playfair Display', serif",
                                    color: '#f5f5f7',
                                    mt: 5,
                                    mb: 2,
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                },
                                '& h1': { fontSize: { xs: '1.75rem', md: '2.25rem' } },
                                '& h2': { fontSize: { xs: '1.5rem', md: '1.85rem' } },
                                '& h3': { fontSize: { xs: '1.25rem', md: '1.5rem' } },
                                '& h4': { fontSize: { xs: '1.1rem', md: '1.25rem' } },
                                '& p': {
                                    color: '#a1a1aa',
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    lineHeight: 1.9,
                                    mb: 2.5,
                                },
                                '& a': {
                                    color: '#e8a54b !important',
                                    textDecoration: 'none',
                                    borderBottom: '1px solid rgba(232, 165, 75, 0.3)',
                                    transition: 'border-color 0.2s ease',
                                    '&:hover': {
                                        borderColor: '#e8a54b',
                                    },
                                },
                                '& ul, & ol': {
                                    color: '#a1a1aa',
                                    pl: 3,
                                    mb: 2.5,
                                },
                                '& li': {
                                    mb: 1,
                                    lineHeight: 1.8,
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                },
                                '& blockquote': {
                                    borderLeft: '3px solid #e8a54b',
                                    pl: 3,
                                    py: 1,
                                    my: 4,
                                    fontStyle: 'italic',
                                    color: '#71717a',
                                    background: 'rgba(232, 165, 75, 0.05)',
                                    borderRadius: '0 8px 8px 0',
                                },
                                '& code': {
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: '4px',
                                    fontSize: '0.9em',
                                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                    color: '#f5c77a',
                                },
                                '& pre': {
                                    background: '#141418',
                                    p: 3,
                                    borderRadius: '12px',
                                    overflow: 'auto',
                                    my: 4,
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                    '& code': {
                                        background: 'none',
                                        p: 0,
                                        color: '#a1a1aa',
                                    },
                                },
                                '& img': {
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '12px',
                                    my: 4,
                                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                                },
                                '& strong': {
                                    color: '#f5f5f7',
                                    fontWeight: 600,
                                },
                                '& em': {
                                    color: '#a1a1aa',
                                },
                                '& hr': {
                                    border: 'none',
                                    height: '1px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    my: 5,
                                },
                                '& table': {
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    my: 4,
                                    '& th, & td': {
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        p: 2,
                                        textAlign: 'left',
                                    },
                                    '& th': {
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        color: '#f5f5f7',
                                        fontWeight: 600,
                                    },
                                    '& td': {
                                        color: '#a1a1aa',
                                    },
                                },
                            }}
                        >
                            <Markdown rehypePlugins={[rehypeRaw]}>{localizedPost.text}</Markdown>
                        </Box>

                        {/* Article Footer */}
                        <Box
                            sx={{
                                py: 4,
                                mb: 4,
                                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                            }}
                        >
                            <Link href="/articles" style={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        px: 3,
                                        py: 1.5,
                                        borderRadius: '9999px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: '#a1a1aa',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            borderColor: '#e8a54b',
                                            color: '#e8a54b',
                                        },
                                    }}
                                >
                                    <span>←</span>
                                    {t('backToAllArticles')}
                                </Box>
                            </Link>
                        </Box>
                    </Container>
                </motion.div>

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

export async function getStaticPaths() {
    const posts = require('../src/blog-posts').blogPosts;

  const paths = posts.map((post) => ({
    params: { postid: post.slug.toString() },
  }));  

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const getPost = require('../src/blog-posts').getPost;
    // Get post with English as default (will be localized on client side)
    const post = getPost(params.postid, 'en');

    if (!post) {
        return {
            props: {
                post: null,
            },
        };
    }

    return {
        props: {
            post,
        },
    };
}

export default Blogpost;
