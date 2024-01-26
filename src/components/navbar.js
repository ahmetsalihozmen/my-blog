import { Icon } from 'react-icons-kit'
import { socialGithub, socialLinkedin, email } from "react-icons-kit/ionicons"
import { Grid, Toolbar, IconButton, Typography, Tabs, Tab, Divider } from '@mui/material';
import { atom, useRecoilState } from 'recoil';
import Link from 'next/link';

const navValue = atom({
    key: 'navValue',
    default: 'home'
    });

const Navbar = () =>{

    const [value, setValue] = useRecoilState(navValue);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <Toolbar style={{ background: "rgb(27, 27, 30)", width:"100%" }} variant="dense">
          <Grid marginY={4} container>
            <Grid item display="flex" justifyContent="start" alignItems="center" xs={6}>
            <Link href="/" style={{color: 'white', textDecoration: 'none'}}>
                <Typography style={{ color: "white !important", fontWeight: "bold" }} variant="h5" color="inherit">
                    Ahmet Salih Özmen
                </Typography>
            </Link>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" alignItems='center' >
              <Tabs
                value={value}
                onChange={handleTabChange}
                aria-label="secondary tabs example"
              >
                {/* i want to create link that routes you to the index.js of that directory */}
                <Link href="about" style={{color: '#F56E0F'}}> <Tab value="about" label="About" > </Tab></Link>
                <Link href="articles" style={{color: '#F56E0F'}}> <Tab value="articles" label="Articles" > </Tab></Link>
              </Tabs>
              <Divider orientation="vertical" flexItem />
              <IconButton>
                <a href="mailto:ahmetsalihozm@outlook.com" target="_blank"><Icon className='ma2' size={32} icon={email} /></a>
              </IconButton>
              <IconButton>
                <a href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank"><Icon className='ma2' size={32} icon={socialLinkedin} /></a> <br />
              </IconButton>
              <IconButton>
                <a href="https://github.com/ahmetsalihozmen" target="_blank"><Icon className='ma2' size={32} icon={socialGithub} /></a>
              </IconButton>
              <Divider orientation="vertical" flexItem />
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