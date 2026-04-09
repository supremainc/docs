import React from 'react';
import MDXContents from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function InDoc ({children, product, pages, type, ref, lang}) {
    const { i18n: {currentLocale}, siteConfig } = useDocusaurusContext();
    const isPreview = siteConfig.customFields.context === 'preview';
    const location = useLocation();
    const prodSplit = !isPreview ? 2 : 3;
    
    if (product) {
        const prods = Array.isArray(product) ? product : product.split(',');
        const cProd = currentLocale === "ko" ? location.pathname.split("/")[prodSplit] : location.pathname.split("/")[prodSplit + 1];
        const isProduct = prods.includes(cProd);

        return isProduct ? <MDXContents>{children}</MDXContents> : null;
    } else if (pages) {
        const Pages = Array.isArray(pages) ? pages : pages.split(',');
        const cPage = location.pathname.split("/");
        const lastPath = cPage[cPage.length - 1] !== "" ? cPage.length - 1 : cPage.length - 2;
        const isPage = Pages.includes(cPage[lastPath]);

        return isPage ? <MDXContents>{children}</MDXContents> : null;
    } else if (type && ref) {
        const isMatch = ref.split(',').map(t => t.trim()).includes(type);
        return isMatch ? <MDXContents>{children}</MDXContents> : null;
    } else if (lang) {
        const cLang = Array.isArray(lang) ? lang : lang.split(',');
        const isLang = cLang.includes(currentLocale);

        return isLang ? <MDXContents>{children}</MDXContents> : null;
    }
}