import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const snsKoLocale = [
  {
    link: 'http://pf.kakao.com/_xnkPxes',
    img: require('@site/static/img/foot_sns_06.png').default,
    alt: '카카오톡채널'
  },
  {
    link: 'https://blog.naver.com/supremakr',
    img: require('@site/static/img/foot_sns_05.png').default,
    alt: '네이버 블로그'
  },
  {
    link: 'https://www.facebook.com/supremaglobal',
    img: require('@site/static/img/foot_sns_02.png').default,
    alt: '페이스북'
  },
  {
    link: 'https://www.youtube.com/user/supremainc',
    img: require('@site/static/img/foot_sns_04.png').default,
    alt: '유튜브 채널'
  },
  {
    link: 'https://www.instagram.com/official.suprema/',
    img: require('@site/static/img/foot_sns_instagram.png').default,
    width: '35px',
    alt: '인스타그램'
  }
]

const snsEnLocale = [
  {
    link: 'https://www.linkedin.com/company/suprema-inc-',
    img: require('@site/static/img/foot_sns_01.png').default,
    alt: 'LinkedIn'
  },
  {
    link: 'https://www.facebook.com/supremaglobal',
    img: require('@site/static/img/foot_sns_02.png').default,
    alt: 'Facebook'
  },
  {
    link: 'https://www.youtube.com/user/supremainc',
    img: require('@site/static/img/foot_sns_04.png').default,
    alt: 'Youtube'
  },
  {
    link: 'https://www.instagram.com/official.suprema/',
    img: require('@site/static/img/foot_sns_instagram.png').default,
    width: '35px',
    alt: 'Instagram'
  }
]

const snsList = {
  ko: snsKoLocale,
  en: snsEnLocale,
}

function SnsList(item) {
  return (
    <li>
      <Link to={item.link} target='_blank'>
        <img src={item.img} {...(item.width && {
          width: item.width
          })}
          alt={item.alt}
          />
      </Link>
    </li>
  )
}

export default function SNS() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const sns = snsList[currentLocale] || snsList.en;
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

