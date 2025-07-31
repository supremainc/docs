import React from 'react';
import styles from './styles.module.css';

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
  version,
  hierarchy = [],
  linkPrefix = "#"
}) => {
  const renderHierarchy = (items, level = 0) => {
    return (
      <div className={`${styles.hierarchyLevel} ${level > 0 ? styles.nestedLevel : ''}`}>
        {items.map((item, index) => (
          <div key={index} className={styles.hierarchyItem}>
            <div className={styles.hierarchyNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.hierarchyName}>{item.name}</span>
                {item.type && <span className={styles.hierarchyType}>{item.type}</span>}
                {item.size && <span className={styles.hierarchySize}>{item.size} bytes</span>}
              </div>
              {item.description && <div className={styles.hierarchyDesc}>{item.description}</div>}
              
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
            </div>
            
            {/* 연결선과 하위 계층 */}
            {item.children && item.children.length > 0 && (
              <div className={styles.childrenContainer}>
                {renderHierarchy(item.children, level + 1)}
              </div>
            )}
          </div>
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
          <h4 className={styles.structName} id={name.toLowerCase()}>
            {name}
          </h4>
          <div className={styles.metadata}>
            {category && <span className={styles.category}>{category}</span>}
            {size && <span className={styles.size}>{size} bytes</span>}
            {version && <span className={styles.version}>v{version}</span>}
          </div>
        </div>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {/* 구조체 정의 */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h4>구조체 정의</h4>
        </div>
        {code && (
          <div className={styles.codeBlock}>
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>

      {/* 구조 계층 */}
      {hierarchy.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h4>구조 계층</h4>
            <span className={styles.sectionSubtitle}>데이터 구조의 논리적 관계</span>
          </div>
          <div className={styles.hierarchyContainer}>
            {renderHierarchy(hierarchy)}
          </div>
        </div>
      )}

      {/* 메모리 레이아웃 */}
      {fields.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h4>메모리 레이아웃</h4>
            <span className={styles.sectionSubtitle}>{fields.length}개 필드</span>
          </div>
          <div className={styles.memoryBlocks}>
            {fields.map((field, index) => (
              <div key={index} className={styles.memoryBlock}>
                <div className={styles.memoryBlockHeader}>
                  <span className={styles.memoryOffset}>+{field.offset || (index * 4)}</span>
                  <span className={styles.memoryFieldName}>{field.name}</span>
                  <span className={styles.memoryType}>{field.type}</span>
                  {field.size && <span className={styles.memorySize}>{field.size}B</span>}
                </div>
                {field.description && <div className={styles.memoryDesc}>{field.description}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 필드 상세 */}
      {fields.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h4>필드 상세</h4>
          </div>
          <div className={styles.fieldsList}>
            {fields.map((field, index) => (
              <div key={index} className={styles.field}>
                <div className={styles.fieldHeader}>
                  <span className={styles.fieldNumber}>{index + 1}</span>
                  <span className={styles.fieldName}>{field.name}</span>
                  <span className={styles.fieldType}>{field.type}</span>
                  {field.size && <span className={styles.fieldSize}>{field.size}B</span>}
                  {field.range && <span className={styles.fieldRange}>{field.range}</span>}
                </div>
                <p className={styles.fieldDescription}>{field.description}</p>
                
                {/* 필드별 상수 테이블 */}
                {field.constants && field.constants.length > 0 && (
                  <div className={styles.fieldConstants}>
                    <h6>가능한 값</h6>
                    <table className={styles.constantsTable}>
                      <thead>
                        <tr>
                          <th>값</th>
                          <th>설명</th>
                          <th>사용된 형식</th>
                        </tr>
                      </thead>
                      <tbody>
                        {field.constants.map((constant, constIndex) => (
                          <tr key={constIndex}>
                            <td className={styles.constantValue}>{constant.value}</td>
                            <td>{constant.description}</td>
                            <td className={styles.constantNote}>{constant.note && constant.note}</td>
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
            <h4>상수 정의</h4>
            <span className={styles.sectionSubtitle}>{constants.length}개 상수</span>
          </div>
          <table className={styles.constantsTable}>
            <thead>
              <tr>
                <th>값</th>
                <th>설명</th>
                {constants[0].note && <th>비고</th>}
              </tr>
            </thead>
            <tbody>
              {constants.map((constant, index) => (
                <tr key={index}>
                  <td className={styles.constantValue}>{constant.value}</td>
                  <td>{constant.description}</td>
                  {constant.note && <td className={styles.constantNote}>{constant.note}</td>}
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
            <h4>의존성 관계</h4>
          </div>
          
          {dependencies.length > 0 && (
            <div className={styles.dependencyGroup}>
              <h5>이 구조체가 의존하는 타입</h5>
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
              <h5>이 구조체를 사용하는 타입</h5>
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

      {/* 참고사항 */}
      {notes.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h4>참고사항</h4>
          </div>
          <ul className={styles.notesList}>
            {notes.map((note, index) => (
              <li key={index} className={styles.note}>
                <div dangerouslySetInnerHTML={{ __html: note }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TypedefStruct;
