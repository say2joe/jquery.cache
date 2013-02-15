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
 * @title
 * @author Joe Johnson (say2joe@gmail.com)
 *
 * $.cache: Extends jQuery to allow for caching of jQuery objects.
 * This functionality enables faster DOM manipulation without overuse
 * of selector lookups on *persistent* DOM elements. If you have many
 * of the same selector lookups throughout your code, this functionality
 * will dramatically increase the performance of your web application.
 *
 * @param  {String}			label		A label for the DOM node/collection to reference.
 * @param  {String}			selector	(optional) A valid Sizzle/jQuery selector.
 * @return {jQuery Object}				A chainable jQuery object representing the DOM.
 */
(function($){
	var cache = {};
	function updateElements() {
		var coll = $(this.selector),
			c = Math.max(this.length,coll.length);
		while (c--) {
			if (coll[c]) {
				this[c] = coll[c];
			} else if (this[c]) {
				delete this[c];
			}
		}
		this.length = coll.length;
		return this;
	}
	$.extend({
		cache: function( label, selector ) {
			if (selector) {
				cache[label] = $(selector);
				cache[label].selector = selector;
				cache[label].refresh = updateElements;
			}
			return cache[label];
		}
	});
})(jQuery);