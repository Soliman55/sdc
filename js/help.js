/* global POP */
/* global VERSION */

var HELP = new HELP_CLASS();

/** 
 * manages help actions
 * 
 * @author MeowChain Lab
 */
function HELP_CLASS() {
	
	/**
	 * credits list config
	 */
	var CREDITS = [
		{title: 'Author',		name: 'MeowChain Lab',		link: 'https://github.com/MeliodaZ1' },

		];

	//shortcuts
	this.help_shortcuts = function () {
		POP.add({title: "D", value: 'Dublicate'});
		POP.add({title: "Del", value: 'Delete selection'});
		POP.add({title: "F", value: 'Auto adjust colors'});
		POP.add({title: "G", value: 'Grid on/off'});
		POP.add({title: "L", value: 'Rotate left'});
		POP.add({title: "N", value: 'New layer'});
		POP.add({title: "O", value: 'Open file(s)'});
		POP.add({title: "R", value: 'Resize'});
		POP.add({title: "S", value: 'Save'});
		POP.add({title: "T", value: 'Trim'});
		POP.add({title: "-", value: 'Zoom out'});
		POP.add({title: "+", value: 'Zoom in'});
		POP.add({title: "CTRL + Z", value: 'Undo'});
		POP.add({title: "CTRL + A", value: 'Select all'});
		POP.add({title: "CTRL + V", value: 'Paste'});
		POP.add({title: "Arrow keys", value: 'Move active layer by 10px'});
		POP.add({title: "CTRL + Arrow keys", value: 'Move active layer by 50px'});
		POP.add({title: "SHIFT + Arrow keys", value: 'Move active layer by 1px'});
		POP.add({title: "Drag & Drop", value: 'Imports images/xml data'});
		POP.show('Keyboard Shortcuts', '');
	};
	//credits
	this.help_credits = function () {
		for (var i in CREDITS) {
			if (CREDITS[i].link != undefined)
				POP.add({title: CREDITS[i].title, html: '<a href="' + CREDITS[i].link + '">' + CREDITS[i].name + '</a>'});
			else
				POP.add({title: CREDITS[i].title, html: CREDITS[i].name});
		}
		POP.show('Credits', '');
	};
	//about
	this.help_about = function () {
		var email = 'www.Meowchainsol.com';
		POP.add({title: "Name:", value: "Meowchain-Paint" + VERSION});
		POP.add({title: "Description:", value: 'Meowchain-Paint Online Image Editor'});
		POP.add({title: "Author:", value: 'MeowChain Lab'});
		POP.add({title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'});
		POP.add({title: "Source:", html: '<a href="https://github.com/MeliodaZ1'});
		POP.show('About', '');
	};
}
