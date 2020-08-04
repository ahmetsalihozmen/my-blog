import {Icon} from'react-icons-kit'
import {socialGithub,socialLinkedin,socialTwitter} from "react-icons-kit/ionicons"
export default function Home() {
  return (
    <div className='tc'>
      <h1 className='hero-title'>Ahmet Salih Özmen</h1>
      <Icon className='ma2' size={32} icon={socialLinkedin}/>
      <a  href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank">LinkedIn</a>
      <Icon className='ma2' size={32} icon={socialGithub}/>
      <a  href="https://github.com/ahmetsalihozmen" target="_blank">GitHub</a>
      <Icon className='ma2' size={32} icon={socialTwitter}/>
      <a  href="https://twitter.com/vokulfenmah" target="_blank">Twitter</a>
      
      <style jsx>{`
      .hero-title{
        font-size:48px;
      }
      `}</style>
    </div>
  )
  
}
