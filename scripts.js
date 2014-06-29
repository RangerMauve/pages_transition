function to_a(a) {
	return [].slice.call(a);
}

function $(sel) {
	return to_a(document.querySelectorAll(sel));
}

HTMLElement.prototype.$ = function (sel) {
	return to_a(this.querySelectorAll(sel));
}


var pages = $(".pages");

pages.forEach(function (pages_container) {
	var container = pages_container.children[1].children[0];
	var pages = container.children;
	container.style.width = (pages.length * 100) + "%";

	var nav = pages_container.children[0];
	to_a(nav.children).forEach(function (child, index) {
		child.addEventListener("click", function () {
			container.style.left = (-index * 100) + "%";
		})
	});
});
