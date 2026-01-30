import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import PostCard from '../src/components/PostCard';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Home = ({ posts }) => {
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 5);

  return (
    <>
      <Head>
        <title>Ahmet Salih Özmen | Blog</title>
        <meta name="description" content="Personal blog about technology, science, and programming" />
      </Head>

      <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 } }}>
        {/* Hero Section with Featured Post */}
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: '70vh', md: '85vh' },
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Background Effects */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232, 165, 75, 0.08) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232, 165, 75, 0.05) 0%, transparent 70%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }}
          />

          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Badge */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2,
                      py: 0.75,
                      mb: 3,
                      borderRadius: '9999px',
                      background: 'rgba(232, 165, 75, 0.1)',
                      border: '1px solid rgba(232, 165, 75, 0.2)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#e8a54b',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%, 100%': { opacity: 1 },
                          '50%': { opacity: 0.5 },
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: '#e8a54b',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Latest Article
                    </Typography>
                  </Box>

                  {/* Featured Title */}
                  <Link href={featuredPost?.slug || '#'} style={{ textDecoration: 'none' }}>
                    <Typography
                      component="h1"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                        fontWeight: 600,
                        color: '#f5f5f7',
                        lineHeight: 1.1,
                        letterSpacing: '-0.03em',
                        mb: 3,
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#e8a54b !important',
                        },
                      }}
                    >
                      {featuredPost?.title}
                    </Typography>
                  </Link>

                  {/* Featured Intro */}
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      color: '#a1a1aa',
                      lineHeight: 1.8,
                      maxWidth: '600px',
                      mb: 4,
                    }}
                  >
                    {featuredPost?.intro}
                  </Typography>

                  {/* CTA Button */}
                  <Link href={featuredPost?.slug || '#'} style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ display: 'inline-block' }}
                    >
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 1.5,
                          px: 4,
                          py: 1.5,
                          borderRadius: '9999px',
                          background: 'linear-gradient(135deg, #e8a54b 0%, #f5c77a 100%)',
                          color: '#0d0d0f',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 20px rgba(232, 165, 75, 0.3)',
                          '&:hover': {
                            boxShadow: '0 8px 40px rgba(232, 165, 75, 0.4)',
                          },
                        }}
                      >
                        Read Article
                        <span style={{ fontSize: '1.2rem' }}>→</span>
                      </Box>
                    </motion.div>
                  </Link>
                </motion.div>
              </Grid>

              {/* Decorative Element */}
              <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '400px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Decorative circles */}
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        border: '1px solid rgba(232, 165, 75, 0.2)',
                        animation: 'float 6s ease-in-out infinite',
                        '@keyframes float': {
                          '0%, 100%': { transform: 'translateY(0)' },
                          '50%': { transform: 'translateY(-20px)' },
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '220px',
                        height: '220px',
                        borderRadius: '50%',
                        border: '1px solid rgba(232, 165, 75, 0.15)',
                        animation: 'float 6s ease-in-out infinite',
                        animationDelay: '-2s',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '140px',
                        height: '140px',
                        borderRadius: '50%',
                        background: 'rgba(232, 165, 75, 0.1)',
                        animation: 'float 6s ease-in-out infinite',
                        animationDelay: '-4s',
                      }}
                    />
                    {/* Article count */}
                    <Box sx={{ textAlign: 'center', zIndex: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '4rem',
                          fontWeight: 600,
                          color: '#e8a54b',
                          lineHeight: 1,
                        }}
                      >
                        {posts.length}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: '#71717a',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Articles
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Recent Posts Section */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 5,
                  pb: 3,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <Box>
                  <Typography
                    component="h2"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 600,
                      color: '#f5f5f7',
                      mb: 0.5,
                    }}
                  >
                    Recent Articles
                  </Typography>
                  <Typography sx={{ color: '#71717a', fontSize: '0.95rem' }}>
                    Explore the latest writings
                  </Typography>
                </Box>
                <Link href="/articles" style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      alignItems: 'center',
                      gap: 1,
                      px: 2.5,
                      py: 1,
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
                    View all
                    <span>→</span>
                  </Box>
                </Link>
              </Box>
            </motion.div>

            {/* Posts Grid */}
            <Grid container spacing={3}>
              {recentPosts.map((post, index) => (
                <Grid item xs={12} sm={6} lg={3} key={post.slug}>
                  <PostCard post={post} index={index} />
                </Grid>
              ))}
            </Grid>

            {/* Mobile View All Button */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', mt: 4 }}>
              <Link href="/articles" style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 4,
                    py: 1.5,
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#a1a1aa',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                >
                  View all articles
                  <span>→</span>
                </Box>
              </Link>
            </Box>
          </Container>
        </Box>

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
              © {new Date().getFullYear()} Ahmet Salih Özmen. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const posts = require('../src/blog-posts').blogPosts;
  const lastPosts = [...posts].reverse().slice(0, 5);

  return {
    props: { posts: lastPosts },
  };
}

export default Home;
