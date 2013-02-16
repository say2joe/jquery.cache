jquery.cache
============

jQuery Cache is a plugin for caching DOM elements and collections preventing overuse of selector lookups on persistent DOM structures.

 $.cache: Extends jQuery to allow for caching of jQuery objects.
 This functionality enables faster DOM manipulation without overuse
 of selector lookups on *persistentDOM elements. If you have many
 of the same selector lookups throughout your code, this functionality
 will dramatically increase the performance of your web application.
 If a DOM node is removed from the document, the cache is updated.

 If you are using jQuery < 2.x, domCache is the plugin name. If you prefer
 to use domCache as the name, remove the conditional var "name" assigment.

 NOTE: Remove objects from the cache by passing an empty string selector.
 NOTE: Do NOT bind events to nodes which may be removed from the document.