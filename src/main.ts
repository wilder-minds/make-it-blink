import Blinker from "./blinker.ce.vue";
import { defineCustomElement } from "vue";
 
const blinker = defineCustomElement(Blinker);
 
function register() {
  customElements.define("make-it-blink", blinker);
}

register();

export default function() {
  register();
}