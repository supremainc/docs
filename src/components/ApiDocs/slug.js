// Postman 컬렉션 항목의 URL slug를 계산한다.
// 페이지 컴포넌트와 빌드 플러그인(Node)에서 함께 쓰므로 외부 의존성을 두지 않는다.

export function toSlug(name) {
  return (name || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// 컬렉션 전체의 slug 색인을 만든다.
// slug는 상위 카테고리를 모두 포함한 경로다. (예: "doors/door-control/open-door", "sbs-event-log/step-1-login")
// 다른 카테고리의 같은 이름 항목(예: 서로 다른 SbS 튜토리얼의 "Step 1 Login")도 구분된다.
export function buildSlugIndex(collection) {
  const slugByNode = new Map();
  const itemBySlug = new Map();
  // 이름만으로 만들던 이전 slug → 새 slug. 기존 링크(?api=revision-notes 등)를 새 slug로 옮길 때 쓴다.
  // 이전 방식과 같이 이름이 겹치면 나중 항목이 남는다.
  const legacySlugs = new Map();
  const duplicates = [];

  const add = (node, parentSlug, isFolder) => {
    const slug = parentSlug ? `${parentSlug}/${toSlug(node.name)}` : toSlug(node.name);
    if (itemBySlug.has(slug)) {
      // 같은 카테고리 안에 이름이 같은 항목이 있으면 URL로 접근할 수 없다. 빌드 플러그인이 이 목록으로 빌드를 중단한다.
      duplicates.push(slug);
      return slug;
    }
    slugByNode.set(node, slug);
    itemBySlug.set(slug, isFolder ? { _folder: node } : node);
    legacySlugs.set(toSlug(node.name), slug);
    return slug;
  };

  for (const folder of collection.item || []) {
    const folderSlug = add(folder, '', true);
    for (const child of folder.item || []) {
      if (child.item?.length > 0) {
        const childSlug = add(child, folderSlug, true);
        for (const req of child.item) add(req, childSlug, false);
      } else {
        add(child, folderSlug, false);
      }
    }
  }

  return {
    findBySlug: (slug) => itemBySlug.get(slug) ?? null,
    slugOf: (item) => slugByNode.get(item?._folder || item) ?? null,
    legacySlugOf: (slug) => legacySlugs.get(slug) ?? null,
    allSlugs: () => [...itemBySlug.keys()],
    duplicates,
  };
}
