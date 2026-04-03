import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';
import PlaStore from '@site/static/img/ico-playstore.svg';
import AppStore from '@site/static/img/ico-appstore.svg';

function CardItem({img, title, url, height, desc, tags}) {
  return (
    <Link to={url} className={styles.productLink}>
      <div className={styles.cardItem}>
        <div className={styles.productImg}>
          {(img) && <img src={img} width='auto' height={height} />}
        </div>
        {
          (title) &&
          <div className={styles.title}>
            <h3>{title}</h3>
            {(desc) && <p className={styles.desc} dangerouslySetInnerHTML={{__html: desc}} />}
            {(tags) && <div className={styles.tags}>{tags.map((tag, idx) => <code key={idx}>{tag}</code>)}</div>}
          </div>
        }
      </div>
    </Link>
  )
}

function ExternalLinkBanner({Svg, img, title, url, desc, height, play, ios, linkText}) {
  return (
    <div className={styles.externalLinkitem}>
      <div className={styles.externalLinkLogo}>
        <div className={styles.circle}>
          {(Svg) && <Svg role="img" width='100%' height={height} />}
          {(img) && <img src={img} width='auto' height={height} />}
        </div>
      </div>
      <div className={styles.externalLiinkDesc}>
        <Heading as='h3' className={styles.externalLinkTitle}>
          {title}
          {linkText && <span className={styles.externalShortcut}><Link to={url} className={styles.externalLink}>{linkText}</Link></span>}
        </Heading>
        {desc && <p className={styles.externalLinkDesc} dangerouslySetInnerHTML={{__html: desc}} />}
        {play && <a href={play} target='_blank' className={styles.storeLink}><PlaStore /></a>}
        {ios && <a href={ios} target='_blank' className={styles.storeLink}><AppStore /></a>}
      </div>
    </div>
  );
}

export function ExternalLinkCard({ externalLinks: externalLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const cLocale = currentLocale !== 'ko' ? 'en' : 'ko';
  const defaultExternalLinks = [
    {
      title: 'BioStar X API',
      url: '/api/bsxapi',
      Svg: require('@site/static/img/cover-api.svg').default,
      height: '60px',
      desc: `${translate({ id: "externalLinks.dev.xapi.desc" })}`,
      linkText: `${translate({ id: "index.shortcut.linkText" })}`
    },
    {
      title: 'BioStar Air Developer',
      url: 'https://developers.biostarair.com',
      Svg: require('@site/static/img/cover-air-dev.svg').default,
      height: '60px',
      desc: `${translate({ id: "externalLinks.dev.bsair.desc" })}`,
      linkText: `${translate({ id: "index.shortcut.linkText" })}`
    },
    {
      title: 'BioStar Device SDK',
      url: `https://kb.supremainc.com/bs2sdk/doku.php?id=${cLocale}:start`,
      Svg: require('@site/static/img/cover-sdk.svg').default,
      height: '60px',
      desc: `${translate({ id: "externalLinks.dev.sdk.desc" })}`,
      linkText: `${translate({ id: "index.shortcut.linkText" })}`
    },
    {
      title: 'BioStar 2 API',
      url: 'https://bs2api.biostar2.com/',
      Svg: require('@site/static/img/cover-bs2-api.svg').default,
      height: '60px',
      desc: `${translate({ id: "externalLinks.dev.2api.desc" })}`,
      linkText: `${translate({ id: "index.shortcut.linkText" })}`
    },
    {
      title: 'Suprema G-SDK',
      url: 'https://supremainc.github.io/g-sdk/',
      Svg: require('@site/static/img/cover-gsdk.svg').default,
      height: '60px',
      desc: `${translate({ id: "externalLinks.dev.gsdk.desc" })}`,
      linkText: `${translate({ id: "index.shortcut.linkText" })}`
    },
    {
      title: 'SVP Android SDK',
      url: `https://kb.supremainc.com/svpsdk/doku.php?id=${cLocale}:start`,
      Svg: require('@site/static/img/cover-svp-sdk.svg').default,
      height: '60px',
      desc: `${translate({ id: "externalLinks.dev.svpsdk.desc" })}`,
      linkText: `${translate({ id: "index.shortcut.linkText" })}`
    }
  ];
  const externalLinks = externalLinksProp || defaultExternalLinks;

  return (
    <div className={clsx('container', styles.grid, styles.externalLinks)}>
      {externalLinks.map((props, idx) => (
        <ExternalLinkBanner key={idx} {...props} />
      ))}
    </div>
  );
}

export function AiCamera({ productLinks: productLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultProductLinks = [
    {
      title: 'ViOnyx',
      url: `/device/vionyx`,
      img: require('@site/static/img/camera/product-vionyx.png').default,
      desc: `${translate({
        id: "externalLinks.ViOnyx.desc",
        message: "AI 기반 지능형 영상 분석 카메라"
      })}`,
      height: '60px'
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

export function BiometricReader({ productLinks: productLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultProductLinks = [
    {
      title: 'BioStation 3 Max',
      url: `/device/biostation_3_max`,
      img: require('@site/static/img/cover/biostation-3max.jpg').default,
      desc: `${translate({
        id: "externalLinks.BioStation3Max.desc",
        message: "###"
      })}`,
      tags: ['AI', 'Face', 'RTSP', 'Touch Screen']
    },
    {
      title: 'BioEntry W3',
      url: `/device/bioentry_w3`,
      img: require('@site/static/img/cover/bioentry-w3.jpg').default,
      desc: `${translate({
        id: "externalLinks.BioEntryW3.desc",
        message: "Simple, Durable, Secure<br/>AI 기반 얼굴인증 디바이스"
      })}`,
      tags: ['AI', 'Face', 'RTSP']
    },
    {
      title: 'BioStation 2a',
      url: `/device/biostation_2a`,
      img: require('@site/static/img/cover/biostation-2a.png').default,
      desc: `${translate({
        id: "externalLinks.BioStation2a.desc",
        message: "AI 프로세서의 놀라운 지문 인식 성능"
      })}`,
      tags: ['AI', 'Fingerprint']
    },
    {
      title: 'BioStation 3',
      url: `/device/biostation_3`,
      img: require('@site/static/img/cover/biostation-3.jpg').default,
      desc: `${translate({
        id: "externalLinks.BioStation3.desc",
        message: "차세대 출입통제 솔루션"
      })}`,
      tags: ['AI', 'Face', 'RTSP', 'Touch Screen', 'QR/Barcode']
    },
    {
      title: 'FaceStation F2',
      url: '/device/facestation_f2',
      img: require('@site/static/img/cover/facestation-f2.jpg').default,
      desc: `${translate({
        id: "externalLinks.FaceStationF2.desc",
        message: "퓨전 얼굴인증 장치"
      })}`,
      tags: ['Fusion Matching', 'Face', 'Fingerprint', 'Touch Screen']
    },
    {
      title: 'FaceStation 2',
      url: `/device/facestation_2`,
      img: require('@site/static/img/cover/facestation-2.png').default,
      desc: `${translate({
        id: "externalLinks.FaceStation2.desc",
        message: "얼굴 인증 출입근태 단말기"
      })}`,
      tags: ['Face', 'Touch Screen']
    },
    {
      title: 'BioLite N2',
      url: `/device/biolite_n2`,
      img: require('@site/static/img/cover/biolite-n2.png').default,
      desc: `${translate({
        id: "externalLinks.BioLiteN2.desc",
        message: "옥외형 지문 인식 출입·근태 장치"
      })}`,
      tags: ['Fingerprint']
    },
    {
      title: 'BioEntry W2',
      url: `/device/bioentry_w2`,
      img: require('@site/static/img/cover/bioentry-w2.png').default,
      desc: `${translate({
        id: "externalLinks.BioentryW2.desc",
        message: "옥외형 지문인식 출입통제 단말기"
      })}`,
      tags: ['Fingerprint']
    },
    {
      title: 'BioEntry P2',
      url: `/device/bioentry_p2`,
      img: require('@site/static/img/cover/bioentry-p2.png').default,
      desc: `${translate({
        id: "externalLinks.BioentryP2.desc",
        message: "콤팩트 지문인식 단말기"
      })}`,
      tags: ['Fingerprint']
    },
    {
      title: 'BioEntry R2',
      url: `/device/bioentry_r2`,
      img: require('@site/static/img/cover/bioentry-r2.jpg').default,
      desc: `${translate({
        id: "externalLinks.BioentryP2.desc",
        message: "콤팩트 지문인식 리더"
      })}`,
      tags: ['Fingerprint', 'Reader']
    },
    {
      title: 'X-Station 2',
      url: `/device/xstation_2`,
      img: require('@site/static/img/cover/x-station-2-oapb.png').default,
      desc: `${translate({
        id: "externalLinks.XStation2.desc",
        message: "차세대 모바일 출입인증 단말기"
      })}`,
      tags: ['Fingerprint', 'Touch Screen', 'QR/Barcode']
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

export function RfMobileDevices({ productLinks: productLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultProductLinks = [
    {
      title: 'XPass Q2',
      url: `/device/xpass_q2`,
      img: require('@site/static/img/cover/xpass-q2.jpg').default,
      desc: `${translate({
        id: "externalLinks.XPassQ2.desc",
        message: "카드 및 QR/바코드 인증 지원 출입 통제 장치"
      })}`,
      tags: ['Card', 'QR/Barcode']
    },
    {
      title: 'X-Station 2',
      url: `/device/xstation_2`,
      img: require('@site/static/img/cover/x-station-2-odpb.png').default,
      desc: `${translate({
        id: "externalLinks.XStation2.desc",
        message: "차세대 모바일 출입인증 단말기"
      })}`,
      tags: ['Touch Screen', 'QR/Barcode']
    },
    {
      title: 'XPass 2',
      url: `/device/xpass_2`,
      img: require('@site/static/img/cover/xpass-2.jpg').default,
      desc:  `${translate({
        id: "externalLinks.XPass2.desc",
        message: "옥외형 콤팩트 RFID 장치"
      })}`,
      tags: ['RFID']
    },
    {
      title: 'XPass D2',
      url: `/device/xpass_d2`,
      img: require('@site/static/img/cover/xpass-d2.jpg').default,
      desc: `${translate({
        id: "externalLinks.XPass2.desc",
        message: "옥외형 콤팩트 RFID 리더"
      })}`,
      tags: ['RFID', 'Reader']
    },
    {
      title: 'XPass S2',
      url: `/device/xpass_s2`,
      img: require('@site/static/img/cover/xpass-s2.jpg').default,
      desc: `${translate({
        id: "externalLinks.XPassS2.desc",
        message: "IP RFID 출입통제 단말기"
      })}`,
      tags: ['RFID']
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

export function IntenlligentController({ productLinks: productLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultProductLinks = [
    {
      title: 'CoreStation 20',
      url: '/device/corestation_20',
      img: require('@site/static/img/cover/corestation-20.jpg').default,
      desc: `${translate({
        id: "externalLinks.CoreStation20.desc",
        message: "강력한 보안, 유연한 확장성"
      })}`,
      tags: ['ACU', '2 Door']
    },
    {
      title: 'CoreStation',
      url: '/device/corestation_40',
      img: require('@site/static/img/cover/corestation.jpg').default,
      desc: `${translate({
        id: "externalLinks.CoreStation.desc",
        message: "지능형 바이오인식 컨트롤러"
      })}`,
      tags: ['ACU']
    },
    {
      title: 'Enclosure',
      url: '/device/enclosure',
      img: require('@site/static/img/cover/encr-10.png').default,
      desc: `${translate({
        id: "externalLinks.CoreStationEnclosure.desc",
        message: "CoreStation 전용 함체"
      })}`,
      tags: ['Protection', 'for CoreStation']
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

export function Peripheral({ productLinks: productLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultProductLinks = [
    {
      title: 'Door Interface',
      url: '/device/doorinterface',
      img: 'https://www.supremainc.com/images/upload/products/EN/20250512100138876.webp',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.di24.desc",
        message: "확장 가능한 제어, 끊김 없는 출입"
      })}`,
      tags: ['2 Door', '4 Reader']
    },
    {
      title: 'Input Module',
      url: '/device/inputmodule',
      img: 'https://www.supremainc.com/images/upload/products/EN/20220103105515875.png',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.im120.desc",
        message: "다중 입력 확장 모듈"
      })}`,
      tags: ['Input Extension']
    },
    {
      title: 'Output Module',
      url: '/device/outputmodule',
      img: 'https://supremainc.com/ko/asset/images/thumbnail/om-120.png',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.om120.desc",
        message: "다중 출력 제어 모듈"
      })}`,
      tags: ['Output Extension', 'Elevator Control']
    },
    {
      title: 'Door Module',
      url: '/device/doormodule',
      img: 'https://www.supremainc.com/ko/asset/images/thumbnail/dm-20.png',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.dm20.desc",
        message: "다중 출입문 보안 I/O 모듈"
      })}`,
      tags: ['Door Control', 'I/O Module']
    },
    {
      title: 'Secure Module',
      url: '/device/securemodule',
      img: 'https://supremainc.com/ko/asset/images/thumbnail/secureio2.png',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.sio2.desc",
        message: "출입문 보안 컨트롤 모듈"
      })}`,
      tags: ['Door Control', 'Relay']
    },
    {
      title: 'Extended Module',
      url: '/device/extendedmodule',
      img: require('@site/static/img/device/extendedmodule-main.png').default,
      desc: `${translate({
        id: "externalLinks.peripheral.extendedmodule.desc",
        message: "확장형 통신 및 보안 모듈"
      })}`,
      tags: ['Extension', 'SAM']
    },
    {
      title: 'Extended Module-SC',
      url: '/device/extendedmodule_sc',
      img: require('@site/static/img/device/extendedmodule-sc-main.png').default,
      desc: `${translate({
        id: "externalLinks.peripheral.extendedmodule.desc",
        message: "확장형 통신 및 보안 모듈"
      })}`,
      tags: ['Extension']
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

export function Apps({ externalLinks: externalLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultExternalLinks = [
    {
      title: 'BioStar Air',
      play: 'https://play.google.com/store/apps/details?id=com.supremainc.biostarair',
      ios: 'https://apps.apple.com/app/biostar-air/id6745057397',
      Svg: require('@site/static/img/bsair-app.svg').default,
      height: '60px'
    },
    {
      title: 'Suprema Pass',
      play: 'https://play.google.com/store/apps/details?id=com.supremainc.supremapass',
      ios: 'https://apps.apple.com/no/app/suprema-pass/id6745057639',
      img: require('@site/static/img/sup-pass-app.png').default,
      height: '60px'
    },
    {
      title: 'Device Manager',
      url: '/device/device_manager',
      Svg: require('@site/static/img/cover-device-manager.svg').default,
      height: '60px',
      desc: `${translate({
        id: "externalLinks.apps.devicemanager.desc",
        message: "모바일 기반 출입통제 장치 관리 애플리케이션"
      })}`,
      linkText: `${translate({ id: "index.shortcut.linkText" })}`
    },
    {
      title: 'CoreStation Setup Manager',
      url: '/device/corestation_setup_manager',
      Svg: require('/img/device/cs-setup-manager.svg').default,
      height: '60px',
      desc: `${translate({
        id: "externalLinks.apps.setupmanager.desc",
        message: "중앙집중형 출입통제 관리 웹서버"
      })}`,
      linkText: `${translate({ id: "index.shortcut.linkText" })}`
    }
  ];
  const externalLinks = externalLinksProp || defaultExternalLinks;

  return (
    <div className={clsx('container', styles.grid, styles.externalLinks)}>
      {externalLinks.map((props, idx) => (
        <ExternalLinkBanner key={idx} {...props} />
      ))}
    </div>
  );
}