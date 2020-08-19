import React from 'react';
import fetch from 'isomorphic-unfetch'
import {Icon} from'react-icons-kit'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import {socialGithub,socialLinkedin,socialTwitter,iosPerson} from "react-icons-kit/ionicons"

const Blogpost = ({post}) => {
  return (
    <div className='tc'>
      <title>{post.title}</title>
      <h1 className='hero-title'><a href='https://ahmetozmen.herokuapp.com'>Ahmet Salih Özmen</a></h1>
      <Icon className='ma2' size={32} icon={iosPerson}/>
      <Link href='about'>
                <a>About me</a>
      </Link>
      <Icon className='ma2' size={32} icon={socialLinkedin}/>
      <a  href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank">LinkedIn</a>
      <Icon className='ma2' size={32} icon={socialGithub}/>
      <a  href="https://github.com/ahmetsalihozmen" target="_blank">GitHub</a>
      <Icon className='ma2' size={32} icon={socialTwitter}/>
      <a  href="https://twitter.com/vokulfenmah" target="_blank">Twitter</a>
      <div className='post'>
             <h1 className="post-title">
              {post.title}
            </h1>
            <div className='post-text'>
              <ReactMarkdown source={post.text}/>
             </div>
            <div className='post-date'>{post.date}</div>
          </div> 

      <style jsx>{`
      .blog-title{
        margin-bottom:10%;
      }
      a:hover , a{
        color: black;
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
        margin:30px;
      }
   
      `}</style>
    </div>
  )



}

Blogpost.getInitialProps =async({req,query})=>{
  const res = await fetch(`https://ahmetozmen.herokuapp.com/api/post/${query.postid}`)
  const json = await res.json();
  return {post: json.post};
};


export default Blogpost

