/**
 * JavaScript Vanilla for Etika Ismatus Zahra - Personal CV & Portfolio
 * Features:
 * - Dynamic Skill Progress Bar Fill (via data-level & IntersectionObserver)
 * - Category Filter Tabs (Semua, Kompetisi, Organisasi, Proyek, Sertifikasi)
 * - Active Navigation Spy on Scroll
 * - Mobile Navigation Menu Toggle
 * - Copy Email to Clipboard with Blue Toast Notification
 * - Download / Print CV Handler
 * - Back to Top Button
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. MOBILE MENU TOGGLE
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          const icon = menuToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  // 2. ACTIVE NAVIGATION INDICATOR ON SCROLL
  const sections = document.querySelectorAll('section[id], div[id="home"]');
  
  const handleScrollActiveNav = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      
      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScrollActiveNav);

  // 3. SKILL PROGRESS BAR ANIMATION (IntersectionObserver)
  const skillFills = document.querySelectorAll('.skill-bar-fill');

  const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fillBar = entry.target;
        const level = fillBar.getAttribute('data-level');
        if (level) {
          fillBar.style.width = `${level}%`;
        }
        observer.unobserve(fillBar);
      }
    });
  };

  const skillObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.25,
    rootMargin: '0px 0px -50px 0px'
  });

  skillFills.forEach(bar => {
    skillObserver.observe(bar);
  });

  // 4. CATEGORY FILTER TABS
  const filterButtons = document.querySelectorAll('.filter-btn');
  const recordCards = document.querySelectorAll('.record-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      recordCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
          // Trigger smooth fade in
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // 5. COPY EMAIL WITH BLUE TOAST NOTIFICATION
  const btnCopyEmail = document.getElementById('btn-copy-email');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  const showToast = (message) => {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  };

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const emailToCopy = 'etika616@gmail.com';

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailToCopy)
          .then(() => {
            showToast('Email (etika616@gmail.com) berhasil disalin ke clipboard!');
          })
          .catch(() => {
            fallbackCopyText(emailToCopy);
          });
      } else {
        fallbackCopyText(emailToCopy);
      }
    });
  }

  const fallbackCopyText = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showToast('Email (etika616@gmail.com) berhasil disalin ke clipboard!');
      } else {
        showToast('Gagal menyalin email otomatis.');
      }
    } catch (err) {
      showToast('Gagal menyalin email.');
    }
    document.body.removeChild(textArea);
  };

  // 6. DOWNLOAD / PRINT CV (PDF TRIGGER)
  const printNavBtn = document.getElementById('btn-print-nav');
  const printSidebarBtn = document.getElementById('btn-print-sidebar');

  const triggerPrintCV = () => {
    // Show all cards before print so print includes all categories
    recordCards.forEach(card => card.classList.remove('hide'));
    window.print();
  };

  if (printNavBtn) {
    printNavBtn.addEventListener('click', triggerPrintCV);
  }
  if (printSidebarBtn) {
    printSidebarBtn.addEventListener('click', triggerPrintCV);
  }

  // 7. BACK TO TOP BUTTON
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
