import React from 'react'
import {Icon} from'react-icons-kit'
import {socialGithub,socialLinkedin,socialTwitter,iosPerson,email} from "react-icons-kit/ionicons"
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

 const Home = ({ posts }) => {
  return (
    <div className='tc'>
      <title>Ahmet Salih Özmen Blog</title>
      <h1 className='hero-title'>Ahmet Salih Özmen</h1>
      <Link href='about'><a><Icon className='ma2' size={32} icon={iosPerson}/>Hakkımda</a></Link>
      <a  href="mailto:ahmetsalihozm@outlook.com" target="_blank"><Icon className='ma2' size={32} icon={email}/>Email</a>    
      <a  href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank"><Icon className='ma2' size={32} icon={socialLinkedin}/>LinkedIn</a>  <br/>    
      <a  href="https://github.com/ahmetsalihozmen" target="_blank"><Icon className='ma2' size={32} icon={socialGithub}/>GitHub</a>
      <a  href="https://twitter.com/vokulfenmah" target="_blank"><Icon className='ma2' size={32} icon={socialTwitter}/>Twitter</a>

      <div className='tc'>
        {
         posts.map(post =>
          (
        
          <div className='post' key={post.slug}>
             <h2 className="post-title">
              <Link href={post.slug}>
                <a className="blog-title-link">{post.title}</a>
              </Link>
            </h2>
            <div className='post-text'>
              <p>
                {post.intro}
                </p>
              <Link href={post.slug}>
                <a className="blog-title-link"> <strong>Devamını oku...</strong></a>
              </Link>
             </div>
            <div className='post-date'>{post.date}</div>
          </div> 
         ))
        }
      </div>
      <style jsx>{`
      a{
        color: black;
      }
      a:hover{
        text-decoration:none;
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
      `}</style>
    </div>
  )
}

Home.getInitialProps = async ({req}) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  json.reverse();
  return { posts: json };
};

export default Home;
// https://ahmetozmen.herokuapp.com