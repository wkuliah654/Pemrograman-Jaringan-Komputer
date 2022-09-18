class Crypt {
	upercase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	lowercase = "abcdefghijklmnopqrstuvwxyz"
	symbol    = "`~!@#$%^&*()_-+={[}}|\\:;\"'<,>.?/"
	number    = "1234567890"

	chiperText = this.upercase + this.lowercase + this.symbol + this.number

	// constructor(text) {
	// 	this.text = text
	// }

	searchCode(key) {
		for (let i=0; i<this.chiperText.length; i++) {
			if (key == this.chiperText[i]) {
				return i
			}
		}
	}

	encrypt(text, key = 113) {
		let decryptText = ""

		for (let i=0; i<text.length; i++) {
			let index = this.searchCode(text[i])
			if (index < 999) {
				let code
				if (Number.isInteger(key)) {
					key = key % this.chiperText.length
					code = (index + key) % this.chiperText.length
					decryptText = decryptText + this.chiperText[code]
				} else {
					let x = this.searchCode(key[i%key.length])
					code = (index + x) % this.chiperText.length
					decryptText = decryptText + this.chiperText[code]
				}
			}
		}

		return decryptText
	}

	decrypt(text, key = 113) {
		let encryptText = ""

		for (let i=0; i<text.length; i++) {
			let index = this.searchCode(text[i])
			if (index < 999) {
				let code
				if (Number.isInteger(key)) {
					key = key % this.chiperText.length
					code = (index - key) % this.chiperText.length
					encryptText = encryptText + this.chiperText[code]
				} else {
					let x = this.searchCode(key[i%key.length])
					code = (index - x) % this.chiperText.length
					encryptText = encryptText + this.chiperText[code]
				}
			}
		}

		return encryptText
	}
}

module.exports = Crypt // agar class dapat di akses oleh server