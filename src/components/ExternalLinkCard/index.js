import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';

function CardItem({img, title, url, height, desc}) {
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
          </div>
        }
      </div>
    </Link>
  )
}

function ExternalLinkBanner({Svg, title, url, desc, height}) {
  return (
    <Link to={url} className={styles.externalLink}>
      <div className={styles.externalLinkitem}>
        <div className={styles.externalLinkLogo}>
          <div className={styles.circle}>{(Svg) && <Svg role="img" width='100%' height={height} />}</div>
        </div>
        <div className={styles.externalLiinkDesc}>
          <Heading as='h3' className={styles.externalLinkTitle}>{title}</Heading>
          <p className={styles.externalLinkDesc} dangerouslySetInnerHTML={{__html: desc}} />
        </div>
      </div>
    </Link>
  );
}

export function ExternalLinkCard({ externalLinks: externalLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultExternalLinks = [
    {
      title: 'BioStar Device SDK',
      url: `https://kb.supremainc.com/bs2sdk/doku.php?id=${currentLocale}:start`,
      Svg: require('@site/static/img/biostar2-devicesdk.svg').default,
      height: '45px',
      desc: '지문 인식 장치의 핵심 기능을<br/>타사 소프트웨어와 완벽한 통합 지원'
    },
    {
      title: 'BioStar2 API',
      url: 'https://bs2api.biostar2.com/',
      Svg: require('@site/static/img/biostar-api.svg').default,
      height: '45px',
      desc: 'BioStar2의 모든 API를<br/>한눈에 볼 수 있는 API 문서'
    },
    {
      title: 'Suprema G-SDK',
      url: 'https://supremainc.github.io/g-sdk/',
      Svg: require('@site/static/img/gsdk.svg').default,
      height: '45px',
      desc: '다양한 프로그래밍 언어 지원하는<br/>크로스 플랫폼 솔루션'
    },
    {
      title: 'SVP Android SDK',
      url: `https://kb.supremainc.com/svpsdk/doku.php?id=${currentLocale}:getting_started`,
      Svg: require('@site/static/img/banner/android-banner.svg').default,
      height: '45px',
      desc: '슈프리마 장치의 핵심 기능을<br/> 타 소프트웨어에서 지원'
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

export function BiometricReader({ productLinks: productLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultProductLinks = [
    {
      title: 'BioStation 3 Max',
      url: `/device/biostation_3_max`,
      img: '#',
      //img: require('@site/static/img/device/xpass_q2.png').default,
      desc: 'BioStation 3 Max',
    },
    {
      title: 'BioEntry W3',
      url: `/device/bioentry_w3`,
      img: 'https://www.supremainc.com/images/upload/products/EN/20240926152809218.png',
      desc: `${translate({
        id: "externalLinks.BioEntryW3.desc",
        message: "Simple, Durable, Secure<br/>AI 기반 얼굴인증 디바이스"
      })}`
    },
    {
      title: 'BioStation 2a',
      url: `/device/biostation_2a`,
      img: 'https://www.supremainc.com/images/upload/products/EN/20231013111341886.png',
      desc: 'Feel the Power of AI',
      height: '90px'
    },
    {
      title: 'BioStation 3',
      url: `/device/biostation_3`,
      img: 'https://www.suprema.co.kr/en/asset/images/thumbnail/biostation3.png',
      desc: 'The New Door Access Experience'
    },
    {
      title: 'FaceStation F2',
      url: '/device/facestation_f2',
      img: 'https://www.suprema.co.kr/en/asset/images/thumbnail/facestation2_f2.png',
      desc: `${translate({
        id: "externalLinks.FaceStationF2.desc",
        message: "퓨전 얼굴인증 장치"
      })}`,
      height: '85px'
    },
    {
      title: 'FaceStation 2',
      url: `/device/facestation_2`,
      img: 'https://www.supremainc.com/ko/asset/images/thumbnail/facestation2.png',
      desc: `${translate({
        id: "externalLinks.FaceStation2.desc",
        message: "얼굴 인증 출입근태 단말기"
      })}`,
      height: '90px'
    },
    {
      title: 'BioLite N2',
      url: `/device/biolite_n2`,
      img: 'https://supremainc.com/ko/asset/images/thumbnail/bioliten2.png',
      desc: `${translate({
        id: "externalLinks.BioLiteN2.desc",
        message: "옥외형 지문 인식 출입·근태 장치"
      })}`,
      height: '90px'
    },
    {
      title: 'BioEntry W2',
      url: `/device/bioentry_w2`,
      img: 'https://supremainc.com/ko/asset/images/thumbnail/bioentryw2.png',
      desc: `${translate({
        id: "externalLinks.BioentryW2.desc",
        message: "옥외형 지문인식 출입통제 단말기"
      })}`,
      height: '90px'
    },
    {
      title: 'BioEntry P2',
      url: `/device/bioentry_p2`,
      img: 'https://supremainc.com/ko/asset/images/thumbnail/bioentryp2.png',
      desc: `${translate({
        id: "externalLinks.BioentryP2.desc",
        message: "콤팩트 지문인식 단말기"
      })}`,
      height: '90px'
    },
    {
      title: 'BioEntry R2',
      url: `/device/bioentry_r2`,
      img: 'https://supremainc.com/ko/asset/images/thumbnail/bioentryr2.png',
      desc: `${translate({
        id: "externalLinks.BioentryP2.desc"
      })}`,
      height: '90px'
    },
    {
      title: 'X-Station 2',
      url: `/device/xstation_2`,
      img: 'https://supremainc.com/en/asset/images/common/xStation2_OAPB_v2.png',
      desc: `${translate({
        id: "externalLinks.XStation2.desc",
        message: "차세대 모바일 출입인증 단말기"
      })}`,
      height: '90px'
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
      img: require('@site/static/img/device/xpass_q2.png').default,
      desc: `${translate({
        id: "externalLinks.XPassQ2.desc",
        message: "카드 및 QR/바코드 인증 지원 출입 통제 장치"
      })}`
    },
    {
      title: 'X-Station 2',
      url: `/device/xstation_2`,
      img: 'https://supremainc.com/en/asset/images/thumbnail/xStation2.png',
      desc: `${translate({
        id: "externalLinks.XStation2.desc",
      })}`
    },
    {
      title: 'XPass 2',
      url: `/device/xpass_2`,
      img: 'https://supremainc.com/ko/asset/images/thumbnail/xpassd2.png',
      desc:  `${translate({
        id: "externalLinks.XPass2.desc",
        message: "옥외형 콤팩트 RFID 리더"
      })}`
    },
    {
      title: 'XPass D2',
      url: `/device/xpass_d2`,
      img: 'https://supremainc.com/ko/asset/images/thumbnail/xpassd2.png',
      desc: `${translate({
        id: "externalLinks.XPass2.desc",
      })}`,
    },
    {
      title: 'XPass S2',
      url: `/device/xpass_s2`,
      img: 'https://supremainc.com/ko/asset/images/thumbnail/xpasss2.png',
      desc: `${translate({
        id: "externalLinks.XPassS2.desc",
        message: "IP RFID 출입통제 단말기"
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

export function IntenlligentController({ productLinks: productLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultProductLinks = [
    {
      title: 'CoreStation 20',
      url: '/device/corestation_20',
      img: 'https://www.supremainc.com/images/upload/products/EN/20250306163802329.png',
      desc: 'Powerful Security, Flexible Expansion'
    },
    {
      title: 'CoreStation',
      url: '/device/corestation_40',
      img: 'https://supremainc.com/ko/asset/images/thumbnail/corestation.png',
      desc: `${translate({
        id: "externalLinks.CoreStation.desc",
        message: "지능형 바이오인식 컨트롤러"
      })}`
    },
    {
      title: 'Enclosure',
      url: '/device/enclosure',
      img: 'https://supremainc.com/ko/asset/images/thumbnail/encr-10.png',
      desc: `${translate({
        id: "externalLinks.CoreStationEnclosure.desc",
        message: "CoreStation 전용 함체"
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
      })}`
    },
    {
      title: 'Input Module',
      url: '/device/inputmodule',
      img: 'https://www.supremainc.com/images/upload/products/EN/20220103105515875.png',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.im120.desc",
        message: "다중 입력 확장 모듈"
      })}`
    },
    {
      title: 'Output Module',
      url: '/device/outputmodule',
      img: 'https://supremainc.com/ko/asset/images/thumbnail/om-120.png',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.om120.desc",
        message: "다중 출력 제어 모듈"
      })}`
    },
    {
      title: 'Door Module',
      url: '/device/doormodule',
      img: 'https://www.supremainc.com/ko/asset/images/thumbnail/dm-20.png',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.dm20.desc",
        message: "다중 출입문 보안 I/O 모듈"
      })}`
    },
    {
      title: 'Secure Module',
      url: '/device/securemodule',
      img: 'https://supremainc.com/ko/asset/images/thumbnail/secureio2.png',
      height: '90px',
      desc: `${translate({
        id: "externalLinks.peripheral.sio2.desc",
        message: "출입문 보안 컨트롤 모듈"
      })}`
    },
    {
      title: 'Extended Module',
      url: '/device/extendedmodule',
      img: require('@site/static/img/device/extended-module.png').default,
      desc: `${translate({
        id: "externalLinks.peripheral.extendedmodule.desc",
        message: "확장형 통신 및 보안 모듈"
      })}`
    },
    {
      title: 'Extended Module-SC',
      url: '/device/extendedmodule_sc',
      img: require('@site/static/img/device/extended-module-sc.png').default,
      desc: `${translate({
        id: "externalLinks.peripheral.extendedmodule.desc",
        message: "확장형 통신 및 보안 모듈"
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

export function Apps({ externalLinks: externalLinksProp }) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const defaultExternalLinks = [
    {
      title: 'Device Manager',
      url: '/device/device_manager',
      Svg: require('/img/device/device-manager.svg').default,
      height: '45px',
      desc: `${translate({
        id: "externalLinks.apps.devicemanager.desc",
        message: "모바일 기반 출입통제 장치 관리 애플리케이션"
      })}`
    },
    {
      title: 'CoreStation Setup Manager',
      url: '/device/corestation_setup_manager',
      Svg: require('/img/device/cs-setup-manager.svg').default,
      height: '45px',
      desc: `${translate({
        id: "externalLinks.apps.setupmanager.desc",
        message: "중앙집중형 출입통제 관리 웹서버"
      })}`
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