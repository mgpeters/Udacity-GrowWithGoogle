/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!

/*
Step one: Figure out the Parent of id family1
Step two: append all of the necessary html for “family2” to the Parent
Step three: now “#family2” exists and you can append the necessary html for "bruce"
Step four: now “#bruce” exists and you can append the necessary html for "hunter and madison"
Step five: append madison and hunter as children to “#bruce”`
*/

var source, family2, bruce, madison, hunter;

source = $("#family1").parent();
family2 = $("<div id='family2'><h1>Family2</h1></div>");
bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
madison = $("<div id='madison'><h3>Madison</h3></div>");
hunter = $("<div id='hunter'><h3>Hunter</h3></div>");

source.append(family2);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);

