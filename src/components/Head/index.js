import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Head ({level, hashid, children, className}) {
    const Headertag = `h${level}`;
    let hid;
    const {
        navbar: {hideOnScroll},
    } = useThemeConfig();

    if (level === 'none') {
        return null
    }
    if (!hashid) {
        hid = children.join("_");
    } else {
        hid = hashid;
    }
    return (
        <Headertag 
            className={clsx(
                'anchor',
                hideOnScroll
                ? styles.anchorWithHideOnScrollNavbar
                : styles.anchorWithStickyNavbar,
                className
            )}
            id={hid}>
            {children}
            <Link
                className="hash-link"
                to={`#${hid}`}>
                &#8203;
            </Link>
        </Headertag>
    );
}