# make-it-blink

[![NPM](https://nodei.co/npm/make-it-blink.png?compact=true)](https://npmjs.org/package/make-it-blink)

A Web Component that brings back the nostalgia of the blink tag.

![Blinking](showit-gif)

You can bring back the **blink** tag using this web component:

```HTML
<script src='https://unpkg.com/make-it-blink@1.0.1/dist/blinker.min.js'></script>

...

<make-it-blink>Blink This!</make-it-blink>
```

It supports three attributes:

## duration

Description: A CSS Animation String
Default: "1s"     

```HTML
<script src='https://unpkg.com/make-it-blink@1.0.1/dist/blinker.min.js'></script>

...

<make-it-blink duration="250ms">Blink This!</make-it-blink>
```

## repeats

Description: Number of blinks
Default: "infinite"     

```HTML
<script src='https://unpkg.com/make-it-blink@1.0.1/dist/blinker.min.js'></script>

...

<make-it-blink repeats="25">Blink This!</make-it-blink>
```

## timer

Description: Timing Function
Default: "step-end"     

```HTML
<script src='https://unpkg.com/make-it-blink@1.0.1/dist/blinker.min.js'></script>

...

<make-it-blink timer="linear">Blink This!</make-it-blink>
```

Help me bring the blink tag back!*

* I am not reponsible if you actually use this in production. This is satire.