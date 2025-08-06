import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import IcDown from '@site/static/img/menus/ico-down-arrow.svg';
import IcAcDoor from '@site/static/img/menus/ico-acdoor.svg';
import IcAcLevel from '@site/static/img/menus/ico-aclevel.svg';
import IcFloorLevel from '@site/static/img/menus/ico-floorlv.svg';
import IcFloorElev from '@site/static/img/menus/ico-flelev.svg';
import IcFlElevFl from '@site/static/img/menus/ico-flelevfl.svg';

const dataKo = [
    {
        name: "모든 출입 그룹",
        children: [
            {
                name: "출입 그룹",
                type: "access-group",
                children: [
                    {
                        name: "출입 등급 A",
                        type: "access-level",
                        children: [
                            {
                                name: "출입문 1 - 스케줄",
                                type: "door",
                            },
                            {
                                name: "출입문 2 - 스케줄",
                                type: "door",
                            }
                        ]
                    },
                    {
                        name: "층 등급 A",
                        type: "floor-level",
                        children: [
                            {
                                name: "엘리베이터 B",
                                type: "elevator",
                                children: [
                                    {
                                        name: "엘리베이터 B 1층 - 스케줄",
                                        type: "elevator-schedule",
                                    },
                                    {
                                        name: "엘리베이터 B 2층 - 스케줄",
                                        type: "elevator-schedule",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const dataEn = [
    {
        name: "All Access Groups",
        children: [
            {
                name: "Access Group",
                type: "access-group",
                children: [
                    {
                        name: "Access Level A",
                        type: "access-level",
                        children: [
                            {
                                name: "Door 1 - Schedule",
                                type: "door",
                            },
                            {
                                name: "Door 2 - Schedule",
                                type: "door",
                            }
                        ]
                    },
                    {
                        name: "Floor Level A",
                        type: "floor-level",
                        children: [
                            {
                                name: "Elevator B",
                                type: "elevator",
                                children: [
                                    {
                                        name: "Elevator B 1st Floor - Schedule",
                                        type: "elevator-schedule",
                                    },
                                    {
                                        name: "Elevator B 2nd Floor - Schedule",
                                        type: "elevator-schedule",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

// TreeNode 컴포넌트 - 개별 노드를 렌더링
function TreeNode({ node, level = 0 }) {
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className={styles.treeNode}>
            <div 
                className={`${styles.treeItem} ${styles[`level${level}`]}`}
                style={{ paddingLeft: `${level > 1 ? (level - 1) * 30 : 0}px` }}
            >
                {level == 1 && hasChildren && (
                    <span className={styles.treeToggle}>
                        <IcDown />
                    </span>
                )}
                {level > 1 && (
                    <span className={styles.treeIcon}>
                        {node.type === 'access-level' && <IcAcLevel height='25' width='auto' /> }
                        {node.type === 'door' && <IcAcDoor height='25' width='auto' /> }
                        {node.type === 'floor-level' && <IcFloorLevel height='25' width='auto' /> }
                        {node.type === 'elevator' && <IcFloorElev height='25' width='auto' /> }
                        {node.type === 'elevator-schedule' && <IcFlElevFl height='25' width='auto' /> }
                    </span>
                )}
                
                <span className={styles.treeLabel}>{node.name}</span>
            </div>
            
            {hasChildren && (
                <div className={styles.treeChildren}>
                    {node.children.map((child, index) => (
                        <TreeNode 
                            key={index} 
                            node={child} 
                            level={level + 1} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Treeview({ data: propData }) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const langData = {
        ko: dataKo,
        en: dataEn,
    }
    const data = langData[currentLocale] || langData.en;

    const treeData = propData || data;
    
    return (
        <div className={styles.treeviewContainer}>
            {treeData.map((node, index) => (
                <TreeNode key={index} node={node} level={0} />
            ))}
        </div>
    );
}