import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import Head from '@site/src/components/Head';
import clsx from 'clsx';
import Face from '@site/static/img/menus/spec-credential-face.svg';
import styles from './styles.module.css';

// 어노테이션 렌더링 유틸
function AnnotationSup({ id }) {
  if (!id) return null;
  return (
    <sup>
      <a href={`#${id}`}></a>
    </sup>
  );
}

function SupportedType({ type }) {
  let supportedType;
  if (type === true) {
    supportedType = '지원'
  } else {
    supportedType = '미지원'
  }
  return supportedType
}


export function CredentialSectioin({data}) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  
  const credentials = data.items;
  console.log(credentials);
  return (
    <>
      <Head level={2} hashid={data.label_id}>
        {translate({id: `${data.label_id}`})}
      </Head>

      <div className={styles.techspec}>
        {Object.values(credentials).map((item, index) => (
          <div className={styles.techspecSection}>
            {/* techspecsRowheader */}
            <div key={index} className={styles.techspecsRowheader}>
              {translate({id: item.label_id})}
              {item.annotation_label && <AnnotationSup id={item.annotation_label} />}
            </div>

            {/* techspecsBody */}
            <div key={index} className={styles.techspecsBody}>
              {item.items
                ? Object.values(item.items).map((subitem, subindex) => (
                    <div key={subindex}>{subitem.label}</div>
                  ))
                : (
                  <div>
                    {item.value.typeof === 'boolean' ? (
                      <SupportedType type={item.value} />
                    ) : item.value.typeof === 'string' ? (
                      {item.value}
                    )}
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


