import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import { Button } from 'reactstrap';


import { useState, useEffect } from 'react';
import { Grid, Toolbar, IconButton, Typography, Tabs, Tab, Divider } from '@mui/material';
import Navbar from '../src/components/navbar';

function Home(props) {
  const [posts, setPosts] = useState(4);

  const incrementPosts = () => {
    setPosts(posts + 5);
  }

  const addButton = () => {
    if (posts < props.posts.length) {
      return (
        <Button className="ma4" color="secondary" id="but" onClick={incrementPosts}>Devamını Gör</Button>
      )
    }
  }

  return (
    <Grid className='tc'>
      <title>Ahmet Salih Özmen Blog</title>
      <Grid style={{ backgroundColor: "#262626", height: "900px" }}>
        <Navbar />
        <Grid container justifyContent="center" alignItems="center" style={{ height: "100%" }}>
          <Grid item>
            <Typography style={{ color: "white", fontWeight: "bold" }} variant="h2" color="inherit">
              {props.posts[0].title}
            </Typography>
            <Typography style={{ color: "white", fontWeight: "bold" }} variant="h5" color="inherit">
              {props.posts[0].intro}
            </Typography>
          </Grid>  
        </Grid>      
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


