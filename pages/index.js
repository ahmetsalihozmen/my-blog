import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { Grid, Toolbar, IconButton, Typography, Tabs, Tab, Divider, useTheme } from '@mui/material';
import PostCard from '../src/components/PostCard';
import Link from 'next/link';

function Home(props) {
  const [posts, setPosts] = useState(4);
  const [selectedTab, setSelectedTab] = useState(0);

  const theme = useTheme();
  const { text, background, grey, orange } = theme.palette;

  return (
    <Grid className='tc'>
      <title>Ahmet Salih Özmen Blog</title>
      <Grid sx={{
        background: background.primary, height: "900px",
      }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
          <Grid id='mainpost' item width="60%"
            sx={{
              '@keyframes moveTopToCenter': {
                '0%': {
                  transform: 'translateY(50%)',
                  opacity: 0
                },
                '100%': {
                  transform: 'translateY(0)',
                  opacity: 1
                }
              },
              animation: 'moveTopToCenter 0.8s ease-out',
            }}
          >
           <Link href={props.posts[0].slug}>
              <Typography sx={{ color: text, fontWeight: "bold", marginBottom: '40px' }} variant="h2" color="inherit">
                {props.posts[0].title}
              </Typography>
           </Link>
            <Typography sx={{ color: text, fontWeight: "bold" }} variant="h5" color="inherit">
              {props.posts[0].intro}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container padding={5}>
        {
          props.posts.slice(1, 5).map((post,) => (
            <Grid display='flex' justifyContent='center' marginBottom='10px' item xl={3} lg={4} md={6} sm={12} xs={12} key={post.slug}>
              <PostCard post={post} />
            </Grid>
          ))
        }
      </Grid>
      <style jsx>{`
      .post-date{
      margin-top:10px;
      text-align:right;
      color: #262626;
      }
      .post-text{
      text-align:left;
      }
      .post-title{
      margin: 30px;
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


