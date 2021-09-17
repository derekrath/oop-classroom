class Marker {
    constructor(size, color, remainingInk) {
		this.size = size;
		this.color= color;
		this.remainingInk = remainingInk;
        this.words = '';
        this.numberCharacters = 0;
	}
	write(word) {
	    this.words.concat(words,' ',word)
        // const characters = word.replace(/\s/g, '').length;
        const newCharacters = word.length
        this.remainingInk -= newCharacters;
        return word;
        if (remainingInk === 0) {
            return characters
        }

        for (character of characters) {
            if (character === ' ') {
                this.newWord.concat(newWord, character)
            } else {
                this.newWord.concat(newWord, character)
                this.numberCharacters++
                this.remainingInk--
                if (numberCharacters === remainingInk) {
                    return newWord;
                }
            }
        }
	}
}

module.exports = Marker

// new Marker()
// - should accept the following arguments: size, color, remainingInk
// - should have properties by the same name
// .write()
// - should decrement `remainingInk` by the number of characters written
// - should not decrement any characters that are spaces
// - should return the word that is inputted
// - if the marker runs out of ink, it should only return the number of characters equal to remaining ink
// - if the marker runs out of ink, it can still write spaces