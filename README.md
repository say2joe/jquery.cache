# jQuery DOM Cache
================

jQuery DOM Cache is a plugin for caching DOM elements and collections preventing overuse of selector lookups on persistent DOM structures.

$.cache/$.domCache: Extends jQuery to allow for caching of jQuery objects.
This functionality enables faster DOM manipulation without overuse
of selector lookups on *persistentDOM elements. If you have many
of the same selector lookups throughout your code, this functionality
will dramatically increase the performance of your web application.
If a DOM node is removed from the document, the cache is updated accordingly -- reduces possibility of memory leaks / improves GC.

If you are using jQuery < 2.x, domCache is the plugin name. If you prefer
to use domCache as the name, remove the conditional var "name" assigment.

NOTE: Remove objects from the cache by passing an empty string selector.

NOTE: Do NOT bind events to nodes which may be removed from the document.

NOTE: $.cache is a hidden deprecated core property of jQuery (1.x) which is being removed.


## Usage
$.domCache is the method used for all versions of jQuery < 2.x.
If (built-in) $.cache property is non-existent, $.cache is used instead.

### Caching DOM Objects
$.domCache("videos",".yt,.vimeo").css({border:"1px solid blue"});
$.domCache("animImages","img.animated").hide();
$.domCache("forms","form");

### Retrieving Cached Objects
$.domCache("animImages").show("show");
$.domCache("videos").fadeOut();

### Create a Local Reference
var $myForms = $.domCache("forms");
$myForms.on("submit",function(){});

### Update the Collection
$.domCache("videos").refresh();

### Remove a Cached Object
$.domCache("forms",'');