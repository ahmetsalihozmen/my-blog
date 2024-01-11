import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { socialGithub, socialLinkedin, socialTwitter, iosPerson, email } from "react-icons-kit/ionicons"
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import { Button } from 'reactstrap';


import { useState, useEffect } from 'react';
import { Grid, Toolbar, IconButton, Typography, Tabs, Tab, Divider } from '@mui/material';

function Home(props) {
  const [posts, setPosts] = useState(4);
  const [value, setValue] = useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const incrementPosts = () => {
    setPosts(posts + 5);
  }

  const addButton = () => {
    if (posts < props.posts.length) {
      return (
        <Button className="ma4" color="secondary" id="but" onClick={incrementPosts}>Devamını Gör</Button>
      )
    }
    else {
      return null;
    }
  }

  return (
    <Grid className='tc'>
      <title>Ahmet Salih Özmen Blog</title>
      <Grid style={{ backgroundColor: "grey" }}>
        <Toolbar style={{ background: "rgba(0, 0, 0, 0.2)" }} variant="dense">
          <Grid marginY={4} container>
            <Grid item display="flex" justifyContent="start" xs={6}>
              <Typography style={{ color: "white", fontWeight: "bold" }} variant="h5" color="inherit">
                Ahmet Salih Özmen
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
              >
                <Tab value="home" label="Home" />
                <Tab value="about" label="About" />
                <Tab value="articles" label="Articles" />
              </Tabs>
              <Divider orientation="vertical" flexItem />
              <a href="mailto:ahmetsalihozm@outlook.com" target="_blank"><Icon className='ma2' size={32} icon={email} /></a>
              <a href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank"><Icon className='ma2' size={32} icon={socialLinkedin} /></a> <br />
              <a href="https://github.com/ahmetsalihozmen" target="_blank"><Icon className='ma2' size={32} icon={socialGithub} /></a>
              <Divider orientation="vertical" flexItem />
            </Grid>
          </Grid>
        </Toolbar>        
      </Grid>
      <Grid container padding={5}>
        {
          props.posts.slice(0, posts).map(post => (
            <Grid item lg={3} md={4} sm={6} xs={12} padding={5} className='post' key={post.slug}>
              <h2 className="post-title">
                <Link className='link' href={post.slug}>
                  {post.title}
                </Link>
              </h2>
              <div className='post-text'>
                <p>
                  {post.intro}
                </p>
                <Link className='link' href={post.slug}>
                  <strong>Devamını oku...</strong>
                </Link>
              </div>
              <div className='post-date'>{post.date}</div>
            </Grid>
          ))
        }
      </Grid>
      {addButton()}
      <style jsx>{`
      a{
        color: black;
      }
      a:hover{
        text-decoration:none;
        color:black;
      }
      .hero-title{
        font-size:48px;
        margin: 30px;
      }
      .post{
      max-width:650px;
      margin: auto;
      }
      .post-date{
      margin-top:10px;
      text-align:right;
      color: #cccccc;
      }
      .post-text{
      text-align:left;
      }
      .post-title{
      margin: 30px;
      }
      .about{
      text-align: right;
      }
      .link{
      color: black !important;
      }
      `}</style>
    </Grid>
  )
}


export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  json.reverse();
  return { props: { posts: json, fallback: false } };
}


export default Home;


