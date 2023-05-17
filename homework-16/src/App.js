import './App.css';
import img from './images/img.webp';
import avatar from './images/avatar.avif';
import checkmark from './images/checkmark.svg';
import messenger from './images/messenger.svg';
import retweet from './images/retweet.png';
import heart from './images/heart.png';
import download from './images/download.png';

function Twit () {
  const description = 'Loreen Eurovision 2023';
  const person = {
    author: {
    name: 'Carla Vineira',
    photo: avatar,
    nickname: '@Carla_V',
  },
    content: 'Who is winner? Loreen from Sweden wins Eurovision 2023',
    image: img,
    date: '13 may 2023',
}
 
  return (
    <div className='Post'>
      <div className='Author'>
        <img className='Author-img' src={person.author.photo} alt='woman'/>
        <h6 className='Author-name'>{person.author.name}</h6>
        <img className='Img-online' src={checkmark} alt='Check status icon'/>
        <p className='Author-nick'>{person.author.nickname}</p>
        <span className='Twit-date'>{person.date}</span>
      </div>
      <p className='Text'>{person.content}</p>
      <img
        className='Img' src={person.image} alt={description}
      />
      <div className='Social'>
        <div className='Icon Facebook-icon'>
          <img className='Social-icon' src={messenger} alt='facebook messenger'/>
          <span className='Counter'>543</span>
        </div>
        <div className='Icon'>
          <img className='Social-icon' src={retweet} alt='retweet icon'/>
          <span className='Counter'>134</span>
        </div>
        <div className='Icon'>
          <img className='Social-icon' src={heart} alt='favorite icon'/>
          <span className='Counter'>10453</span>
        </div>
        <div className='Icon'>
          <img className='Social-icon' src={download} alt='download icon'/>
          <span className='Counter'>736</span>
        </div>
      </div>
    </div>
  )
}

export default Twit;
