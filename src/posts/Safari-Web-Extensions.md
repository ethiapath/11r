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

Browser extensions are great! They let users agument there most used application. Their web browser.
They let you imporove security, automate tasks, and do fun stuff!
Chrome seems to have the most extensions avalibe. Which makes sense since a chrome extension is just a few steps away from becoming a chrome os app.
Firefox always had greate extension support.
Safari tho... not that great. You have to install everything from the mac app store. It's pretty limited, and some extensions *gasp* cost money! Most of the extensions are pretty subpar.
To the point where I only have my password manager installed. (thankfully apple added an in-built ad blocker privacy tool).
And a "dark mode" extension that just doesn't come close to [dark reader]() to give a readable experience on most websites.
[Look what it does to twitter]()

[But it looks like apple did ad support for the universal web extensions api](https://developer.apple.com/videos/play/wwdc2020/10665/), and most of the best extensions are open source

soo we should be able to just package our extensions and slot them into safari right?

I got used to downloading and sikiming over my extensions after using [ungoogled-chromium]() Which blocks all google domains(including the chrome web store)!
Thankfully most of my favirote extensions were open source on github. So it was just a few steps to clone the repo, run the build process (if any), then load the unpacked extension into chromium!
This had the added benifit of being able to audit my extensions before letting them have access to all my tabs! Not that I really knew what to look for, but hey it's there (I mostly just looked for weird http requests).

So safari?