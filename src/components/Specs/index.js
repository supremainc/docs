import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import Head from '@site/src/components/Head';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import glossary_ko from '@site/i18n/ko/glossary.json';
import glossary_en from '@site/i18n/en/glossary.json';
import DimenW from '@site/static/img/common/ico-w.svg';
import DimenH from '@site/static/img/common/ico-h.svg';
import DimenD from '@site/static/img/common/ico-d.svg';
import Face from '@site/static/img/menus/spec-credential-face.svg';
import Fingerprint from '@site/static/img/menus/spec-credential-finger.svg';

const glossaryMap = {
  ko: glossary_ko,
  en: glossary_en,
};

// 어노테이션 렌더링 유틸
export function AnnotationSup({ id }) {
  if (!id) return null;
  return (
    <sup id={`${id}_dest`}>
      <a href={`#${id}`}></a>
    </sup>
  );
}

export function Anno({ id, children }) {
  return (
    <span className='annotation' id={id}><Link to={`#${id}_dest`}>{children}</Link></span>
  )
}

function SupportedType({ supported, annot }) {
  let supportedType;
  if (supported === true) {
    supportedType = translate({id: 'specs.common.supported'});
  } else {
    supportedType = translate({id: 'specs.common.Notsupported'});
  }

  return (
    <>
      {supportedType}
      {annot && <AnnotationSup id={annot} />}
    </>
  );
}

function Description({ contents }) {
  return (
    <>{contents}</>
  )
}


export function SpecSection({data}) {
  const specs = data.items;
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const glossary = glossaryMap[currentLocale] || glossary_en;

  return (
    <>
      <Head level={2} hashid={data.label_id}>
        {translate({id: `${data.label_id}`})}
      </Head>

      <div className={styles.techspec}>
        {Object.values(specs).map((item, index) => (
          <div className={styles.techspecSection} key={item.label_id || index}>
            {/* techspecsRowheader */}
            <div className={styles.techspecsRowheader}>
              {item.label_link ? (
                <>
                  <Link to={item.label_link}>
                    {translate({id: item.label_id})}
                    <div className="tooltip" dangerouslySetInnerHTML={{__html: glossary[item.label_link.split('#')[1]].description}}/>
                  </Link>
                </>
              ) : (
                <>{translate({id: item.label_id})}</>
              )}
              {item.annotation_label && <AnnotationSup id={item.annotation_label} />}
            </div>
            
            {/* type에 따라 분기 techspecsBody */}
            {item.type === 'biometric' && (
              // type이 biometric인 경우
              <div className={styles.techspecsBody}>
                {item.items
                  ? Object.values(item.items).map((subitem) => (
                      <React.Fragment key={subitem.label_id || subitem.label}>
                        <div className={clsx(styles.column, styles.small_l1)}>
                          {subitem.type === 'face' && (
                            <Face width='80' height='80' />
                          )}
                          {subitem.type === 'fingerprint' && (
                            <Fingerprint width='80' height='80' />
                          )}
                        </div>
                        <div className={clsx(styles.column, styles.small_l2)}>
                          <p>
                            <strong>
                              {translate({id: subitem.label_id})}
                            </strong>
                            {subitem.badge && <span className='badge only'>{subitem.badge}</span>}
                          </p>
                          {subitem.items && (
                            <ul>
                              {Object.values(subitem.items).map((subsubitem) => (
                                <li key={subsubitem.label_id || subsubitem.label}>
                                  {translate({id: subsubitem.label_id})}
                                  {subsubitem.annotation_label && <AnnotationSup id={subsubitem.annotation_label} />}
                                  : {
                                    typeof subsubitem.value === 'boolean' ? (
                                      <SupportedType supported={subsubitem.value} annot={subsubitem.annotation_value} />
                                    ) : typeof subsubitem.value === 'string' ? (
                                      <Description contents={subsubitem.value} />
                                    ) : typeof subsubitem.value === 'object' ? (
                                      <Description contents={subsubitem.value[currentLocale]} />
                                    ) : null
                                  }
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </React.Fragment>
                    ))
                  : null
                }
              </div>
            )}

            {/* type에 따라 분기 model */}
            {item.type === 'model' && (
              <div className={styles.techspecsBody}>
                {Object.values(item.items).map((subitem, subindex) => (
                    <div key={subindex} className={styles.row}>
                      <div className={clsx(styles.column, styles.small_l1)} dangerouslySetInnerHTML={{__html: subitem.label}} />
                      <div className={clsx(styles.column, styles.small_l2)}>
                        <DescObj contents={subitem.value} />
                      </div>
                    </div>
                ))}
              </div>
            )}

            {!item.type && (
              // type이 없는 경우
              <div className={styles.techspecsBody}>
                {item.items
                  ? Object.values(item.items).map((subitem, subindex) => (
                      <div key={subindex}>
                        {subitem.label}
                        {subitem.annotation_label && <AnnotationSup id={subitem.annotation_label} />}
                      </div>
                    ))
                  : typeof item.value === 'boolean' ? (
                      <SupportedType supported={item.value} annot={item.annotation_value} />
                    ) : typeof item.value === 'string' ? (
                      <>
                        <Description contents={item.value} />
                        {item.annotation_value && <AnnotationSup id={item.annotation_value} />}
                      </>
                    ) : typeof item.value === 'object' ? (
                      <>
                        <DescObj contents={item.value} />
                        {item.annotation_value && <AnnotationSup id={item.annotation_value} />}
                      </>
                    ) : null
                }
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function DescObj( {contents} ) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  // console.log(typeof contents[currentLocale]);
  if (typeof contents[currentLocale] === 'string') {
    return (
      <>{contents[currentLocale]}</>
    )
  } else if (typeof contents[currentLocale] === 'object') {
    return (
      <ul>
        {Object.values(contents[currentLocale]).map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    )
  } else if (typeof contents === 'object') {
    return (
      <ul>
        {Object.values(contents).map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    )
  } else if (typeof contents === 'boolean') {
    return (
      <SupportedType supported={contents} />
    )
  } else if (typeof contents[currentLocale] === 'undefined') {
    return (
      <p dangerouslySetInnerHTML={{__html: contents}}></p>
    )
  }
}

export function SpecSizeWieght({data}) {
  const specs = data.items
  return (
    <>
      <div className='page-break' />
      <Head level={2} hashid={data.label_id}>
        {translate({id: `${data.label_id}`})}
      </Head>

      <div className={clsx(styles.techspec, styles.dimensions)}>
        {Object.values(specs).map((item, index) => (
          <div className={clsx(styles.techspecSection, styles.noborder)} key={item.label_id || index}>
            <div className={styles.techspecsRowheader}>
              {translate({id: item.label_id})}
            </div>
            <div className={styles.techspecsBody}>
              {item.product_img && (
                <div className={clsx(styles.column, styles.small_c5, styles.modelimg)}>
                  <img src={useBaseUrl(item.product_img)} />
                </div>
              )}
              <div className={clsx(styles.column, styles.small_c5, styles.desc)}>
                <ul>
                  {item.size && (
                    <li>
                      {translate({id: 'specs.size_weight.size'})}:
                      <ul>
                        <li>
                          <span className={styles.size}><DimenW /> {item.size.width}mm</span>
                        </li>
                        <li>
                          <span className={styles.size}><DimenH /> {item.size.height}mm</span>
                        </li>
                        <li>
                          <span className={styles.size}><DimenD /> {item.size.depth}mm</span>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li>
                    {translate({id: 'specs.size_weight.weight'})}:&nbsp;
                    {typeof item.weight === 'string' && (
                      <>
                        {item.weight}
                        {item.weight_include && (
                          <>&nbsp;{translate({id: 'specs.size_weight.bracket.weight_include'})}</>
                        )}
                      </>
                    )}
                    {typeof item.weight === 'object' && (
                      <ul>
                        {Object.values(item.weight).map((subitem, subindex) => (
                          <li key={subindex}>
                            {subitem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}