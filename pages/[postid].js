import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Icon } from 'react-icons-kit';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { socialGithub, socialLinkedin, socialTwitter, iosPerson, email } from 'react-icons-kit/ionicons';
import Navbar from '../src/components/navbar';
import { Grid } from '@mui/material';

const Blogpost = ({ post }) => {
  return (
    <Grid width="100%">
      <Navbar />
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <div className='tc text'>
            <title>{post.title}</title>
            <div className='post'>
              <h1 className='post-title'>{post.title}</h1>
              <div className='post-text'>
                <Markdown>{post.text}</Markdown>
              </div>
              <div className='post-date'>{post.date}</div>
            </div>

            <style jsx>{`
              .blog-title {
                margin-bottom: 10%;
              }
              a:hover,
              a {
                color: black;
                text-decoration: none;
              }
              .hero-title {
                font-size: 48px;
                margin: 30px;
              }
              .post {
                max-width: 650px;
                margin: auto;
              }
              .post-date {
                margin-top: 10px;
                margin-bottom: 30px;
                text-align: right;
                color: #cccccc;
              }
              .post-text {
                text-align: left;
              }
              .post-title {
                margin: 30px;
              }
            `}</style>
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Grid>
  );
};

export async function getStaticPaths() {
  // Fetch the list of post IDs
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  // Generate paths for each post
  const paths = posts.map((post) => ({
    params: { postid: post.slug.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific post
  const res = await fetch(`http://localhost:3000/api/post/${params.postid}`);
  const json = await res.json();

  return {
    props: {
      post: json.post,
    },
  };
}

export default Blogpost;
