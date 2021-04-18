import { LitElement, html, css } from 'lit-element'

export class Button extends LitElement {

  static get styles() {
    return css`
			:host {
				--bto-button-font-size-small: 12px;
				--bto-button-font-size-medium: 14px;
				--bto-button-font-size-large: 16px;
			}

			button {
				font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
				font-weight: 700;
				border: 0;
				border-radius: 3em;
				cursor: pointer;
				display: inline-block;
				line-height: 1;				
			}

			.storybook-button--small {
				font-size: var(--bto-button-font-size-small);
				padding: 10px 16px;
			}

			.storybook-button--medium {
				font-size: var(--bto-button-font-size-meduim);
				padding: 11px 20px;
			}

			.storybook-button--large {
				font-size: var(--bto-button-font-size-large);
				padding: 12px 24px;
			}

			.storybook-button--primary {
				color: white;
				background-color: #1ea7fd;
			}

			.storybook-button--secondary {
				color: #333;
				background-color: transparent;
				box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
			}
    `
  }

	static get properties() {
		return {
			label: { type: String },
			size: { type: String },
			color: { type: String }
		}
	}

	constructor() {
		super()
		this.size = 'large'
		this.color = 'primary'
	}

	render() {
		return html `
			<button type="button" class="storybook-button--${this.size} storybook-button--${this.color}">${this.label}</button>
		`
	}

}

customElements.define('bto-button', Button)