import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Icon } from 'react-icons-kit';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { socialGithub, socialLinkedin, socialTwitter, iosPerson, email } from 'react-icons-kit/ionicons';

const Blogpost = ({ post }) => {
  return (
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <div className='tc text'>
            <title>{post.title}</title>
            <h1 className='hero-title'>
              <a href='https://ahmetsalihozmen.com'>Ahmet Salih Özmen</a>
            </h1>
            <Link href='/about'>
              <Icon className='ma2' size={32} icon={iosPerson} />
              Hakkımda
            </Link>
            <a href='mailto:ahmetsalihozm@outlook.com' target='_blank'>
              <Icon className='ma2' size={32} icon={email} />
              Email
            </a>
            <a href='https://www.linkedin.com/in/ahmet-salih-özmen-30b466169' target='_blank'>
              <Icon className='ma2' size={32} icon={socialLinkedin} />
              LinkedIn
            </a>
            <br />
            <a href='https://github.com/ahmetsalihozmen' target='_blank'>
              <Icon className='ma2' size={32} icon={socialGithub} />
              GitHub
            </a>
            <div className='post'>
              <h1 className='post-title'>{post.title}</h1>
              <div className='post-text'>
                <ReactMarkdown escapeHtml={false} source={post.text} />
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
    </Container>
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
