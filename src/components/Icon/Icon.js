import './icon.scss'
import slack from '../../assets/slack.png'
import github from '../../assets/github.png'



const Icon = () => {

    const github1= 'https://github.com/oluwadaprof'
    const slack1= ' https://contact-me-workspace.slack.com'

  return (
    <div className='socials'>
        <a href={github1}><img src={github} alt="github"/></a>
        <a href={slack1}><img src={slack} alt="slack"/></a>
    </div>
  )
}

export default Icon