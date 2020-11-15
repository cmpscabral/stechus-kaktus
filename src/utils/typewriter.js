const
	defaults = {
		words: null,
		delay: 2000,
		speedTyping: 300,
		speedRemove: 50,
		onType: null,
		onRemove: null
	}
;

export class Typewriter {
	constructor(options) {
		if (!options.words) {
			throw new Error('Missing words array or function');
		}

		this.options = {...defaults, ...options};
		this.text = '';
		this.timer = null;
		this.word = null;
	}

	get delta() {
		return Math.random() * 100;
	}

	typing = () => {
		const
			{delta, word, options: {delay, speedTyping, onType}} = this
		;

		if (word && word.length) {
			this.text += word.shift();
			this._isFunction(onType) && onType(this.text);
			this.timer = window.setTimeout(this.typing, speedTyping - delta);
		} else {
			this.timer = window.setTimeout(this.remove, delay);
		}

		return this;
	}

	remove = () => {
		const
			{delta, options: {speedRemove, speedTyping, onRemove}} = this
		;

		if (this.text.length) {
			this.text = this.text.slice(0, -1);
			this._isFunction(onRemove) && onRemove(this.text);
			this.timer = window.setTimeout(this.remove, speedRemove);
		} else {
			this.word = this.randomWord().split('');
			this.timer = window.setTimeout(this.typing, speedTyping - delta);
		}
	}

	clear() {
		this.text = '';
		window.clearTimeout(this.timer);
	}

	randomWord() {
		const {words} = this.options;

		if (this._isFunction(words)) {
			return words();
		} else if(Array.isArray(words)) {
			return words[Math.floor(Math.random() * words.length)];
		}
	}

	_isFunction(value) {
		return (value && typeof value === 'function');
	}
}
