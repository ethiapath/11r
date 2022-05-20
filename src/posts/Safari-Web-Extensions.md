---
layout: post
title: Safari Web Extensions
excerpt: Add your own damn exensions
date: 2020-12-17
updatedDate: 2020-12-17
tags:
  - post
  - code
draft: true
---

Browser extensions are great! They let users agument the most used application(browsers) and have more control over their own experience.
They let you imporove security, automate tasks, and do fun stuff!
Chrome seems to have the most extensions avalibe. Which makes sense since a chrome extension is just a few steps away from becoming a chrome os app(which is just a fancy website).
Firefox always had a great extension selection.
Safari tho... not that great. You have to install everything from the mac app store. Which is pretty limited, and some extensions *gasp* cost money! Most of the extensions are pretty subpar.
To the point where I just have my essential extensions installed. (thankfully apple added a built-in ad blocker privacy tool).
[dark reader]() to give a readable experience on most websites, and my password manager.


soo we should be able to just package our extensions and slot them into safari right?

I got used to downloading and sikiming over my extensions after using [ungoogled-chromium]() Which blocks all google domains(including the chrome web store)!
Thankfully most of my favirote extensions are open source on github. So it was just a few steps to clone the repo, run the build process (if any), then load the unpacked extension into chromium!
This had the added benifit of being able to audit my extensions before letting them have access to all my tabs! Not that I really knew what to look for, but hey it's there (I mostly just looked for weird http requests).

So safari?

[But it looks like apple did ad support for the universal web extensions api](https://developer.apple.com/videos/play/wwdc2020/10665/), and most of the best extensions are open source

## How does safari handle extensions and can we port chrome extension code to safari?

on Macos
Requirements:
- xcode 12+
- command-line tools


Apple provided web-extension-converter tool
```
xcrun safari-web-extension-converter [options] path/to/extension
```
Give you an xcode project

