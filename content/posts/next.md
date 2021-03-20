---
title: "Start with Next"
image: "next.jpg"
excerpt: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed."
date: "2021-03-19"
slug: "next"
isFeatured: true
---

[The NEXT JS Handbook ](https://www.freecodecamp.org/news/the-next-js-handbook/)

# Introduction

Working on a modern JavaScript application powered by React is awesome until you realize that there are a couple problems related to rendering all the content on the client-side.

First, the page takes longer to become visible to the user, because before the content loads, all the JavaScript must load, and your application needs to run to determine what to show on the page.

Second, if you are building a publicly available website, you have a content SEO issue. Search engines are getting better at running and indexing JavaScript apps, but it's much better if we can send them content instead of letting them figure it out.

The solution to both of those problems is server rendering, also called static pre-rendering.

Next.js is one React framework to do all of this in a very simple way, but it's not limited to this. It's advertised by its creators as a zero-configuration, single-command toolchain for React apps.

It provides a common structure that allows you to easily build a frontend React application, and transparently handles server-side rendering for you.

## The main features provided by Next.js

Here is a non-exhaustive list of the main Next.js features:

#### Hot Code Reloading

Next.js reloads the page when it detects any change saved to disk.

#### Automatic Routing

Any URL is mapped to the filesystem, to files put in the pages folder, and you don't need any configuration (you have customization options of course).

#### Single File Components

Using styled-jsx, completely integrated as built by the same team, it's trivial to add styles scoped to the component.

#### Server Rendering

You can render React components on the server side, before sending the HTML to the client.

#### Ecosystem Compatibility

Next.js plays well with the rest of the JavaScript, Node, and React ecosystem.
