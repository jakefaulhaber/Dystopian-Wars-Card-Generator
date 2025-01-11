window.$ = (selector) => {
	return document.querySelector(selector)
}

Element.prototype.find = function(selector) {
	return this.querySelector(selector)
}

function slugify(text) {
	return text.toString().toLowerCase()
		.replace(/\s+/g, '_')
		.replace(/[^\w-]+/g, '')
		.replace(/__+/g, '_')
		.replace(/^_+/, '')
		.replace(/_+$/, '')
}

function getImage(string) {
	const images = ['Imperium', 'Flagship', 'Surface Unit', 'Submerged Unit', 'Skimming Unit', 'Aerial Unit'] 

	if (images.indexOf(string) > -1) {
		return `images/trait_${slugify(string)}.png`
	}
	return null
}

function setCookie(name, value, days) {
	let expires = ''
	if (days) {
		let date = new Date()
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
		expires = `; expires=${date.toUTCString()}`
	}
	document.cookie = `${name}=${value || ''}${expires}; path=/`
}

function getCookie(name) {
	let nameEQ = `${name}=`
	let ca = document.cookie.split(';')
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) == ' ') c = c.substring(1, c.length)
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
	}
	return null
}

function clearCookie(name) {
	setCookie(name, '', -1)
}