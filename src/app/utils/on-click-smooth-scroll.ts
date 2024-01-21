import {MouseEventHandler} from "react";

/**
 * Listen for click events on an anchor link and smooth scroll to the target element.
 *
 * If the path is on another page it will instead navigate to the new page and
 * instantly scroll to the target element.
 *
 * If there is no target element it will scroll to the top of the page.
 *
 * The listened-on element may specify where in the target element to scroll to with a
 * `data-scroll-position` attribute - either `center` (the default), `start`, `end` or `nearest`.
 */
export const onClickSmoothScroll: MouseEventHandler<HTMLAnchorElement> = (
	event
) => {
	event.preventDefault();

	const fromUrl = new URL(global.location.href);
	const toUrl = new URL(event.currentTarget.href, fromUrl);

	if (toUrl.pathname === fromUrl.pathname) {
		if (toUrl.hash === "") {
			global.scrollTo({top: 0, behavior: "smooth"});
			history.replaceState(null, "", " ");
		} else {
			const targetElement = document.querySelector(toUrl.hash);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
					block:
						(event.currentTarget.dataset[
							"scrollPosition"
						] as ScrollLogicalPosition) ?? "center",
				});

				history.replaceState(null, "", toUrl.hash);
			} else {
				console.error(
					"No element with target ID found on current page."
				);
			}
		}
	} else {
		global.location.assign(toUrl);
	}
};
