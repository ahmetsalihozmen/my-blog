import { Icon } from 'react-icons-kit'
import { socialGithub, socialLinkedin, email } from "react-icons-kit/ionicons"
import { Grid, Toolbar, IconButton, Typography, Tabs, Tab, Box, useTheme, useMediaQuery } from '@mui/material';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { navValueState } from '../atom';



const styles = (theme) => ({
  iconButton: {
    color: 'white',
    background: 'linear-gradient(#ffffff, #e2e2e2)',
    boxShadow: '10px 10px 30px #d5d5d5, -10px -10px 30px #ffffff;',
    marginX: 1,
    // on hover grow size
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
  }
)

const Navbar = () => {

  const [navbarValue, setNavbarValue] = useRecoilState(navValueState);
  const theme = useTheme();
  const sx = styles(theme)
  const { background } = theme.palette;

  const handleTabChange = (event, newValue) => {
    setNavbarValue(newValue);
  };

  const isLarge = useMediaQuery(theme.breakpoints.up('md'));

  const tabs = <Tabs
      value={navbarValue}
      onChange={handleTabChange}
      aria-label="secondary tabs example"
    >
      <Link href="about" style={{ color: '#F56E0F' }}> <Tab value="about" label="About" > </Tab></Link>
      <Link href="articles" style={{ color: '#F56E0F' }}> <Tab value="articles" label="Articles" > </Tab></Link>
    </Tabs>

  return (
    <Toolbar style={{ background: background.navbarGradient, width: "100%" }} variant="dense">
      <Grid marginY={4} container>
        <Grid container sx={sx.nameLink} sm={12} md={4}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography style={{ fontWeight: "bold" }} variant="h5" color="inherit">
              Ahmet Salih Ozmen
            </Typography>
          </Link>
        </Grid>
        {!isLarge ?<Grid container sx={sx.pageLinks} sm={12}>
          {tabs}
        </Grid>: null}
        <Grid container sx={sx.iconLinks} sm={12} md={8}>
            {isLarge ? tabs: null}
            <Box>
              <IconButton sx={sx.iconButton}>
                <a href="mailto:ahmetsalihozm@outlook.com" target="_blank"><Icon className='ma2' size={32} icon={email} /></a>
              </IconButton>
            </Box>
            <Box>
            <IconButton sx={sx.iconButton}>
              <a href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank"><Icon className='ma2' size={32} icon={socialLinkedin} /></a> <br />
            </IconButton>
            </Box>
            <Box >
            <IconButton sx={sx.iconButton}>
              <a href="https://github.com/ahmetsalihozmen" target="_blank"><Icon className='ma2' size={32} icon={socialGithub} /></a>
            </IconButton>
            </Box>
        </Grid>
    </Grid>
      <style jsx>
        {`
            a{
                color: #F56E0F;
            }
            a:hover{
                text-decoration:none;
                color:black;
            }
            `}
      </style>
    </Toolbar>
  )
}

export default Navbar;