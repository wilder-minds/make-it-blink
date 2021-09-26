<template>
  <div class="blinker-container"
       :style='{ 
                  "animation-duration": duration, 
                  "animation-iteration-count": repeats, 
                  "animation-timing-function": timer 
               }'>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    duration: {
      default: "1s"
    },
    repeats: {
      default: "infinite"
    },
    timer: {
      default:"step-end"
    }
  }
})
</script>

<style>
@keyframes blinker {
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
 
.blinker-container {
  animation-name: blinker;
}</style>
