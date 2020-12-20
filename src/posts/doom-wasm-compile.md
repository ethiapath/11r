---
layout: post
title: Doom 1993 on WASM?
excerpt: Lets compile Doom for the browser!
date: 2020-12-16
updatedDate: 2020-12-16
tags:
  - post
  - code
draft: true
---


Doom is a game that I never played when I was a kid.

Recently I started playing it again. Probably out of some false nostalgia or hype.
I kinda like old school video games. The percision of the movment and the responsivness is something that many modern games lack. It always feels like you're stuck in a animation. The heavyness of having a body.
But not with doom! It was one of the first 3d shooters and it's timless! [Playing the GZDoom on my 2015 13" MBP it runs at 200 FPS](https://zdoom.org/downloads)

but down to comipling! (Doom is supossed to have great source code)

I could try to compile the original source code. I might just try that if this doens't workout.
[Since GZDoom has some dependencies](https://zdoom.org/wiki/Compile_ZDoom_on_Mac_OS_X#Requirements)

I've cloned

- [wasm-doom]()
- [id-software DOOM]()
- [gzdoom]()

Intially trying to run `cmake .` or `make` is giving me errors. Probablly since I havn't installed the dependencies yet.

The wasm-doom project seems like a good place to start since it's basically doing what I want already.

Looking in it's [CMakeLists.txt]() there's a reference to `em_link_js_library`. `em` being the abriviation for emscription, the go to wasm compiler. 




