/*!
 * jQuery Cookie Plugin
 * https://github.com/say2joe/jquery.cache
 *
 * Copyright 2013, Joe Johnson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

/**
 * @version 1.0
 * @title jQuery Cache
 * @author Joe Johnson (say2joe@gmail.com)
 *
 * $.cache: Extends jQuery to allow for caching of jQuery objects.
 * This functionality enables faster DOM manipulation without overuse
 * of selector lookups on *persistent* DOM elements. If you have many
 * of the same selector lookups throughout your code, this functionality
 * will dramatically increase the performance of your web application.
 *
 * NOTE: Remove objects from the cache by passing an empty string selector.
 * NOTE: Do NOT bind events to nodes which may be removed from the document.
 *
 * @param  {String} label		A label for the DOM node/collection to reference.
 * @param  {String} selector	(optional) A valid Sizzle/jQuery selector.
 * @return {jQuery Object}		A chainable jQuery object representing the DOM.
 *
 * If you are using jQuery < 2.x, domCache is the plugin name. If you prefer
 * to use domCache as the name, remove the conditional var "name" assigment.
 */

(function($){

	var cache = {},
		extendMethods = {},
		name = $.cache? "domCache" : "cache";

	$(document).on("DOMNodeRemoved",function(event){
		var label, coll, l;
		for (label in cache) {
			l = (coll = cache[label]).length;
			while (l--) {
				if (coll[l] === event.target) {
					delete coll[l]; --coll.length;
				}
			}
		}
	});

	function updateElements() {
		var cached = this,
			jqo = $(cached.selector),
			c = Math.max(cached.length,jqo.length);
		while (c--) {
			if (jqo[c]) {
				cached[c] = jqo[c];
			} else if (cached[c]) {
				delete cached[c];
			}
		}
		cached.length = jqo.length;
		return cached;
	}

	extendMethods[name] = function( label, selector ) {
		if (selector) {
			cache[label] = $(selector);
			cache[label].selector = selector;
			cache[label].refresh = updateElements;
		} else if (selector === '') {
			delete cache[label];
		}
		return cache[label];
	};

	$.extend(extendMethods);

})(jQuery);