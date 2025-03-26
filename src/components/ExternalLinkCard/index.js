import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';

function CardItem({Svg, img, title, url, height, desc}) {
  return (
    <div className={styles.cardItem}>
      <Link to={url} target={(url.includes('biostar_x'))? '_self' : '_blank'}>
        <div className={styles.flex}>
          <div className={(title !== '')? clsx(styles.logo) : clsx(styles.logo, styles.center)}>
            {(Svg) && <Svg role="img" width='auto' height={height} />}
            {(img) && <img src={img} width='auto' height={height} />}
          </div>
          {
            (title) &&
            <div className={styles.title}>
              <h3>{title}</h3>
              {(desc) && <p className={styles.desc} dangerouslySetInnerHTML={{__html: desc}} />}
            </div>
          }
        </div>
      </Link>
    </div>
  )
}

export function ExternalLinkCard({ externalLinks: externalLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultExternalLinks = [
    {
      title: '',
      url: './platform/biostar_x',
      Svg: require('@site/static/img/logo-biostar-x.svg').default,
      height: '47px',
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
  const externalLinks = externalLinksProp || defaultExternalLinks;

  return (
    <div className={clsx('container', styles.grid)}>
      {externalLinks.map((props, idx) => (
        <CardItem key={idx} {...props} />
      ))}
    </div>
  );
}

export function ProductLinkCard({ productLinks: productLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultProductLinks = [
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
    },
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
  const productLinks = productLinksProp || defaultProductLinks;

  return (
    <div className={clsx('container', styles.product, styles.grid)}>
      {productLinks.map((props, idx) => (
        <CardItem key={idx} {...props} />
      ))}
    </div>
  );
}
