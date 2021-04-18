import { html } from 'lit-html'
import './bto-button.js'

export default {
  title: "Example/Button",
  component: 'bto-button',
  argTypes: {
    label: { 
      control: "text" 
    },  
    size: { 
      control: { 
        type: "select", 
        options: ['small', 'medium', 'large'] 
      } 
    },  
    color: { 
      control: { 
        type: "select", 
        options: ['primary', 'secondary'] 
      } 
    },  
  }
};

const Template = ({ label, size, color }) => {
  return html `
    <bto-button 
      label="${label}" 
      size="${size}" 
      color="${color}"></bto-button>
  `
}

export const Basic = (args) => Template(args);
Basic.args = {
  label: "Button",
  size: 'small',
  color: 'primary'
}
