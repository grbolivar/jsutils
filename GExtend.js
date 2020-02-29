/**
Extends vanilla JS with utils functions
*/

Array.move = function (arr, old_index, new_index) {
	if (new_index >= arr.length) {
		var k = new_index - arr.length;
		while ((k--) + 1) {
			arr.push(undefined);
		}
	}
	arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
	return arr;
};

Array.removeIndexed = function (arr, from, to) {
	var rest = arr.slice((to || from) + 1 || arr.length);
	arr.length = from < 0 ? arr.length + from : from;
	arr.push.apply(arr, rest);
	return arr;
};

Array.remove = function (arr, el) {
	let index = arr.findIndex((e) => e === el);
	if (index >= 0) {
		Array.removeIndexed(arr, index, index);
	}
	return arr;
}

Array.unique = function (arr) {
	return arr.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
};

Array.clone = Array.from;

Number.random = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

Element.byId = function (id) {
	return document.getElementById(id);
};

Element.byTag = function (tag) {
	return document.body.getElementsByTagName(tag);
};

Element.addClass = function (obj, cls) {
	cls = cls.trim();
	if (!obj.className.split(" ").includes(cls)) {
		obj.className += " " + cls;
	}
};

Element.removeClass = function (obj, cls) {
	cls = cls.trim();
	obj.className = obj.className.split(" ").filter(e => e != cls).join(" ");
};

Object.clone = function (original) {
	if (Array.isArray(original)) return Array.clone(original);

	let clone = {};

	Object.entries(original).forEach(([key, val]) => 
		clone[key] = (val !== null && typeof val === 'object') ? Object.clone(val) : val
	);

	return clone;
};
