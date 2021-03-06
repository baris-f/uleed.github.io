// -------------------------------------
// vue app
// -------------------------------------
const app = Vue.createApp({
  data() {
    return {
      // the date my career started (change to yours)
      careerStartDate: 2015,

      // the date copyright started (change to yours)
      copyrightStartDate: 2021,

      // for the template theme
      appTheme: 'light_theme',
      savedTheme: null,

      // flag to toggle the preloader
      isPreloading: true,

      // toast notifications array
      notifications: [],

      // manage loading spinner status
      ajaxLoading: [],

      // for minimizing the header on scrolling down
      startMinimizingHeaderAt: 100,
      isHeaderBig: true,
      // for toggling the header on scrolling down
      lastScrollPosition: 0,
      isHeaderHidden: false,
      // for scroll to top button
      startShowingScrollTopBtnAt: 600,
      isScrollTopBtnDisplayed: false,

      // flag to toggle focus style class
      isAnyFocus: false,

      // flag to toggle nav menu
      isNavMenuOpen: false,

      // list of nav links to loop through it
      navLinks: [
        {
          url: '#hero',
          title: { en: 'Home', fr: 'Bienvenue' }
        }, {
          url: '#about',
          title: { en: 'About', fr: 'A propos' }
        }, {
          url: '#skills',
          title: { en: 'skills', fr: 'Compétences' }
        }, {
          url: '#portfolio',
          title: { en: 'Portfolio', fr: 'Portfolio' }
        }, {
          url: '#contact',
          title: { en: 'Contact', fr: 'Contact' }
        }
      ],

      // flag to toggle between skills types in skills section
      skillsType: '',

      // list of skills items to loop through it
      skillsItems: [
        {
          imgUrl: 'assets/images/skills/unity.png',
          title: 'Unity'
        }, {
          imgUrl: 'assets/images/skills/VR.png',
          title: 'VR'
        }, {
          imgUrl: 'assets/images/skills/AR.png',
          title: 'AR'
        }, {
          imgUrl: 'assets/images/skills/3D.png',
          title: '3D'
        }, {
          imgUrl: 'assets/images/skills/2D.png',
          title: '2D'
        }, {
          imgUrl: 'assets/images/skills/Web.png',
          title: 'Web'
        }, {
          imgUrl: 'assets/images/skills/android.png',
          title: 'Android'
        }
      ],

      // list of tools items to loop through it
      toolsItems: [
        {
          imgUrl: 'https://via.placeholder.com/48',
          title: 'Ajax'
        }, {
          imgUrl: 'https://via.placeholder.com/48',
          title: 'Gulp'
        }, {
          imgUrl: 'https://via.placeholder.com/48',
          title: 'Webpack'
        }
      ],

      // list of experience items to loop through it
      experienceItems: [
        {
          date: '2015',
          companyName: { en: 'Google Inc.', fr: 'baguette baguette' },
          jobTitle: { en: 'Front-End Developer', fr: 'baguette baguette baguette' },
          desc: {
            en: 'Monitored technical aspects of the front-end delivery for projects.',
            fr: 'baguette baguette baguette baguette baguette baguette baguette.'
          }
        }, {
          date: '2017',
          companyName: { en: 'Facebook Inc.', fr: 'baguette baguette' },
          jobTitle: { en: 'Full Stack Developer', fr: 'baguetteّbaguette baguette baguette' },
          desc: {
            en: 'Collaborate with creative and development teams on the execution of ideas.',
            fr: 'baguette baguette baguette baguette baguette baguette baguette baguette baguette.'
          }
        }, {
          date: '2019',
          companyName: { en: 'Google Inc.', fr: 'baguette baguette' },
          jobTitle: { en: 'Front-End Developer', fr: 'baguette baguette baguette' },
          desc: {
            en: 'Monitored technical aspects of the front-end delivery for projects.',
            fr: 'baguette baguette baguette baguette baguette baguette baguette.'
          }
        }, {
          date: '2021',
          companyName: { en: 'Facebook Inc.', fr: 'baguette baguette' },
          jobTitle: { en: 'Full Stack Developer', fr: 'baguetteّbaguette baguette baguette' },
          desc: {
            en: 'Collaborate with creative and development teams on the execution of ideas.',
            fr: 'baguette baguette baguette baguette baguette baguette baguette baguette baguette.'
          }
        }, {}, {}
      ],

      // portfolio items filter by type
      filters: ['All', '2D', 'VR', 'AR', 'Other'],
      currentFilter: 'All',

      // list of portfolio items to loop through it
      allPortfolioItems: [
        {
          id: 1,
          url: 'single-portfolio.html?id=1',
          imgUrl: 'assets/images/portfolio/pcr-defender/salon.jpg',
          title: { en: 'PCR Defender', fr: 'PCR Defender' },
          date: { en: 'September 2016', fr: 'Septembre 2016' },
          desc: {
            en: 'PCR Defender, ',
            fr: "PCR Defender est un jeu PC et mobile ludique, dans lequel on esquive des obstacle pour obtenir le meilleur score. Il a servi lors du salon des JFR de 2016 pour poumouvoir l'entreprise C2i Santé."
          },
          category: '2D',
          tools: ['Unity', '2D'],
          link: "https://gamepipe.io/@barisf/pcr-defender",
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/pcr-defender/menu.png',
              caption: { en: 'Menu', fr: 'Menu' }
            },
            img2: {
              url: 'assets/images/portfolio/pcr-defender/jeu.png',
              caption: { en: 'Gameplay', fr: 'Gameplay' }
            }
          }
        }, {
          id: 2,
          url: 'single-portfolio.html?id=2',
          imgUrl: 'assets/images/portfolio/proxima-cities/ProximaCities.png',
          title: { en: 'Proxima Cities', fr: 'Proxima Cities' },
          date: { en: 'October 2018 - March 2020', fr: 'Octobre 2018 - Mars 2020' },
          desc: {
            en: 'Proxima Cities',
            fr: 'Proxima Cities'
          },
          category: 'AR',
          tools: ['Unity', '3D', 'AR'],
          link: "https://www.youtube.com/watch?v=HJnT_nsFjWY",
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/proxima-cities/ProximaCities.png',
              caption: { en: 'ProximaCities', fr: 'ProximaCities' }
            },
            img2: {
              url: 'assets/images/portfolio/proxima-cities/pc2.png',
              caption: { en: 'rocket', fr: 'fusée' }
            },
            img3: {
              url: 'assets/images/portfolio/proxima-cities/pc3.png',
              caption: { en: 'city and proximiam', fr: 'ville et proximiam' }
            }
          }
        }, {
          id: 3,
          url: 'single-portfolio.html?id=3',
          imgUrl: 'assets/images/portfolio/barrier-squad/BarrierSquad.png',
          title: { en: 'Barrier Squad', fr: 'Barrier Squad' },
          date: { en: 'May 2018 - April 2020', fr: 'Mai 2018 - Avril 2020' },
          desc: {
            en: 'Barrier Squad,',
            fr: 'Barrier Squad, '
          },
          category: '2D',
          tools: ['Unity', '2D'],
          link: "https://gamepipe.io/@barisf/barrier-squad",
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/barrier-squad/BarrierSquad.png',
              caption: { en: 'BarrierSquad', fr: 'BarrierSquad' }
            }
          }
        }, {
          id: 4,
          url: 'single-portfolio.html?id=4',
          imgUrl: 'assets/images/portfolio/gamejam/Miasmaze.png',
          title: { en: 'Game jams', fr: 'Game jams' },
          date: { en: '2016 - Now', fr: '2016 - Maintenant' },
          desc: {
            en: 'Game jams',
            fr: 'Game jams'
          },
          category: 'Other',
          tools: ['Unity', '2D'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/gamejam/Miasmaze.png',
              caption: { en: 'Miasmaze', fr: 'Miasmaze' }
            },
          }
        }, {
          id: 5,
          url: 'single-portfolio.html?id=5',
          imgUrl: 'assets/images/portfolio/taiko/taiko.png',
          title: { en: 'Game jams', fr: 'Game jams' },
          date: { en: '2016 - Now', fr: '2016 - Maintenant' },
          desc: {
            en: 'Taiko VR',
            fr: 'Taiko VR'
          },
          category: 'VR',
          tools: ['Unity', 'VR', '2D', '3D'],
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/taiko/taikogame.png',
              caption: { en: 'Taiko', fr: 'Taiko' }
            },
            img2: {
              url: 'assets/images/portfolio/taiko/taiko.mp4',
              caption: { en: 'Click to play !', fr: 'Cliquez pour lancer la vidéo !' }
            }
          }
        }, {
          id: 6,
          url: 'single-portfolio.html?id=6',
          imgUrl: 'assets/images/portfolio/gamejam/LostNFound.png',
          title: { en: 'Lost and Found Office', fr: 'Lost and Found Office' },
          date: { en: '2019', fr: '2019' },
          desc: {
            en: 'Lost and Found Office is a game made for a Game Jam, in which you need to help people find their lost object.',
            fr: "Lost and Found Office est un jeu fait pour une Game Jam, dans lequel vous devez aider des gens à retrouver ce qu'ils ont perdu."
          },
          category: '2D',
          tools: ['Unity', '2D'],
          link: "https://gamepipe.io/@barisf/lost-and-found-office",
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/gamejam/lost1.png',
              caption: { en: 'Lost1', fr: 'Lost1' }
            },
            img2: {
              url: 'assets/images/portfolio/gamejam/LostNFound.png',
              caption: { en: 'Lost2', fr: 'Lost2' }
            },
            img3: {
              url: 'assets/images/portfolio/gamejam/lost2.png',
              caption: { en: 'Lost3', fr: 'Lost3' }
            }
          }
        }, {
          id: 7,
          url: 'single-portfolio.html?id=7',
          imgUrl: 'assets/images/portfolio/puzzle-ads/PuzzleAds1.png',
          title: { en: 'Puzzle Ads', fr: 'Puzzle Ads' },
          date: { en: '2019', fr: '2019' },
          desc: {
            en: 'Puzzle Ads is a small game that copies the trend in ads, but you can actually play it.',
            fr: 'Puzzle Ads est un petit jeu web qui copie le principe des pubs abondantes sur ce thème.'
          },
          category: '2D',
          tools: ['Unity', '2D'],
          link: "https://gamepipe.io/@gamepipe/puzzleadss",
          screenshots: {
            img1: {
              url: 'assets/images/portfolio/puzzle-ads/PuzzleAds2.png',
              caption: { en: 'Level 2', fr: 'Level 2' }
            },
            img2: {
              url: 'assets/images/portfolio/puzzle-ads/PuzzleAds3.png',
              caption: { en: 'Level 3', fr: 'Level 3' }
            }
          }
        }
      ].reverse(),

      // current page of portfolio items
      portfolioItemsPage: 1,

      // portfolio items per page
      itemsPerPage: 7,

      // viewed portfolio items
      portfolioItems: [],

      // portfolio archive name
      portfolioArchiveName: '',

      // list of testimonials items to loop through it
      testimonialsItems: [
        {
          imgUrl: 'assets/images/moi-bg.jpg',
          quoteContent: {
            en: '',
            fr: ''
          },
          quoteAuthor: { en: 'Florent Baris', fr: 'Florent Baris' },
          jobTitle: { en: 'Developper', fr: 'Développeur' }
        }, {
          imgUrl: 'assets/images/matthieu-bg.png',
          quoteContent: {
            en: '',
            fr: ''
          },
          quoteAuthor: { en: 'Matthieu Baris', fr: 'Matthieu Baris' },
          jobTitle: { en: 'Customer relationship manager', fr: 'Responsable relation client' }
        }, {
          imgUrl: 'assets/images/gaspou.jpg',
          quoteContent: {
            en: '',
            fr: ''
          },
          quoteAuthor: { en: 'Gaspard Thirion', fr: 'Gaspard Thirion' },
          jobTitle: { en: 'Développeur', fr: 'Développeur' }
        }
      ]
    }
  },
  created() {
    // get a theme to use
    this.getAppTheme();
  },
  mounted() {
    if (window.innerWidth >= 992) {
      // initialize circle cursor
      //this.initCircleCursor();

      // apply pan effect hero image
      this.heroImgPanEffect();

      // initialize VanillaTilt library in portfolio section
      this.initializeTilt();
    }

    // nav menu tab trap
    this.navMenuTabTrap();

    // hide the preloader screen after loading
    window.addEventListener('load', () => this.isPreloading = false);

    // scrolling options
    this.scrollingOptions();
    document.addEventListener('scroll', () => this.scrollingOptions());

    // initialize popper.js plugin
    document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
      Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
        placement: 'top',
        modifiers: [{ name: 'offset', options: { offset: [0, 30] }}]
      });
    });

    // get portfolio items
    this.getPortfolioItems();

    // init glightbox plugin
    const lightbox = new GLightbox({
      autoplayVideos: false,
    });

    // initialize the first displayed type of skills
    this.initSkillsFirstType();
  },
  methods: {
    // initialize circle cursor
    initCircleCursor() {
      const app = this.$refs.appRef;
      const outer = this.$refs.circleCursorOuter;
      const inner = this.$refs.circleCursorInner;

      // return if disabled
      if (!outer || !inner) { return; }

      app.addEventListener('mousemove', e => {
        // make the circles follow the cursor
        outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
        inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);

        // add link hover style
        (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
      });

      app.addEventListener('click', () => {
        // add pulse effect on click
        inner.classList.add('cursor-click-effect');
        setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
      });
    },

    // get a theme to use
    getAppTheme() {
      // get the saved theme from the localStorage
      const storageSavedTheme = localStorage.getItem('nafieSavedTheme');
    
      // Check to see if there a saved theme
      if (storageSavedTheme) {
        this.savedTheme = storageSavedTheme;
    
      } else {
        // So, try to get the browser default theme or make your own default
    
        // Check to see if Media-Queries are supported
        if (window.matchMedia) {
    
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.savedTheme = 'dark_theme';
          } else { this.savedTheme = 'light_theme'; }
    
        } else {
          // Default (when Media-Queries are not supported)
          this.savedTheme = this.appTheme;
        }
      }
    
      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // detect the theme changes
    changeAppTheme() {
      (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme';

      // save the new theme in the localStorage
      localStorage.setItem('nafieSavedTheme', this.savedTheme);
    },

    // toggle nav menu
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen;
      this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
    },

    // open nav menu
    openNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = true;

      bodyEl.setAttribute('style', 'overflow-y: hidden;');

      // set focus on nav menu
      this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
    },

    // close nav menu
    closeNavMenu() {
      const bodyEl = document.getElementsByTagName('body')[0];

      this.isNavMenuOpen = false;

      bodyEl.removeAttribute('style');

      // set focus on nav menu toggle button
      this.$refs.navMenuToggleBtn.focus();
    },

    // nav menu tab trap
    navMenuTabTrap() {
      const nav = this.$refs.headerNav;
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
      let firstTabStop;
      let lastTabStop;
      let isFirstTabStop;
      let isLastTabStop;

      document.addEventListener('keyup', e => {
        if (nav.classList.contains('menu-open')) {
          // get first & last focusable elements in the side menu for the tab trap
          const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
            .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
          firstTabStop = visibleFocusableEls[0];
          lastTabStop = visibleFocusableEls[visibleFocusableEls.length -1];

          if (e.code === 'Tab') {
            if (e.shiftKey) /* shift + tab */ {
              // if this is the first item, move to the last item
              isFirstTabStop && lastTabStop.focus();
            } else /* tab */ {
              // if this is the last item, go back to the first item
              isLastTabStop && firstTabStop.focus();
            }

            // close nav menu on Escape button press
          } else if (e.code === 'Escape') { this.toggleNavMenu(); }

          // get current active element
          const activeEl = document.activeElement;

          // check if last item or not
          isLastTabStop = (activeEl === lastTabStop) ? true : false;

          // check if first item or not
          isFirstTabStop = (activeEl === firstTabStop) ? true : false;
        }
      });
    },

    // apply pan effect hero image
    heroImgPanEffect() {
      const parent = this.$refs.heroSection;

      // return if disabled
      if (!parent || !parent.getAttribute('data-paneffect')) { return; }

      const layer1 = parent.querySelectorAll('.layer')[0];
      const layer2 = parent.querySelectorAll('.layer')[1];

      parent.addEventListener('mousemove', (e) => {
        const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
        const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;

        parent.classList.add('parallax-animation');

        layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
        layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
      });
    },

    // scrolling options
    scrollingOptions() {
      const scrollPosition = window.pageYOffset;
    
      // check for current scroll position to minimize the header
      this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;
    
      // check for current scroll position to toggle the header
      this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
      this.lastScrollPosition = scrollPosition;
    
      // check for current scroll position to show the scrollTop button
      this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
    },

    // scroll to top
    scrollToTop() {
      window.scroll({ top: 0, behavior: 'smooth' });
    },

    // initialize the first displayed type of skills
    initSkillsFirstType() {
      const skillsSwitchBtn = this.$refs.skillsSwitchBtn;

      // return if disabled
      if (!skillsSwitchBtn) { return; }

      this.skillsType = skillsSwitchBtn.querySelector('input').value;
    },

    // initialize VanillaTilt library in portfolio section
    initializeTilt() {
      const portfolioItems = this.$refs.portfolioItems;

      // return if disabled
      if (!portfolioItems) { return; }

      VanillaTilt.init(portfolioItems.querySelectorAll('.portfolio-item'), {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.3
      });
    },

    // get portfolio items
    getPortfolioItems() {
      const itemsArr = this.allPortfolioItems
        .filter(item => {
          const urlParams = new URLSearchParams(window.location.search);
          const tax = urlParams.get('tax');

          if (tax) {
            if (tax === 'cat') {
              const cat = urlParams.get('cat');

              this.portfolioArchiveName = cat;
              return item.category === cat;

            } else if (tax === 'tools') {
              const tool = urlParams.get('tools');

              this.portfolioArchiveName = tool;
              return item.tools.includes(tool);
            }

          } else {
            return this.currentFilter === 'All' || item.category === this.currentFilter;
          }
        })
        .slice(this.filteredPortfolioItems.length, this.portfolioItemsPage * this.itemsPerPage);

      // check if have works or not
      if (itemsArr.length) {
        this.portfolioItems.push(...itemsArr);

        // initialize VanillaTilt for new items
        setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);

        this.portfolioItemsPage++;

      } else {

        // show message "No works" to the user
        this.setNotify({
          className: 'danger',
          msg: this.$refs.portfolioItems.getAttribute('data-no-works-msg'),
          time: 3000
        });
      }
    },

    // filter portfolio items
    filterPortfolioItems(filter) {
      this.currentFilter = filter;
      this.portfolioItemsPage = 1;

      if (this.filteredPortfolioItems.length) {
        // initialize VanillaTilt for new items
        setTimeout(() => this.initializeTilt(), 0);

      } else {
        // get new portfolio items
        this.getPortfolioItems();
      }
    },

    // contact form validation
    contactFormValidation() {

      // contact form
      const contactForm = this.$refs.contactForm;

      // form controls
      const name        = contactForm.querySelector('input[name="name"]');
      const email       = contactForm.querySelector('input[name="email"]');
      const phone       = contactForm.querySelector('input[name="phone"]');
      const message     = contactForm.querySelector('textarea');

      // form validation status
      let errors = {
        name: { required: true, minLength: true },
        email: { required: true, invalid: true },
        phone: { invalid: true },
        message: { required: true }
      };

      /* --------------- */
      /* name validation */
      /* --------------- */

      // required validation
      if (name.value === '') {
        errors.name.required = true;
        this.setNotify({
          id: 'nameRequired',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.name.required = false;
        this.dismissNotify('nameRequired');
      }

      // minlength validation
      if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
        errors.name.minLength = true;
        this.setNotify({
          id: 'nameMinLength',
          className: 'danger',
          msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
        });

      } else {
        errors.name.minLength = false;
        this.dismissNotify('nameMinLength');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
        name.classList.remove('valid');
        name.classList.add('invalid');
      } else {
        name.classList.remove('invalid');
        name.classList.add('valid');
      }

      /* ---------------- */
      /* email validation */
      /* ---------------- */

      // required validation
      if (email.value === '') {
        errors.email.required = true;
        this.setNotify({
          id: 'emailRequired',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.email.required = false;
        this.dismissNotify('emailRequired');
      }

      // email validation
      if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        errors.email.invalid = true;
        this.setNotify({
          id: 'emailInvalid',
          className: 'danger',
          msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.email.invalid = false;
        this.dismissNotify('emailInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
        email.classList.remove('valid');
        email.classList.add('invalid');
      } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
      }

      /* ---------------- */
      /* phone validation */
      /* ---------------- */

      // phone validation
      if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
        errors.phone.invalid = true;
        this.setNotify({
          id: 'phoneInvalid',
          className: 'danger',
          msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
        });

      } else {
        errors.phone.invalid = false;
        this.dismissNotify('phoneInvalid');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
        phone.classList.remove('valid');
        phone.classList.add('invalid');
      } else {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
      }

      /* ------------------ */
      /* message validation */
      /* ------------------ */

      // required validation
      if (message.value === '') {
        errors.message.required = true;
        this.setNotify({
          id: 'messageRequired',
          className: 'danger',
          msg: message.closest('.control').querySelector('.errors-msgs .required').value
        });

      } else {
        errors.message.required = false;
        this.dismissNotify('messageRequired');
      }

      // toggle invalid errors & style classes
      if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
        message.classList.remove('valid');
        message.classList.add('invalid');
      } else {
        message.classList.remove('invalid');
        message.classList.add('valid');
      }

      // send the message if the form is valid
      (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
    },

    // send message from contact form
    sendContactFormMessage(form) {
      const url = form.getAttribute('action');
      const formData = new FormData(form);

      // start loading spinner
      this.startLoading();

      // send post request
      fetch(url, { method: 'POST', body: formData })
        .then(res => res.text())
        .then(data => {
          if (data === 'success') {
            // show success message
            this.setNotify({ className: 'success', msg: form.getAttribute('data-success-msg'), time: 5000 });

            // reset all form inputs
            form.reset();

            // remove inputs valid classes
            form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));

          } else if (data === 'error') {
            // show error message
            this.setNotify({ className: 'danger', msg: form.getAttribute('data-err-msg'), time: 5000 });
          }

          // end loading spinner
          this.endLoading();

          console.log(data);
        })
        .catch(err => console.log(err));
    },

    // show messages by toast notifications
    setNotify({id, className, msg, time}) {
      const notify = {
        id: id || `${Date.now()}${this.notifications.length}`,
        className,
        msg,
        time
      };

      if (id) {
        (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);

      } else { this.notifications.push(notify); }

      // remove this notification from the array after (n) seconds
      time && setTimeout(() => this.dismissNotify(notify.id), time);
    },

    // dismiss the notifications
    dismissNotify(id) {
      const index = this.notifications.findIndex(notify => notify.id === id);
      (index > -1) && this.notifications.splice(index, 1);
    },

    // add ajax loading spinner
    startLoading() {
      this.ajaxLoading.push(true);
    },

    // remove ajax loading spinner
    endLoading() {
      this.ajaxLoading.pop();
    }
  },
  computed: {
    // flag to toggle ajax loading spinner
    isAjaxLoading() {
      return this.ajaxLoading.some(state => state === true);
    },

    // get the total years of experience
    experienceYears() {
      return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1970;
    },

    // split experience items into chunks of 3 items
    experienceChunks() {
      return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() => this.experienceItems.splice(0, 3));
    },

    // filtered portfolio items
    filteredPortfolioItems() {
      const urlParams = new URLSearchParams(window.location.search);
      const tax = urlParams.get('tax');

      if (tax) {
        return this.portfolioItems;

      } else {
        return this.portfolioItems.filter(item => this.currentFilter === 'All' || item.category === this.currentFilter);
      }
    },

    // get single portfolio item
    getSinglePortfolioItem() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');

      return this.allPortfolioItems.find(item => item.id == id);
    },

    // get the total years of copyright
    copyrightDate() {
      const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
      return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
    }
  },
  directives: {
    // clone directive
    clone: {
      mounted(el) {
        el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
      }
    },

    // add stagger delay to children elements
    staggerdelay: {
      mounted(el, binding) {
        [...el.children].forEach((child, i) => {
          child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
        });
      }
    },

    // tooltip directive
    tooltip: {
      mounted(el, binding) {
        el.classList.add('has-tooltip');
        el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
      }
    }
  }
});
app.mount('#app');
