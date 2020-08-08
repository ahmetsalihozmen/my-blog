import React from 'react'
import {Icon} from'react-icons-kit'
import {socialGithub,socialLinkedin,socialTwitter} from "react-icons-kit/ionicons"
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import fetch from 'isomorphic-unfetch';

 const Home = ({ posts }) => {
  // console.log(rposts[0].text.replace(/^(.{800}[^\s]*).*/, "$1"))
  return (
    <div className='tc'>
      <h1 className='hero-title'>Ahmet Salih Özmen</h1>
      <Icon className='ma2' size={32} icon={socialLinkedin}/>
      <a  href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank">LinkedIn</a>
      <Icon className='ma2' size={32} icon={socialGithub}/>
      <a  href="https://github.com/ahmetsalihozmen" target="_blank">GitHub</a>
      <Icon className='ma2' size={32} icon={socialTwitter}/>
      <a  href="https://twitter.com/vokulfenmah" target="_blank">Twitter</a>
      <div className='tc'>
        {
         posts.map(post =>
          (
        
          <div className='post' key={post.slug}>
             <h2 className="blog-title">
              <Link href={post.slug}>
                <a className="blog-title-link">{post.title}</a>
              </Link>
            </h2>
            <div className='post-text'>
              <ReactMarkdown source={post.text} />
              <span>
              <Link href={post.slug}>
                <a className="blog-title-link"> <strong>Devamını oku...</strong></a>
              </Link>
              </span>
             </div>
            <div className='post-date'>{post.date}</div>
          </div> 
         ))
        }
      </div>


      <style jsx>{`
      .hero-title{
        font-size:48px;
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
      `}</style>
    </div>
  )
}

Home.getInitialProps = async ({req}) => {
  const res = await fetch("https://ahmetozmen.herokuapp.com/api/posts");
  const json = await res.json();
  json.reverse();
  return { posts: json };
};

export default Home;