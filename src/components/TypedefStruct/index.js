import React from 'react';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Admonition from '@theme/Admonition';

const TypedefStruct = ({ 
  name, 
  description, 
  code,
  fields = [], 
  constants = [],
  notes = [],
  dependencies = [],
  usedBy = [],
  size,
  category,
  hierarchy = [],
  linkPrefix = "#"
}) => {
  const renderHierarchy = (items, level = 0) => {
    return (
      <div className={`${styles.hierarchyLevel} ${level > 0 ? styles.nestedLevel : styles.nestedLeveltop}`}>
        {items.map((item, index) => (
          <ul key={index} className={styles.hierarchyItem}>
            <li className={styles.hierarchyNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.hierarchyName}><a href={`#${item.name.toLowerCase()}`}>{item.name}</a></span>
                {item.type && <span className={styles.hierarchyType}>{item.type}</span>}
                {item.size && <span className={styles.hierarchySize}>{item.size} {item.size > 1 ? "bytes" : "byte"}</span>}
              </div>
              {item.description && <p className={styles.hierarchyDesc} dangerouslySetInnerHTML={{ __html: item.description }} />}
              {/* 필드별 상수 테이블 */}
              {item.constants && item.constants.length > 0 && (
                <div className={styles.fieldConstants}>
                  <Heading as='h6'>가능한 값</Heading>
                  <table className={styles.constantsTable}>
                    <thead>
                      <tr>
                        <th>값</th>
                        <th>설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.constants.map((constant, constIndex) => (
                        <tr key={constIndex}>
                          <td className={styles.constantValue}>{constant.value}</td>
                          <td><p dangerouslySetInnerHTML={{ __html: constant.description }} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {item.references && item.references.length > 0 && (
                <div className={styles.references}>
                  <span className={styles.referencesLabel}>참조:</span>
                  {item.references.map((ref, refIndex) => (
                    <a 
                      key={refIndex} 
                      href={`${linkPrefix}${ref.toLowerCase()}`}
                      className={styles.reference}
                    >
                      {ref}
                    </a>
                  ))}
                </div>
              )}
            </li>
            
            {/* 연결선과 하위 계층 */}
            {item.children && item.children.length > 0 && (
              <div className={styles.childrenContainer}>
                {renderHierarchy(item.children, level + 1)}
              </div>
            )}
          </ul>
        ))}
      </div>
    );
  };

  const renderStructLink = (structName) => {
    return (
      <a 
        href={`${linkPrefix}${structName.toLowerCase()}`}
        className={styles.structLink}
      >
        {structName}
      </a>
    );
  };

  return (
    <div className={styles.typedefContainer}>
      {/* 구조체 헤더 */}
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <Heading as='h3' id={name.toLowerCase()}>{name}</Heading>
          <div className={styles.metadata}>
            {category && <span className={styles.category}>{category}</span>}
            {size && <span className={styles.size}>{size} {size > 1 ? "bytes" : "byte"}</span>}
          </div>
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {/* 참고사항 */}
        {/* {notes.length > 0 && (
          <div className={styles.section}>
            <Admonition type="info">
              <ul>
                {notes.map((note, index) => (
                  <li key={index}>
                    <p dangerouslySetInnerHTML={{ __html: note }} />
                  </li>
                ))}
              </ul>
            </Admonition>
          </div>
        )} */}
      </div>

      {/* 구조체 정의 */}
      {/* <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <Heading as='h4'>구조체 정의</Heading>
        </div>
        {code && (
          <CodeBlock language='csharp'>{code}</CodeBlock>
        )}
      </div> */}

      {/* 구조 계층 */}
      {hierarchy.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Heading as='h4'>구조 계층</Heading>
          </div>
          <div className={styles.hierarchyContainer}>
            {renderHierarchy(hierarchy)}
          </div>
        </div>
      )}

      {/* 필드 상세 */}
      {fields.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Heading as='h4'>필드 상세</Heading>
          </div>
          <div className={styles.fieldsList}>
            {fields.map((field, index) => (
              <div key={index} className={styles.field}>
                <div className={styles.fieldHeader}>
                  <span className={styles.fieldNumber}>{index + 1}</span>
                  <span className={styles.fieldName} id={field.name.toLowerCase()}>{field.name}</span>
                  <span className={styles.fieldType}>{field.type}</span>
                  {field.size && <span className={styles.fieldSize}>{field.size} {field.size > 1 ? "bytes" : "byte"}</span>}
                  {field.range && <span className={styles.fieldRange}>{field.range}</span>}
                </div>
                <p className={styles.fieldDescription} dangerouslySetInnerHTML={{ __html: field.description }} />

                {/* 필드별 상수 테이블 */}
                {field.constants && field.constants.length > 0 && (
                  <div className={styles.fieldConstants}>
                    <Heading as='h6'>가능한 값</Heading>
                    <table className={styles.constantsTable}>
                      <thead>
                        <tr>
                          <th>값</th>
                          <th>설명</th>
                        </tr>
                      </thead>
                      <tbody>
                        {field.constants.map((constant, constIndex) => (
                          <tr key={constIndex}>
                            <td className={styles.constantValue}>{constant.value}</td>
                            <td><p dangerouslySetInnerHTML={{ __html: constant.description }} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 필드 관련 구조체 */}
                {field.relatedStructs && field.relatedStructs.length > 0 && (
                  <div className={styles.relatedStructs}>
                    <span className={styles.relatedLabel}>관련 구조체:</span>
                    {field.relatedStructs.map((struct, structIndex) => (
                      <span key={structIndex}>
                        {renderStructLink(struct)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 전역 상수 */}
      {constants.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Heading as='h4'>상수 정의</Heading>
            <span className={styles.sectionSubtitle}>{constants.length}개 상수</span>
          </div>
          <table className={styles.variantsTable}>
            <thead>
              <tr>
                <th>값</th>
                <th>설명</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {constants.map((constant, index) => (
                <tr key={index}>
                  <td className={styles.constantValue}>{constant.value}</td>
                  <td>{constant.description}</td>
                  <td>{constant.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 의존성 관계 */}
      {(dependencies.length > 0 || usedBy.length > 0) && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Heading as='h4'>의존성 관계</Heading>
          </div>
          
          {dependencies.length > 0 && (
            <div className={styles.dependencyGroup}>
              <Heading as='h5'>이 구조체가 의존하는 타입</Heading>
              <div className={styles.dependencyList}>
                {dependencies.map((dep, index) => (
                  <div key={index} className={styles.dependency}>
                    <span className={styles.depName}>
                      {renderStructLink(dep.name)}
                    </span>
                    <span className={styles.depType}>{dep.type}</span>
                    {dep.description && <span className={styles.depDesc}>{dep.description}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {usedBy.length > 0 && (
            <div className={styles.dependencyGroup}>
              <Heading as='h5'>이 구조체를 사용하는 타입</Heading>
              <div className={styles.dependencyList}>
                {usedBy.map((use, index) => (
                  <div key={index} className={styles.dependency}>
                    <span className={styles.depName}>
                      {renderStructLink(use.name)}
                    </span>
                    <span className={styles.depType}>{use.type}</span>
                    {use.description && <span className={styles.depDesc}>{use.description}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TypedefStruct;
