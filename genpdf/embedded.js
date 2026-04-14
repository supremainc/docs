function initScrollSpy() {
  // 640px 이하 화면에서는 기능 비활성화
  if (window.innerWidth <= 640) return;

  // .layout 내의 모든 앵커 링크 찾기
  const navLinks = document.querySelectorAll('.layout a[href^="#"]');
  const contentHeadings = document.querySelectorAll('.content h2, .content h3');

  if (contentHeadings.length === 0) return;

  // Intersection Observer 옵션
  const observerOptions = {
    root: null,
    rootMargin: '130px 0px -50% 0px', // 화면 중간이 기준
    threshold: 0
  };

  // 현재 활성 섹션 추적
  let activeHeading = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeHeading = entry.target.id;
      }
    });

    // 네비게이션 업데이트
    updateActiveLink();
  }, observerOptions);

  // 모든 헤딩 관찰
  contentHeadings.forEach((heading) => {
    observer.observe(heading);
  });

  // 활성 링크 업데이트 함수
  function updateActiveLink() {
    let activeLink = null;

    navLinks.forEach((link) => {
      const href = link.getAttribute('href').slice(1); // '#' 제거

      if (href === activeHeading) {
        link.classList.add('active');
        activeLink = link;
      } else {
        link.classList.remove('active');
      }
    });

    // 활성 링크를 .layout 스크롤 영역 내에서 보이도록 스크롤
    if (activeLink) {
      const layout = document.querySelector('.layout');
      if (layout) {
        // 부드러운 스크롤을 원하면 behavior 추가
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'center' // "center", "start", "end" 중 선택
        });
      }
    }
  }
}

// 페이지 로드 후 실행
document.addEventListener('DOMContentLoaded', initScrollSpy);

// Back to top button functionality
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});