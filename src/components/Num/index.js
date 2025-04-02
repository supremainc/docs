import Num01 from './num-1.svg';
import Num02 from './num-2.svg';
import Num03 from './num-3.svg';
import Num04 from './num-4.svg';
import Num05 from './num-5.svg';
import Num06 from './num-6.svg';
import Num07 from './num-7.svg';
import Num08 from './num-8.svg';
import Num09 from './num-9.svg';
import Num10 from './num-10.svg';
import Num11 from './num-11.svg';
import Num12 from './num-12.svg';
import Num13 from './num-13.svg';
import Num14 from './num-14.svg';
import Num15 from './num-15.svg';
import Num16 from './num-16.svg';
import Num17 from './num-17.svg';
import Num18 from './num-18.svg';
import Num19 from './num-19.svg';
import Num20 from './num-20.svg';
import styles from './styles.module.css';

// 모든 숫자 컴포넌트를 배열로 관리
const NumComponents = [
    Num01, Num02, Num03, Num04, Num05, 
    Num06, Num07, Num08, Num09, Num10,
    Num11, Num12, Num13, Num14, Num15,
    Num16, Num17, Num18, Num19, Num20
];

export default function Num({ num }) {
    // 유효한 숫자 범위 확인 (1-20)
    if (num < 1 || num > 20) {
        return null;
    }
    
    // 배열 인덱스는 0부터 시작하므로 num-1로 접근
    const NumComponent = NumComponents[num - 1];
    
    return (
        <span className={styles.leadNum}>
            <NumComponent />
        </span>
    );
}