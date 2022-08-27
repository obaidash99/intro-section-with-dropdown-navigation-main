(() => {
	const openNavMenu = document.querySelector('.open-nav-menu'),
		closeNavMenu = document.querySelector('.close-nav-menu'),
		navMenu = document.querySelector('.nav-menu'),
		menuOverlay = document.querySelector('.menu-overlay'),
		bgcImage = document.querySelector('.main-img img'),
		mediaSize = 991;

	openNavMenu.addEventListener('click', toggleNav);
	closeNavMenu.addEventListener('click', toggleNav);
	//  Closing NavBar By Clicking Outside
	menuOverlay.addEventListener('click', toggleNav);

	function toggleNav() {
		navMenu.classList.toggle('open');
		menuOverlay.classList.toggle('active');
		document.body.classList.toggle('hidden-scrolling');
	}

	navMenu.addEventListener('click', (event) => {
		if (event.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize) {
			// prevent default anchor click behavior
			event.preventDefault();
			const menuItemHasChildren = event.target.parentElement;
			// If menuItemHasChildren is already expanded, collapse it
			if (menuItemHasChildren.classList.contains('active')) {
				collapseSubMenu();
			} else {
				// 	if (navMenu.querySelector('.menu-item-has-children.active')) {
				// 		// Collapse Existing Expanded menuItemHasChildren
				// 		collapseSubMenu();
				// 	}

				// Expand New menuItemHasChildren
				menuItemHasChildren.classList.add('active');
				const subMenu = menuItemHasChildren.querySelector('.sub-menu');
				subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
			}
		}
	});

	function collapseSubMenu() {
		navMenu.querySelector('.menu-item-has-children .sub-menu').removeAttribute('style');
		navMenu.querySelector('.menu-item-has-children.active').classList.remove('active');
	}

	function resizeFix() {
		// if nevMenu is open, close it
		if (navMenu.classList.contains('open')) {
			toggleNav();
		}
		// if menuItemHasChildren is expanded, collapse it
		if (navMenu.querySelector('.menu-item-has-children.active')) {
			collapseSubMenu();
		}
	}

	window.addEventListener('resize', function () {
		if (this.innerWidth > mediaSize) {
			resizeFix();
		}
	});

	// change main Photo on small devices
	if (window.innerWidth <= mediaSize) {
		bgcImage.setAttribute('src', './images/image-hero-mobile.png');
	} else {
		bgcImage.setAttribute('src', './images/image-hero-desktop.png');
	}
})();
