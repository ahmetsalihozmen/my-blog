import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Box, IconButton, Typography, Container } from '@mui/material';
import { Icon } from 'react-icons-kit';
import { socialGithub, socialLinkedin, email } from 'react-icons-kit/ionicons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { navValueState } from '../atom';

const Navbar = () => {
  const [navbarValue, setNavbarValue] = useRecoilState(navValueState);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', value: 'home' },
    { href: '/articles', label: 'Articles', value: 'articles' },
    { href: '/about', label: 'About', value: 'about' },
  ];

  const socialLinks = [
    { href: 'mailto:ahmetsalihozm@outlook.com', icon: email, label: 'Email' },
    { href: 'https://www.linkedin.com/in/ahmet-salih-özmen-30b466169', icon: socialLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/ahmetsalihozmen', icon: socialGithub, label: 'GitHub' },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        background: scrolled 
          ? 'rgba(13, 13, 15, 0.85)' 
          : 'transparent',
        borderBottom: scrolled 
          ? '1px solid rgba(255, 255, 255, 0.08)' 
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
            px: { xs: 1, md: 0 },
          }}
        >
          {/* Logo / Name */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: '#f5f5f7 !important',
                  letterSpacing: '-0.02em',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#e8a54b !important',
                  },
                  transition: 'color 0.2s ease',
                }}
              >
                Ahmet Salih Özmen
              </Typography>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            {navLinks.map((link) => (
              <Link key={link.value} href={link.href} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Box
                    onClick={() => setNavbarValue(link.value)}
                    sx={{
                      position: 'relative',
                      px: 2.5,
                      py: 1,
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      color: isActive(link.href) ? '#e8a54b' : '#a1a1aa',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      background: isActive(link.href) 
                        ? 'rgba(232, 165, 75, 0.1)' 
                        : 'transparent',
                      '&:hover': {
                        color: '#e8a54b',
                        background: 'rgba(232, 165, 75, 0.08)',
                      },
                    }}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeNav"
                        style={{
                          position: 'absolute',
                          bottom: -2,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: '#e8a54b',
                        }}
                      />
                    )}
                  </Box>
                </motion.div>
              </Link>
            ))}
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: '#a1a1aa',
                    width: 40,
                    height: 40,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#e8a54b',
                      background: 'rgba(232, 165, 75, 0.1)',
                    },
                  }}
                >
                  <Icon size={20} icon={social.icon} />
                </IconButton>
              </motion.div>
            ))}
          </Box>

          {/* Mobile Navigation */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              position: 'fixed',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(26, 26, 31, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '8px 16px',
              gap: 1,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            {navLinks.map((link) => (
              <Link key={link.value} href={link.href} style={{ textDecoration: 'none' }}>
                <Box
                  onClick={() => setNavbarValue(link.value)}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: isActive(link.href) ? '#0d0d0f' : '#a1a1aa',
                    background: isActive(link.href) 
                      ? 'linear-gradient(135deg, #e8a54b, #f5c77a)' 
                      : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link.label}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
