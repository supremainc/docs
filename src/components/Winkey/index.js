import {translate} from '@docusaurus/Translate';
import Winlogo from './win-logo.svg';

export function Start() {

    return (
        <>
            <span className='bold'>
                {translate({
                    id: "windows.key.start",
                })}
            </span> <Winlogo width='1rem' height='1rem' />
        </>
    )
}