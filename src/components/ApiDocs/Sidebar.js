import React, { useState, useMemo, useCallback, useEffect } from 'react';
import MethodBadge from './MethodBadge';
import DeprecatedBadge from './DeprecatedBadge';
import { findParentKeys } from './utils';

const reqBtnStyle = (isActive) => ({
  display: 'flex', alignItems: 'center', gap: 8, width: '100%',
  background: isActive ? 'rgba(0,102,204,0.25)' : 'transparent',
  border: 'none', borderLeft: `2px solid ${isActive ? '#0066cc' : 'transparent'}`,
  cursor: 'pointer', color: isActive ? '#fff' : '#a8b0ba',
  fontSize: 14, textAlign: 'left', transition: 'background 0.12s',
});

export default function Sidebar({ allFolders, title, selected, onSelect, isMobile }) {
  const [open, setOpen] = useState(() => {
    const init = {};
    (allFolders || []).forEach(f => {
      init[f.name] = false;
      (f.item || []).forEach(child => {
        if (child.item?.length > 0) init[`${f.name}::${child.name}`] = false;
      });
    });
    return init;
  });
  const [q, setQ] = useState('');

  const toggle = useCallback((key) => setOpen(p => ({ ...p, [key]: !p[key] })), []);

  useEffect(() => {
    const keys = findParentKeys(selected, allFolders);
    if (!keys) return;
    setOpen(p => ({
      ...p,
      [keys.folder]: true,
      ...(keys.sub ? { [keys.sub]: true } : {}),
    }));
  }, [selected, allFolders]);

  const folders = useMemo(() => {
    if (!q.trim()) return allFolders || [];
    const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    const matchStr = s => tokens.every(t => s?.toLowerCase().includes(t));
    const matchReq = r => matchStr(r.name) || matchStr(r.request?.url?.raw);
    return (allFolders || [])
      .map(f => ({
        ...f,
        item: (f.item || [])
          .map(child => {
            if (child.item?.length > 0) {
              const filtered = child.item.filter(matchReq);
              return filtered.length > 0 ? { ...child, item: filtered } : null;
            }
            return matchReq(child) ? child : null;
          })
          .filter(Boolean),
      }))
      .filter(f => f.item.length > 0 || matchStr(f.name));
  }, [q, allFolders]);

  return (
    <aside style={{
      width: isMobile ? '100%' : 380,
      minWidth: isMobile ? '100%' : 280,
      background: '#1a1d23',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      borderRight: '1px solid #2d3139',
      flexShrink: 0,
    }}>
      <div style={{ padding: '14px 14px 10px', borderBottom: '1px solid #2d3139', flexShrink: 0 }}>
        <button onClick={() => onSelect(null)} style={{
          display: 'block', width: '100%', textAlign: 'left',
          fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10,
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        }}>
          {title}
        </button>
        <input type="search" placeholder="Filter..." value={q} onChange={e => setQ(e.target.value)} style={{
          width: '100%', boxSizing: 'border-box', padding: '5px 10px', fontSize: 14,
          background: '#2a2d35', border: '1px solid #3a3d45', borderRadius: 4,
          color: '#ccc', outline: 'none',
        }} />
      </div>

      <nav style={{ flex: 1, overflowY: 'auto', padding: '6px 0', maxHeight: '100vh', scrollbarGutter: 'stable', scrollbarWidth: 'thin' }}>
        {folders.map(folder => {
          const hasItems = folder.item?.length > 0;
          const isFolderOpen = !!q.trim() || (open[folder.name] ?? false);
          return (
            <div key={folder.name}>
              <button onClick={() => { toggle(folder.name); onSelect({ _folder: folder }); }} style={{
                display: 'flex', alignItems: 'center', gap: 6, width: '100%',
                padding: '6px 14px', background: 'transparent', border: 'none', cursor: 'pointer',
                color: '#8b9099', fontSize: 13, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'left',
              }}>
                <span style={{ fontSize: 10, opacity: 0.6 }}>
                  {hasItems ? (isFolderOpen ? '▼' : '▶') : '●'}
                </span>
                <span>{folder.name}</span>
              </button>

              {isFolderOpen && hasItems && (folder.item || []).map(child => {
                if (child.item?.length > 0) {
                  const subKey = `${folder.name}::${child.name}`;
                  const isSubOpen = !!q.trim() || (open[subKey] ?? false);
                  return (
                    <div key={child.name}>
                      <button onClick={() => { toggle(subKey); onSelect({ _folder: child }); }} style={{
                        display: 'flex', alignItems: 'center', gap: 5, width: '100%',
                        padding: '4px 14px 4px 22px', background: 'transparent',
                        border: 'none', cursor: 'pointer', color: '#6b7280',
                        fontSize: 13, fontWeight: 600, textAlign: 'left',
                      }}>
                        <span style={{ fontSize: 8, opacity: 0.7 }}>{isSubOpen ? '▼' : '▶'}</span>
                        <span>{child.name}</span>
                      </button>
                      {isSubOpen && child.item.map(req => {
                        const isActive = selected?.name === req.name;
                        return (
                          <button key={req.name} onClick={() => onSelect(req)}
                            style={{ ...reqBtnStyle(isActive), padding: '8px 14px 8px 34px', opacity: req.deprecated ? 0.55 : 1 }}>
                            <MethodBadge method={req.request?.method} compact />
                            <span style={{
                              flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                              textDecoration: req.deprecated ? 'line-through' : 'none',
                            }}>
                              {req.name}
                            </span>
                            {req.deprecated && <DeprecatedBadge compact />}
                          </button>
                        );
                      })}
                    </div>
                  );
                }

                const isActive = selected?.name === child.name;
                return (
                  <button key={child.name} onClick={() => onSelect(child)}
                    style={{ ...reqBtnStyle(isActive), padding: '8px 14px 8px 24px', opacity: child.deprecated ? 0.55 : 1 }}>
                    <MethodBadge method={child.request?.method} compact />
                    <span style={{
                      flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      textDecoration: child.deprecated ? 'line-through' : 'none',
                    }}>
                      {child.name}
                    </span>
                    {child.deprecated && <DeprecatedBadge compact />}
                  </button>
                );
              })}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
