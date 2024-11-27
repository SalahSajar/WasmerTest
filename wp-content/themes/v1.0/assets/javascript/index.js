// Remove Initial Transitions
	window.addEventListener("load", () => {
		document.body.classList.remove("preload");
	});
//*************************************************************************************
//*************************************************************************************



// FAQ Open/Close Functionality
	const FrequentlyAskedQuestions__FAQ__BLOCKS = document.querySelectorAll(".FrequentlyAskedQuestions__FAQ_BLOCK");

	FrequentlyAskedQuestions__FAQ__BLOCKS?.forEach(FrequentlyAskedQuestions__FAQ => {
		const FrequentlyAskedQuestions__QUESTION__BTN = FrequentlyAskedQuestions__FAQ.querySelector(".FrequentlyAskedQuestions__QUESTION_BTN");

		FrequentlyAskedQuestions__QUESTION__BTN?.addEventListener("click", evt => {
			// Open or Close Answer Block
			if(FrequentlyAskedQuestions__FAQ.classList.contains("is_active")){
				closeOpened_FAQ__HANDLER(FrequentlyAskedQuestions__FAQ);
			} else {
				const currentlyOpenAnswer__EL = [...FrequentlyAskedQuestions__FAQ__BLOCKS].find(FAQ_Block => FAQ_Block.classList.contains("is_active"));
				currentlyOpenAnswer__EL && closeOpened_FAQ__HANDLER(currentlyOpenAnswer__EL);

				openFAQ__HANDLER(FrequentlyAskedQuestions__FAQ);
			}
		});
	});

	function openFAQ__HANDLER(el){
		const FrequentlyAskedQuestions__ANSWER__BLOCK = el.querySelector(".FrequentlyAskedQuestions__ANSWER_BLOCK");
		const FrequentlyAskedQuestions__ANSWER__EL = el.querySelector(".FrequentlyAskedQuestions__ANSWER__CONTENT_WRAPPER");

		// Answer Block Height
		const answer__HEIGHT = FrequentlyAskedQuestions__ANSWER__EL.offsetHeight;

		// Add Opening Class From FAQ Block
		el.classList.add("is_active");

		// Show FAQ answer
		FrequentlyAskedQuestions__ANSWER__BLOCK.setAttribute("aria-hidden", "false");
		FrequentlyAskedQuestions__ANSWER__BLOCK.style.height = `${answer__HEIGHT}px`;
	}

	function closeOpened_FAQ__HANDLER(el){
		const currentlyOpenFAQ__ANSWER_EL = el.querySelector(".FrequentlyAskedQuestions__ANSWER_BLOCK");

		// Remove Opening Class From FAQ Block
		el.classList.remove("is_active");

		// Hide FAQ answer
		currentlyOpenFAQ__ANSWER_EL.setAttribute("aria-hidden", "true");
	}
//*************************************************************************************
//*************************************************************************************



// Mobile menu Close/Open Functionalities
	const openMobileMenu__BTN = document.querySelector(".mobile_nav_menu__OPEN_MENU__BTN");
	const closeMobileMenu__BTN = document.querySelector(".mobile_nav_menu__CLOSE_MENU__BTN");
	const mobileMenu__BLOCK = document.querySelector(".mobile_nav_menu__BLOCK");
	const mobile_nav_menu__ITEMS = document.querySelectorAll(".mobile_nav_menu__ITEM_LINK");


	openMobileMenu__BTN.addEventListener("click", openMobileMenu__HANDLER);

	closeMobileMenu__BTN.addEventListener("click", closeMobileMenu__HANDLER);

	function openMobileMenu__HANDLER(){
		openMobileMenu__BTN.classList.add("mobile_menu_is_open");
		mobileMenu__BLOCK.dataset.openmenu = "true";
	}

	function closeMobileMenu__HANDLER(){
		const mobileMenu__multiLang__isOpen = mobileMenu__multiLang__BLOCK.dataset.open == "true" && mobileMenu__multiLangs__LIST.getAttribute("aria-hidden") == "false";

		openMobileMenu__BTN.classList.remove("mobile_menu_is_open");
		mobileMenu__BLOCK.dataset.openmenu = "false";

		if(mobileMenu__multiLang__isOpen) close_MobileMenu__multiLang__HANDLER();
	}

	mobile_nav_menu__ITEMS.forEach(mobile_nav_menu__ITEM=>{
		mobile_nav_menu__ITEM.addEventListener("click", evt=>{

			const timeout_to_close__mobileMenu = setTimeout(()=>{
				console.log("---Close Mobile Menu overlay");
				closeMobileMenu__HANDLER();
			}, 600);
			
			return ()=>{
				clearTimeout(timeout_to_close__mobileMenu);
			}
		});
	});
//*************************************************************************************
//*************************************************************************************



// Mobile menu multi-lang Open/Close Functionalities
	const mobileMenu__multiLang__BLOCK = document.querySelector(".mobile_nav_menu__MULTILANG_BLOCK");
	const mobileMenu__multiLangs__LIST = document.querySelector(".multilangs__LIST__BLOCK");
	const mobileMenu__multiLang__BTN = document.querySelector(".mobile_nav_menu__MULTILANG__BTN");

	mobileMenu__multiLang__BTN.addEventListener("click", evt=>{
		const mobileMenu__multiLang__isOpen = mobileMenu__multiLang__BLOCK.dataset.open == "true" && mobileMenu__multiLangs__LIST.getAttribute("aria-hidden") == "false";
	
		if(mobileMenu__multiLang__isOpen){
			close_MobileMenu__multiLang__HANDLER();
		} else {
			open_MobileMenu__multiLang__HANDLER();
		}
	});

	function close_MobileMenu__multiLang__HANDLER(){
		mobileMenu__multiLang__BLOCK.dataset.open = "false";
		mobileMenu__multiLangs__LIST.setAttribute("aria-hidden", "true");
	}

	function open_MobileMenu__multiLang__HANDLER(){
		mobileMenu__multiLang__BLOCK.dataset.open = "true";
		mobileMenu__multiLangs__LIST.setAttribute("aria-hidden", "false");
	}
//*************************************************************************************
//*************************************************************************************



// Desktop multi-lang dropdown Open/Close Functionalities
	const desktop__multiLang_dropdown__BLOCK = document.querySelector(".desktop_multilangs__Dropdown__BLOCK");
	const desktop__multiLang_dropdown__BLOCK__CONTENT_WRAPPER = document.querySelector(".desktop_multilangs__Dropdown__BLOCK .desktop_multilangs__Dropdown__CONTENT_WRAPPER");
	const desktop__multiLang_dropdown__BTN = document.querySelector(".header_cta__BTN.multilang_cta__BTN");
	const desktop__multiLang_dropdown__LIST = document.querySelector(".desktop_multilangs__LIST");

	desktop__multiLang_dropdown__BTN.addEventListener("click", evt=>{
		const multiLang_dropdown__isOpen = desktop__multiLang_dropdown__BLOCK.getAttribute("aria-hidden") == "false" && desktop__multiLang_dropdown__BTN.dataset.open == "true";

		if(multiLang_dropdown__isOpen){
			close_multiLang_dropdown__HANDLER();
		} else {
			open_multiLang_dropdown__HANDLER();
		}
	});

	function close_multiLang_dropdown__HANDLER(){
		desktop__multiLang_dropdown__BLOCK.setAttribute("aria-hidden", "true");
		desktop__multiLang_dropdown__BTN.dataset.open = "false";

		desktop__multiLang_dropdown__BLOCK__CONTENT_WRAPPER.style.height = `0px`;
	}

	function open_multiLang_dropdown__HANDLER(){
		const desktop__multiLang_dropdown__LIST__HEIGHT = desktop__multiLang_dropdown__LIST.offsetHeight;

		console.log("multi-lang dropdown list height ",desktop__multiLang_dropdown__LIST__HEIGHT);

		desktop__multiLang_dropdown__BLOCK.setAttribute("aria-hidden", "false");
		desktop__multiLang_dropdown__BTN.dataset.open = "true";

		desktop__multiLang_dropdown__BLOCK__CONTENT_WRAPPER.style.height = `${desktop__multiLang_dropdown__LIST__HEIGHT}px`;
	}

	window.addEventListener("click", evt=>{
		if(!desktop__multiLang_dropdown__BTN.contains(evt.target) && (desktop__multiLang_dropdown__BLOCK.getAttribute("aria-hidden") == "false" && desktop__multiLang_dropdown__BTN.dataset.open == "true")){
			close_multiLang_dropdown__HANDLER();
		}
	});
//*************************************************************************************
//*************************************************************************************





// Adapt on Resize
	window.addEventListener("resize", evt=>{
		const bodyWidth = document.body.clientWidth;

		if(bodyWidth >= 768){

			// Close Mobile menu if its open when client width is greater than 768px
			if(openMobileMenu__BTN.classList.contains("mobile_menu_is_open") || mobileMenu__BLOCK.dataset.openmenu == "true"){
				closeMobileMenu__HANDLER();
			}
			
			// Close Multi-lang Dropdown if its open when client width is greater than 768px
			if(desktop__multiLang_dropdown__BLOCK.getAttribute("aria-hidden") == "false" && desktop__multiLang_dropdown__BTN.dataset.open == "true"){
				close_multiLang_dropdown__HANDLER();
			}
		}
	});
//*************************************************************************************