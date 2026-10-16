import {useSyncExternalStore} from 'react';

// 패널 열림 상태를 navbar 버튼(데스크톱/모바일)과 패널이 함께 쓰도록 모듈 단위로 둔다.
let open = false;
const listeners = new Set();

export function setAskAiOpen(value) {
  open = typeof value === 'function' ? value(open) : value;
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useAskAiOpen() {
  return useSyncExternalStore(subscribe, () => open, () => false);
}
