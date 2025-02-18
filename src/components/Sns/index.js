import Link from '@docusaurus/Link';

const sns = [
  {
    link: 'http://pf.kakao.com/_xnkPxes',
    img: '/img/foot_sns_06.png',
  },
  {
    link: 'https://blog.naver.com/supremakr',
    img: '/img/foot_sns_05.png',
  },
  {
    link: 'https://www.youtube.com/user/supremainc',
    img: '/img/foot_sns_04.png',
  },
  {
    link: 'https://www.instagram.com/official.suprema/',
    img: '/img/foot_sns_instagram.svg',
    width: '35px',
  }
]

function snsList(item) {
  return (
    <li>
      <Link to={item.link} target='_blank'>
        <img src={item.img} {...(item.width && {
          width: item.width
          })} />
      </Link>
    </li>
  )
}

export default function SNS() {
  return (
    <div className='footer__bottom sns--right'>
      <ul className='sns__list'>
        {sns.map(snsList)}
      </ul>
    </div>
  )
}

