class Desk {
    constructor(length, width, height, isWhiteboard) {
		this.length = length;
		this.width= width;
		this.height = height;
		this.isWhiteboard = isWhiteboard;
		this.content = '';
	}
	write(string) {
	    // this.content.concat(content, string);
        this.content += string;
	}
    wipe() {
		if (this.isWhiteboard === true) {
			this.content = '';
		}
	}
}
module.exports = Desk

// Desk
//     new Desk()
//       - should accept the following arguments: length, width, height, isWhiteboard
//       - should have properties by the same name
//       - should have a property of `content` which defaults to an empty string
//     .write()
//       - should add the inputted string to the `content` property
//       - should allow for multiple writes
//     .wipe()
//       - should clear the `content` if `isWhiteboard` is set to true
//       - should *not* clear the `content` if `isWhiteboard` is set to false