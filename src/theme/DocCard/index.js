import React from 'react';
import {
  useDocById,
  useDocsVersion,
  useDocsData,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {
  extractLeadingEmoji,
  useDocCardDescriptionCategoryItemsPlural,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Layout from '@theme/DocCard/Layout';
function getFallbackEmojiIcon(item) {
  if (item.type === 'category') {
    return '🗃️';
  }
  return isInternalUrl(item.href) ? '📄️' : '🔗';
}
function getIconTitleProps(item) {
  const extracted = extractLeadingEmoji(item.label);
  const emoji = extracted.emoji ?? getFallbackEmojiIcon(item);
  return {
    icon: emoji,
    title: extracted.rest.trim(),
  };
}
function CardCategory({item}) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();
  const version = useDocsVersion();
  // 전역 데이터의 doc.path는 baseUrl·locale이 포함된 실제 경로(예: /en/developer/...)이므로
  // href와 정확히 일치하는 문서를 찾아 docId를 얻는다. 문자열 치환은 locale 접두사를 깨뜨린다.
  const globalVersion = useDocsData(version.pluginId).versions.find(
    (v) => v.name === version.version,
  );
  const docId = href
    ? globalVersion?.docs.find((doc) => doc.path === href)?.id
    : undefined;
  // useDocById는 id에 해당하는 문서가 없으면 예외를 던지므로,
  // href에서 추정한 docId(자동 생성 카테고리 인덱스 등 실제 문서가 아닐 수 있음)는
  // version.docs에서 안전하게 조회한다.
  const groupDoc = docId ? version.docs[docId] : undefined;

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <Layout
      item={item}
      className={item.className}
      href={href}
      description={groupDoc?.description ?? item.description ?? categoryItemsPlural(item.items.length)}
      {...getIconTitleProps(item)}
    />
  );
}
function CardLink({item, prefix}) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <Layout
      item={item}
      className={item.className}
      href={item.href}
      description={item.description ?? doc?.description}
      prefix={prefix}
      {...getIconTitleProps(item)}
    />
  );
}
export default function DocCard({item, prefix}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} prefix={prefix} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
