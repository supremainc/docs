import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';

function CardItem({Svg, img, title, url, height, desc}) {
  return (
    <div className={styles.cardItem}>
      <Link to={url} target='_blank'>
        <div className={styles.flex}>
          <div className={styles.logo}>
            {(Svg) && <Svg role="img" height={height} />}
            {(img) && <img src={img} width='auto' height={height} />}
          </div>
          <div className={styles.title}>
            <h3>{title}</h3>
            {(desc) && <p className={styles.desc} dangerouslySetInnerHTML={{__html: desc}} />}
          </div>
        </div>
      </Link>
    </div>
  )
}

export function ExternalLinkCard() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const externalLinks = [
    {
      title: 'BioStar 2',
      url: './platform/biostar2',
      Svg: require('@site/static/img/biostar2-logo.svg').default,
      height: '45px'
    },
    {
      title: 'Knowledge Center',
      url: `https://kb.supremainc.com/home/doku.php?id=${currentLocale}:start`,
      Svg: require('@site/static/img/knowledge-logo.svg').default,
      height: '45px'
    },
    {
      title: 'BioStar2 Device SDK',
      url: `https://kb.supremainc.com/bs2sdk/doku.php?id=${currentLocale}:start`,
      Svg: require('@site/static/img/biostar2-devicesdk.svg').default,
      height: '46px'
    },
    {
      title: 'BioStar2 API',
      url: 'https://bs2api.biostar2.com/',
      Svg: require('@site/static/img/biostar-api.svg').default,
      height: '45px'
    },
    {
      title: 'Suprema G-SDK',
      url: 'https://supremainc.github.io/g-sdk/',
      Svg: require('@site/static/img/gsdk.svg').default,
      height: '45px'
    }
  ];
  
  return (
    <div className={clsx('container', styles.grid)}>
      {/* Card item */}
      {externalLinks.map((props, idx) => (
        <CardItem key={idx} {...props} />
      ))}
    </div>
  )
}

export function ProductLinkCard() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const externalLinks = [
    {
      title: 'BioEntry W3',
      url: '#',
      img: 'https://www.supremainc.com/images/upload/products/EN/20240926152809218.png',
      height: '150px',
      desc: `${translate({
        id: "externalLinks.BioEntryW3.desc",
        message: "Simple, Durable, Secure<br/>AI 기반 얼굴인증 디바이스"
      })}`
    },
    {
      title: 'BioStation 3',
      url: `#`,
      img: 'https://www.suprema.co.kr/en/asset/images/thumbnail/biostation3.png',
      height: '150px',
      desc: 'The New Door Access Experience'
    },
    {
      title: 'BioStation 2a',
      url: `#`,
      img: 'https://www.supremainc.com/images/upload/products/EN/20231013111341886.png',
      height: '150px',
      desc: 'Feel the Power of AI'
    },
    {
      title: 'FaceStation F2',
      url: '#',
      img: 'https://www.suprema.co.kr/en/asset/images/thumbnail/facestation2_f2.png',
      height: '150px',
      desc: `${translate({
        id: "externalLinks.FaceStationF2.desc",
        message: "퓨전 얼굴인증 장치"
      })}`
    },
    {
      title: 'X-Station 2',
      url: '#',
      img: 'https://www.suprema.co.kr/en/asset/images/common/xStation2_OAPB_v2.png',
      height: '150px',
      desc: `${translate({
        id: "externalLinks.XStation2.desc",
        message: "차세대 모바일 출입인증 단말기"
      })}`
    }
  ];
  
  return (
    <div className={clsx('container', styles.product, styles.grid)}>
      {/* Card item */}
      {externalLinks.map((props, idx) => (
        <CardItem key={idx} {...props} />
      ))}
    </div>
  )
}
