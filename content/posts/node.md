---
title: "Start with Node"
image: "node.jpg"
excerpt: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications."
date: "2021-03-20"
slug: "node"
isFeatured: false
---

# ECMAScript 2015 (ES6) and beyond

Node.js is built against modern versions of V8. By keeping up-to-date with the latest releases of this engine, we ensure new features from the JavaScript ECMA-262 specification are brought to Node.js developers in a timely manner, as well as continued performance and stability improvements.

### All ECMAScript 2015 (ES6) features are split into three groups for shipping, staged, and in progress features:

All shipping features, which V8 considers stable, are turned on by default on Node.js and do NOT require any kind of runtime flag.
Staged features, which are almost-completed features that are not considered stable by the V8 team, require a runtime flag: --harmony.
In progress features can be activated individually by their respective harmony flag, although this is highly discouraged unless for testing purposes. Note: these flags are exposed by V8 and will potentially change without any deprecation notice.
Which features ship with which Node.js version by default?
The website node.green provides an excellent overview over supported ECMAScript features in various versions of Node.js, based on kangax's compat-table.

### Which features are in progress?

New features are constantly being added to the V8 engine. Generally speaking, expect them to land on a future Node.js release, although timing is unknown.

You may list all the in progress features available on each Node.js release by grepping through the --v8-options argument. Please note that these are incomplete and possibly broken features of V8, so use them at your own risk:
