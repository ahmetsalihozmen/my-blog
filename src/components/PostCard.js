import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function PostCard({ post, index = 0 }) {
    const { title, intro, date, slug, image } = post;
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ y: -8 }}
            style={{ height: '100%' }}
        >
            <Link href={slug} style={{ textDecoration: 'none' }}>
                <Box
                    sx={{
                        height: '100%',
                        minHeight: 480,
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'linear-gradient(145deg, #1f1f26 0%, #1a1a1f 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                        '&:hover': {
                            borderColor: 'rgba(232, 165, 75, 0.3)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(232, 165, 75, 0.1)',
                            '& .card-image': {
                                transform: 'scale(1.05)',
                            },
                            '& .card-title': {
                                color: '#e8a54b',
                            },
                            '& .read-indicator': {
                                opacity: 1,
                                transform: 'translateX(0)',
                            },
                        },
                    }}
                >
                    {/* Image Container */}
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: 220,
                            overflow: 'hidden',
                            background: '#141418',
                        }}
                    >
                        <Box
                            className="card-image"
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                        >
                            <Image
                                src={image || '/next.jpg'}
                                alt={title}
                                fill
                                style={{ 
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                        {/* Gradient Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '50%',
                                background: 'linear-gradient(to top, #1a1a1f 0%, transparent 100%)',
                                pointerEvents: 'none',
                            }}
                        />
                    </Box>

                    {/* Content */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            p: 3,
                            pt: 2,
                        }}
                    >
                        {/* Date */}
                        <Typography
                            sx={{
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                color: '#71717a',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                mb: 1.5,
                            }}
                        >
                            {date}
                        </Typography>

                        {/* Title */}
                        <Typography
                            className="card-title"
                            sx={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '1.35rem',
                                fontWeight: 600,
                                color: '#f5f5f7',
                                lineHeight: 1.3,
                                mb: 2,
                                transition: 'color 0.3s ease',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}
                        >
                            {title}
                        </Typography>

                        {/* Intro */}
                        <Typography
                            sx={{
                                fontSize: '0.9rem',
                                color: '#a1a1aa',
                                lineHeight: 1.7,
                                flex: 1,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}
                        >
                            {intro}
                        </Typography>

                        {/* Read More Indicator */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mt: 2,
                                pt: 2,
                                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                            }}
                        >
                            <Typography
                                className="read-indicator"
                                sx={{
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    color: '#e8a54b',
                                    opacity: 0.7,
                                    transform: 'translateX(-10px)',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {t('readMore')}
                            </Typography>
                            <Box
                                className="read-indicator"
                                sx={{
                                    opacity: 0,
                                    transform: 'translateX(-10px)',
                                    transition: 'all 0.3s ease',
                                    color: '#e8a54b',
                                    fontSize: '1.2rem',
                                }}
                            >
                                →
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </motion.div>
    );
}
