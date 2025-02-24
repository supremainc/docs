import Link from '@docusaurus/Link';

const sns = [
  {
    link: 'http://pf.kakao.com/_xnkPxes',
    img: require('@site/static/img/foot_sns_06.png').default,
  },
  {
    link: 'https://blog.naver.com/supremakr',
    img: require('@site/static/img/foot_sns_05.png').default,
  },
  {
    link: 'https://www.youtube.com/user/supremainc',
    img: require('@site/static/img/foot_sns_04.png').default,
  },
  {
    link: 'https://www.instagram.com/official.suprema/',
    img: require('@site/static/img/foot_sns_instagram.png').default,
    width: '35px',
  }
]

function SnsList(item) {
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
        {sns.map((props, idx) => (
          <SnsList key={idx} {...props} />
        ))}
      </ul>
    </div>
  )
}

