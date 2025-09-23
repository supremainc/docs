import React, { createElement, Fragment, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { createRoot } from 'react-dom/client';
import { autocomplete } from '@algolia/autocomplete-js';
import styles from './styles.module.css';

export function Autocomplete(props) {
    const containerRef = useRef(null);
    const panelRootRef = useRef(null);
    const rootRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) {
        return undefined;
        }

        const search = autocomplete({
        container: containerRef.current,
        renderer: { createElement, Fragment, render: () => {} },
        render({ children }, root) {
            if (!panelRootRef.current || rootRef.current !== root) {
            rootRef.current = root;

            panelRootRef.current?.unmount();
            panelRootRef.current = createRoot(root);
            }

            panelRootRef.current.render(children);
        },
        ...props,
        });

        return () => {
        search.destroy();
        };
    }, [props]);

    return <div ref={containerRef} className='searchbox' />;
}

function replaceMark(content) {
    // const change = content.replaceAll('__aa-highlight__', '').replaceAll('__/aa-highlight__', '');
    const change = content;
    return change;
}

export function ProductItem({ hit, components }) {
    const titles = [ hit.hierarchy.lvl0, hit.hierarchy.lvl1, hit.hierarchy.lvl2, hit.hierarchy.lvl3, hit.hierarchy.lvl4, hit.hierarchy.lvl5 ];
    const title = titles.filter(
        (element, i) => element !== null
    );
    const last = title.length - 1;
    const durl = hit.url.replace("#__docusaurus_skipToContent_fallback", "").replace('https://supremainc.github.io/docs/', '/');
    // console.log(hit);
    return (
        <Link to={durl} target="_blank" className={styles.aaItemLink}>
            <div className={clsx("aa-ItemContent", styles.itemContent)}>
                <div className="aa-ItemTitle">
                    <div key={hit.id}>
                            <h3 className={styles.title}>{title[last]}</h3>
                            <div className={styles.hitbreadcrums}>
                                <span className={styles.hitname}>
                                    {/* {hit.hierarchy.lvl0} */}
                                    <components.Snippet attribute={['hierarchy', 'lvl0']} hit={hit} />
                                </span>
                                {!hit._snippetResult.sidelvl2.value == '' && (
                                    <span className={styles.hitname}>
                                        <components.Snippet attribute="sidelvl2" hit={hit} />
                                    </span>
                                )}
                                {!hit._snippetResult.sidelvl3.value == '' && (
                                    <span className={styles.hitname}>
                                        <components.Snippet attribute="sidelvl3" hit={hit} />
                                    </span>
                                )}
                                {!hit._snippetResult.sidelvl4.value == '' && (
                                    <span className={styles.hitname}>
                                        <components.Snippet attribute="sidelvl4" hit={hit} />
                                    </span>
                                )}
                            </div>
                        {hit.content && (
                            <div className={styles.content}>
                                <components.Snippet attribute="content" hit={hit} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}