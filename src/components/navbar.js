import { Icon } from 'react-icons-kit'
import { socialGithub, socialLinkedin, email } from "react-icons-kit/ionicons"
import { Grid, Toolbar, IconButton, Typography, Tabs, Tab, Divider, useTheme } from '@mui/material';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { navValueState } from '../atom';



const styles = {
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
  '&:hover': {
    background: 'linear-gradient(#e2e2e2, #ffffff)',
    boxShadow: '20px 20px 60px #ffffff, -20px -20px 60px #d5d5d5;',
  }
}

const Navbar = () => {

  const [navbarValue, setNavbarValue] = useRecoilState(navValueState);
  const theme = useTheme();
  const { background, text } = theme.palette;

  const handleTabChange = (event, newValue) => {
    setNavbarValue(newValue);
  };

  return (
    <Toolbar style={{ background: background.navbarGradient, width: "100%" }} variant="dense">
      <Grid marginY={4} container>
        <Grid item display="flex" justifyContent="start" alignItems="center" xs={6}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography style={{ fontWeight: "bold" }} variant="h5" color="inherit">
              Ahmet Salih Özmen
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end" alignItems='center' >
          <Tabs
            value={navbarValue}
            onChange={handleTabChange}
            aria-label="secondary tabs example"
          >
            <Link href="about" style={{ color: '#F56E0F' }}> <Tab value="about" label="About" > </Tab></Link>
            <Link href="articles" style={{ color: '#F56E0F' }}> <Tab value="articles" label="Articles" > </Tab></Link>
          </Tabs>
          <Divider orientation="vertical" flexItem />
          <IconButton sx={styles.iconButton}>
            <a href="mailto:ahmetsalihozm@outlook.com" target="_blank"><Icon className='ma2' size={32} icon={email} /></a>
          </IconButton>
          <IconButton sx={styles.iconButton}>
            <a href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank"><Icon className='ma2' size={32} icon={socialLinkedin} /></a> <br />
          </IconButton>
          <IconButton sx={styles.iconButton}>
            <a href="https://github.com/ahmetsalihozmen" target="_blank"><Icon className='ma2' size={32} icon={socialGithub} /></a>
          </IconButton>
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