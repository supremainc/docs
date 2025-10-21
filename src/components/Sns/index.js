import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const snsKoLocale = [
  {
    link: 'http://pf.kakao.com/_xnkPxes',
    img: require('@site/static/img/foot_sns_06.png').default,
  },
  {
    link: 'https://blog.naver.com/supremakr',
    img: require('@site/static/img/foot_sns_05.png').default,
  },
  {
    link: 'https://www.facebook.com/supremaglobal',
    img: require('@site/static/img/foot_sns_02.png').default,
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

const snsEnLocale = [
  {
    link: 'https://www.linkedin.com/company/suprema-inc-',
    img: require('@site/static/img/foot_sns_01.png').default,
  },
  {
    link: 'https://www.facebook.com/supremaglobal',
    img: require('@site/static/img/foot_sns_02.png').default,
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
          })} />
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

