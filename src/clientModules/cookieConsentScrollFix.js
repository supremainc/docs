// docusaurus-plugin-cookie-consent는 toastMode에서도 배너가 떠 있는 동안
// document.body.style.overflow를 강제로 'hidden'으로 설정해 페이지 스크롤을 막는다.
// 화면 전체를 덮는 모달과 달리 구석에 표시되는 토스트 배너에는 맞지 않는 동작이라,
// 토스트 배너가 떠 있을 때 overflow: hidden이 설정되면 즉시 원복한다.
if (typeof window !== 'undefined') {
  const restoreScrollIfToast = () => {
    if (
      document.body.style.overflow === 'hidden' &&
      document.querySelector('.cookie-consent-toast')
    ) {
      document.body.style.overflow = '';
    }
  };

  const observer = new MutationObserver(restoreScrollIfToast);
  observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
}
