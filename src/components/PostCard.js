import { Box, Grid, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function PostCard({post}) {
    const {title, intro, date, slug, image, imageAvg} = post;

    const theme = useTheme();
    const {text, background, dark, grey, orange} = theme.palette;


    return (
        <Box sx={{
            padding: '20px',
            borderRadius: '10px',
            background: imageAvg,
            }} width= {350} height= {650}>
            <Link href={slug}>
                <Image 
                style={{borderRadius:'10px', marginBottom:'10px'}} width={350} height={300} 
                src={image ? image :'/next.jpg'} alt={title} />
            </Link>
            <Typography textAlign='left' sx={{fontSize: '14px', color: dark, opacity:0.5, marginBottom: '20px'}}>{date}</Typography>
            <Link href={slug}>
            <Typography sx={{
                textAlign: 'left',
                fontWeight: 'bold',
                marginBottom: '40px',
                '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: orange
                }
            }}
            textAlign='left' variant='h5' marginBottom='40px' fontWeight='bold'>
                    {title}
            </Typography>
            </Link>
            <Box>
                <Typography textAlign='justify'>{intro}</Typography>
            </Box>
        </Box>
    )
}
