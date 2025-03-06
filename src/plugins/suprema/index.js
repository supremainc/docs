module.exports = function () {
  return {
    name: 'suprema-plugin',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              (function() {
                function attachLinkClickEvents() {
                  document.querySelectorAll("main a").forEach(anchor => {
                    if (!anchor.hasAttribute("data-event-added")) {
                      anchor.setAttribute("data-event-added", "true");
                      anchor.addEventListener("click", function (event) {
                        const href = anchor.getAttribute("href");
                        
                        // console.log("링크 클릭됨:", href);

                        // 해시(#)가 포함된 경우 스크롤 처리 및 URL 변경
                        if (href && href.includes("#")) {
                          event.preventDefault();
                          
                          const targetId = href.split("#")[1];
                          const targetElement = document.getElementById(targetId);

                          if (targetElement) {
                            const offset = 150; // 원하는 offset 값 (예: 네비게이션 높이)
                            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                            window.scrollTo({
                              top: targetPosition,
                              behavior: "smooth"
                            });

                            // URL을 변경하여 브라우저 히스토리에 반영
                            history.pushState(null, "", href);

                            // console.log("해시 스크롤 적용:", targetId);
                          }
                        }
                      });
                    }
                  });
                }

                // 초기 이벤트 등록
                attachLinkClickEvents();

                // SPA 네비게이션 대응: MutationObserver
                const observer = new MutationObserver(attachLinkClickEvents);
                observer.observe(document.body, { childList: true, subtree: true });

                // console.log("MutationObserver가 동작 중...");
              })();
            `,
          },
        ],
      };
    },
  };
};
