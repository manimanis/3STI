/**
 * Interactive Script for 3STI Educational Web Platform
 * Handles navigation, theme toggle, code copying, breadcrumbs, and search.
 */

$(() => {
  // 1. Theme Management (Dark / Light)
  const initTheme = () => {
    const savedTheme = localStorage.getItem('3sti_theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', initialTheme);
    return initialTheme;
  };

  let currentTheme = initTheme();

  // 2. Brand Link and Theme Toggle in Navbar
  const aside = $('aside #aside_navbar');
  const navContainer = $('aside nav .container-fluid');

  // Enhance brand
  const brand = $('aside .navbar-brand');
  if (brand.length) {
    brand.attr('href', 'index.html');
    if (brand.text().trim() === 'Web' || brand.find('.brand-badge').length === 0) {
      brand.html('<span class="brand-badge">3STI</span><span class="brand-text">Conception Web</span>');
    }
  }

  // Inject Theme Toggle Button if not already present
  if (!$('#theme-toggle').length && navContainer.length) {
    const toggleBtn = $('<button>')
      .attr('id', 'theme-toggle')
      .attr('type', 'button')
      .attr('aria-label', 'Basculer le thème')
      .attr('title', 'Basculer le thème clair / sombre')
      .addClass('theme-toggle-btn')
      .html(currentTheme === 'dark' ? '☀️' : '🌙')
      .click(() => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('3sti_theme', currentTheme);
        toggleBtn.html(currentTheme === 'dark' ? '☀️' : '🌙');
      });

    // Place before mobile toggler on small screens or inside container
    navContainer.append(toggleBtn);
  }

  // 3. Detect Home Page (index.html) vs Lesson Pages
  const isHomePage = location.pathname.endsWith('index.html') || 
                     location.pathname.endsWith('/3STI/') || 
                     location.pathname.endsWith('/3STI') || 
                     $('main h1').text().toLowerCase().includes('conception web');

  const articles = $('main article');
  const url = new URL(document.location);
  const hash = url.hash;

  // Build Navbar Menu
  const link_list = $('<ul>')
    .addClass('navbar-nav me-auto mb-2 mb-lg-0')
    .appendTo(aside);

  // Array to hold linear sequence of all sections for Prev/Next navigation
  const flatSections = [];

  articles
    .addClass('d-none d-print-block')
    .each((index, art_elem) => {
      const article = $(art_elem);
      const artId = `article-${index + 1}`;
      const artTitle = article.find('h2').text().trim() || `Partie ${index + 1}`;

      const li = $('<li>')
        .addClass('nav-item dropdown')
        .appendTo(link_list);
      const a_id = `link-${index + 1}`;
      const a = $('<a>')
        .addClass('nav-link dropdown-toggle')
        .attr('href', `#${artId}`)
        .attr('id', a_id)
        .attr('role', 'button')
        .attr('data-bs-toggle', 'dropdown')
        .attr('aria-haspopup', 'true')
        .attr('aria-expanded', 'false')
        .text(artTitle)
        .appendTo(li);

      const sections = article.find('section');
      if (sections.length) {
        const sect_list = $('<div>')
          .attr('aria-labelledby', a_id)
          .addClass('dropdown-menu')
          .appendTo(li);

        sections.each((section_index, sect_elem) => {
          const section = $(sect_elem);
          const sectId = `section-${index + 1}-${section_index + 1}`;
          const sectLinkId = `link-${index + 1}-${section_index + 1}`;
          const sectTitle = section.find('h3').first().text().trim() || `Page ${section_index + 1}`;

          section.addClass('d-none d-print-block');

          // Store for sequential navigation
          flatSections.push({
            articleIndex: index,
            sectionIndex: section_index,
            articleTitle: artTitle,
            sectionTitle: sectTitle,
            elem: section
          });

          $('<a>')
            .attr('href', `#${sectId}`)
            .attr('id', sectLinkId)
            .addClass('dropdown-item')
            .text(sectTitle)
            .appendTo(sect_list);
        });
      }
    });

  // Breadcrumb placeholder (for lesson pages)
  let breadcrumbElem = null;
  if (!isHomePage) {
    breadcrumbElem = $('<div>')
      .addClass('site-breadcrumb d-print-none')
      .prependTo('main');
  }

  const updateBreadcrumb = (artIndex, sectIndex) => {
    if (!breadcrumbElem) return;
    const pageMainTitle = $('main h1').text().trim();
    const artTitle = articles.eq(artIndex).find('h2').text().trim();
    const sectTitle = articles.eq(artIndex).find('section').eq(sectIndex).find('h3').first().text().trim();

    breadcrumbElem.html(`
      <a href="index.html">🏠 Accueil</a>
      <span class="sep">/</span>
      <span>${pageMainTitle}</span>
      ${artTitle ? `<span class="sep">/</span> <span>${artTitle}</span>` : ''}
      ${sectTitle ? `<span class="sep">/</span> <span class="current">${sectTitle}</span>` : ''}
    `);
  };

  // Section Display Function
  const displayArticle = (index) => {
    if (art_obj.article && art_obj.article.addClass) {
      art_obj.article.addClass('d-none');
      $(`a#link-${art_obj.article_index + 1}`).removeClass('active');
      $(`a#link-${art_obj.article_index + 1}-${art_obj.section_index + 1}`).removeClass('active');
    }
    art_obj.article_index = index;
    art_obj.article = articles.eq(index).removeClass('d-none');
    art_obj.sections = art_obj.article.find('section');
    $(`a#link-${index + 1}`).addClass('active');
  };

  const displaySection = (index) => {
    if (art_obj.section && art_obj.section.addClass) {
      art_obj.section.addClass('d-none');
      $(`a#link-${art_obj.article_index + 1}-${art_obj.section_index + 1}`).removeClass('active');
    }
    art_obj.section_index = index;
    art_obj.section = art_obj.sections.eq(index).removeClass('d-none');
    $(`a#link-${art_obj.article_index + 1}-${index + 1}`).addClass('active');

    // Update Breadcrumbs
    updateBreadcrumb(art_obj.article_index, art_obj.section_index);

    // Save position
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      article_index: art_obj.article_index,
      section_index: art_obj.section_index
    }));
  };

  const STORAGE_KEY = location.pathname + '#art_obj';
  let art_obj = null;

  if (hash === '') {
    art_obj = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      article: null,
      article_index: 0,
      sections: null,
      section: null,
      section_index: 0
    };
  } else {
    const hashParts = hash.split('-');
    art_obj = {
      article_index: parseInt(hashParts[1], 10) - 1 || 0,
      section_index: parseInt(hashParts[2], 10) - 1 || 0
    };
  }

  // Ensure indices are within bounds
  if (art_obj.article_index >= articles.length || art_obj.article_index < 0) {
    art_obj.article_index = 0;
  }

  // Wire up aside navigation clicks
  aside.find('a').click(e => {
    const link = $(e.currentTarget);
    const href = link.attr('href');
    if (href && href.startsWith('#section')) {
      const href_parts = href.split('-');
      if (href_parts.length >= 3) {
        displayArticle(+href_parts[1] - 1);
        displaySection(+href_parts[2] - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  });

  // Other anchor links
  $('a').each(function () {
    const link = $(this);
    const href = link.attr('href');
    if (href && href.startsWith('#section')) {
      link.click(e => {
        const href_parts = link.attr('href').split('-');
        if (href_parts.length >= 3) {
          displayArticle(+href_parts[1] - 1);
          displaySection(+href_parts[2] - 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  });

  // 4. Sequential Navigation (Prev / Next Buttons in Lesson Pages)
  if (!isHomePage && flatSections.length > 1) {
    flatSections.forEach((item, flatIdx) => {
      const navContainer = $('<div>')
        .addClass('lesson-nav d-print-none')
        .appendTo(item.elem);

      // Previous button
      if (flatIdx > 0) {
        const prevItem = flatSections[flatIdx - 1];
        $('<button>')
          .attr('type', 'button')
          .addClass('lesson-nav-btn prev-btn')
          .html(`← ${prevItem.sectionTitle}`)
          .click(() => {
            displayArticle(prevItem.articleIndex);
            displaySection(prevItem.sectionIndex);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          })
          .appendTo(navContainer);
      } else {
        // Space filler
        $('<div>').appendTo(navContainer);
      }

      // Next button
      if (flatIdx < flatSections.length - 1) {
        const nextItem = flatSections[flatIdx + 1];
        $('<button>')
          .attr('type', 'button')
          .addClass('lesson-nav-btn next-btn')
          .html(`${nextItem.sectionTitle} →`)
          .click(() => {
            displayArticle(nextItem.articleIndex);
            displaySection(nextItem.sectionIndex);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          })
          .appendTo(navContainer);
      }
    });
  }

  // 5. Home Page Specific Logic (Tabs & Live Search)
  if (isHomePage) {
    // Show all sections if desired, or handle filter chips
    const handleFilter = (category) => {
      if (category === 'all') {
        articles.removeClass('d-none');
        articles.find('section').removeClass('d-none');
        $('.filter-chip-btn').removeClass('active');
        $(`.filter-chip-btn[data-filter="all"]`).addClass('active');
      } else if (category === 'cours') {
        articles.removeClass('d-none');
        articles.find('section').addClass('d-none');
        articles.find('section').eq(0).removeClass('d-none');
        $('.filter-chip-btn').removeClass('active');
        $(`.filter-chip-btn[data-filter="cours"]`).addClass('active');
      } else if (category === 'activites') {
        articles.removeClass('d-none');
        articles.find('section').addClass('d-none');
        articles.find('section').eq(1).removeClass('d-none');
        $('.filter-chip-btn').removeClass('active');
        $(`.filter-chip-btn[data-filter="activites"]`).addClass('active');
      } else if (category === 'progression') {
        articles.removeClass('d-none');
        articles.find('section').addClass('d-none');
        articles.find('section').eq(2).removeClass('d-none');
        $('.filter-chip-btn').removeClass('active');
        $(`.filter-chip-btn[data-filter="progression"]`).addClass('active');
      }
    };

    // Listen to filter buttons
    $(document).on('click', '.filter-chip-btn', function () {
      const filter = $(this).data('filter');
      handleFilter(filter);
    });

    // Live search input
    $(document).on('input', '#site-search', function () {
      const term = $(this).val().toLowerCase().trim();
      if (term === '') {
        // Reset to active filter
        const activeFilter = $('.filter-chip-btn.active').data('filter') || 'all';
        handleFilter(activeFilter);
        $('.card').parent().show();
        return;
      }

      // Show all sections so search finds everything
      articles.removeClass('d-none');
      articles.find('section').removeClass('d-none');

      $('.card').each(function () {
        const card = $(this);
        const text = card.text().toLowerCase();
        if (text.includes(term)) {
          card.parent().show();
        } else {
          card.parent().hide();
        }
      });
    });

    // By default on homepage, display all sections nicely
    handleFilter('all');
  } else {
    // Initial display on lesson pages
    displayArticle(art_obj.article_index);
    displaySection(art_obj.section_index);
  }

  // 6. Code Blocks Enhancement (macOS window bar & Copy Button)
  $('pre').each(function () {
    const pre = $(this);
    if (pre.parent().hasClass('code-block-wrapper')) return;

    const code = pre.find('code');
    let lang = 'Code';
    if (code.length) {
      const cls = code.attr('class') || pre.attr('class') || '';
      if (cls.includes('html')) lang = 'HTML';
      else if (cls.includes('css')) lang = 'CSS';
      else if (cls.includes('js') || cls.includes('javascript')) lang = 'JavaScript';
      else if (cls.includes('sql')) lang = 'SQL';
    }

    const wrapper = $('<div>').addClass('code-block-wrapper');
    pre.before(wrapper);

    const header = $('<div>')
      .addClass('code-header')
      .html(`
        <div class="code-window-dots">
          <span class="code-window-dot dot-red"></span>
          <span class="code-window-dot dot-yellow"></span>
          <span class="code-window-dot dot-green"></span>
        </div>
        <span class="code-lang-badge">${lang}</span>
        <button type="button" class="copy-code-btn" title="Copier le code">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span>Copier</span>
        </button>
      `)
      .appendTo(wrapper);

    pre.appendTo(wrapper);

    header.find('.copy-code-btn').click(function () {
      const btn = $(this);
      const textToCopy = code.length ? code.text() : pre.text();
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        btn.addClass('copied').find('span').text('Copié !');
        setTimeout(() => {
          btn.removeClass('copied').find('span').text('Copier');
        }, 2000);
      }).catch(err => {
        console.error('Erreur de copie:', err);
      });
    });
  });

  // 7. Floating Scroll To Top Button
  const scrollBtn = $('<button>')
    .attr('type', 'button')
    .attr('aria-label', 'Remonter en haut de page')
    .addClass('scroll-top-btn d-print-none')
    .html('↑')
    .appendTo('body')
    .click(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  $(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
      scrollBtn.addClass('visible');
    } else {
      scrollBtn.removeClass('visible');
    }
  });

  // 8. Footer Year Standardization
  $('footer').each(function () {
    const footer = $(this);
    if (!footer.find('.footer-inner').length) {
      footer.html(`
        <div class="footer-inner">
          <div class="footer-credit">
            Conçu avec <span class="heart-icon">♥</span> par <strong>Mohamed Anis MANI</strong> — 3STI
          </div>
          <div class="footer-year-badge">
            🎓 Année scolaire : 2026/2027
          </div>
        </div>
      `);
    }
  });
});