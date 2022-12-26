import React, { Component } from 'react'
import {Icon} from'react-icons-kit'
import {socialGithub,socialLinkedin,socialTwitter,iosPerson,email} from "react-icons-kit/ionicons"
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import { Button } from 'reactstrap';


import { useState, useEffect } from 'react';

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
    else {
      return null;
    }
  }



  console.log(props);

  return (
    <div className='tc'>
      <title>Ahmet Salih Özmen Blog</title>
      <h1 className='hero-title'>Ahmet Salih Özmen</h1>
      <Link className='link' href='about'><Icon className='ma2' size={32} icon={iosPerson}/>Hakkımda</Link>
      <a href="mailto:ahmetsalihozm@outlook.com" target="_blank"><Icon className='ma2' size={32} icon={email}/>Email</a>
      <a href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank"><Icon className='ma2' size={32} icon={socialLinkedin}/>LinkedIn</a> <br/>
      <a href="https://github.com/ahmetsalihozmen" target="_blank"><Icon className='ma2' size={32} icon={socialGithub}/>GitHub</a>

        {
          props.posts.slice(0, posts).map(post => (
            <div className='post' key={post.slug}>
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
            </div>
          ))
        }
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
      </div>
      )
      }
      
      Home.getInitialProps = async ({req}) => {
      const res = await fetch("http://localhost:3000/api/posts");
      const json = await res.json();
      json.reverse();
      return { posts: json, fallback: false};
      };
      
      export default Home;
      
      
