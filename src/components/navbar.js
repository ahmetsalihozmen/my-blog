import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useTheme, useMediaQuery, Toolbar, Grid, IconButton, Typography, Tabs, Tab, Box } from '@mui/material';
import { Icon } from 'react-icons-kit';
import { socialGithub, socialLinkedin, email } from 'react-icons-kit/ionicons';
import Link from 'next/link';
import { navValueState } from '../atom';

const styles = (theme) => ({
  iconButton: {
    color: 'white',
    background: 'linear-gradient(#ffffff, #e2e2e2)',
    boxShadow: '10px 10px 30px #d5d5d5, -10px -10px 30px #ffffff;',
    marginX: 1,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(#ffffff, #e2e2e2)',
      boxShadow: '20px 20px 60px #d5d5d5, -20px -20px 60px #ffffff;',
      transform: 'scale(1.05)',
    }
  },
  nameLink: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  pageLinks: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'end',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  iconLinks: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'end',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  }
});

const Navbar = () => {
  const [navbarValue, setNavbarValue] = useRecoilState(navValueState);
  const theme = useTheme();
  const sx = styles(theme);
  const { background } = theme.palette;

  const [isLarge, setIsLarge] = useState(true);

  useEffect(() => {

    const handleResize = () => {
      setIsLarge(window.matchMedia("(min-width: 900px)").matches);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.breakpoints]);

  const handleTabChange = (event, newValue) => {
    setNavbarValue(newValue);
  };

  const tabs = (
    <Tabs value={navbarValue} onChange={handleTabChange} aria-label="secondary tabs example">
      <Link href="/about" style={{ color: '#F56E0F' }}>
        <Tab value="about" label="About" />
      </Link>
      <Link href="/articles" style={{ color: '#F56E0F' }}>
        <Tab value="articles" label="Articles" />
      </Link>
    </Tabs>
  );

  if (isLarge === null) {
    return null;
  }

  return (
    <Toolbar style={{ background: background.navbarGradient, width: '100%' }} variant="dense">
      <Grid marginY={4} container>
        <Grid container sx={sx.nameLink} sm={12} md={4}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography style={{ fontWeight: 'bold' }} variant="h5" color="inherit">
              Ahmet Salih Ozmen
            </Typography>
          </Link>
        </Grid>
        {!isLarge ? (
          <Grid container sx={sx.pageLinks} sm={12} md={0}>
            {tabs}
          </Grid>
        ) : null}
        <Grid container sx={sx.iconLinks} sm={12} md={8}>
          {isLarge ? tabs : null}
          <Box>
            <IconButton sx={sx.iconButton}>
              <a href="mailto:ahmetsalihozm@outlook.com" target="_blank">
                <Icon className="ma2" size={32} icon={email} />
              </a>
            </IconButton>
          </Box>
          <Box>
            <IconButton sx={sx.iconButton}>
              <a href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank">
                <Icon className="ma2" size={32} icon={socialLinkedin} />
              </a>
            </IconButton>
          </Box>
          <Box>
            <IconButton sx={sx.iconButton}>
              <a href="https://github.com/ahmetsalihozmen" target="_blank">
                <Icon className="ma2" size={32} icon={socialGithub} />
              </a>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <style jsx>
        {`
          a {
            color: #f56e0f;
          }
          a:hover {
            text-decoration: none;
            color: black;
          }
        `}
      </style>
    </Toolbar>
  );
};

export default Navbar;
