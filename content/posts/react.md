---
title: "Start with React"
image: "react.jpg"
excerpt: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
date: "2021-03-20"
slug: "react"
isFeatured: true
---

# React v17.0

Today, we are releasing React 17! We’ve written at length about the role of the React 17 release and the changes it contains in the React 17 RC blog post. This post is a brief summary of it, so if you’ve already read the RC post, you can skip this one.

### No New Features

The React 17 release is unusual because it doesn’t add any new developer-facing features. Instead, this release is primarily focused on making it easier to upgrade React itself.

In particular, React 17 is a “stepping stone” release that makes it safer to embed a tree managed by one version of React inside a tree managed by a different version of React.

It also makes it easier to embed React into apps built with other technologies.

### Gradual Upgrades

React 17 enables gradual React upgrades. When you upgrade from React 15 to 16 (or, this time, from React 16 to 17), you would usually upgrade your whole app at once. This works well for many apps. But it can get increasingly challenging if the codebase was written more than a few years ago and isn’t actively maintained. And while it’s possible to use two versions of React on the page, until React 17 this has been fragile and caused problems with events.

We’re fixing many of those problems with React 17. This means that when React 18 and the next future versions come out, you will now have more options. The first option will be to upgrade your whole app at once, like you might have done before. But you will also have an option to upgrade your app piece by piece. For example, you might decide to migrate most of your app to React 18, but keep some lazy-loaded dialog or a subroute on React 17.

This doesn’t mean you have to do gradual upgrades. For most apps, upgrading all at once is still the best solution. Loading two versions of React — even if one of them is loaded lazily on demand — is still not ideal. However, for larger apps that aren’t actively maintained, this option makes sense to consider, and React 17 lets those apps not get left behind.

We’ve prepared an example repository demonstrating how to lazy-load an older version of React if necessary. This demo uses Create React App, but it should be possible to follow a similar approach with any other tool. We welcome demos using other tooling as pull requests.

### Note

We’ve postponed other changes until after React 17. The goal of this release is to enable gradual upgrades. If upgrading to React 17 were too difficult, it would defeat its purpose.

### Changes to Event Delegation

To enable gradual updates, we’ve needed to make some changes to the React event system. React 17 is a major release because these changes are potentially breaking. You can check out our versioning FAQ to learn more about our commitment to stability.

In React 17, React will no longer attach event handlers at the document level under the hood. Instead, it will attach them to the root DOM container into which your React tree is rendered:

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
In React 16 and earlier, React would do document.addEventListener() for most events. React 17 will call rootNode.addEventListener() under the hood instead.

A diagram showing how React 17 attaches events to the roots rather than to the document
We’ve confirmed that numerous problems reported over the years on our issue tracker related to integrating React with non-React code have been fixed by the new behavior.

If you run into issues with this change, here’s a common way to resolve them.

### Other Breaking Changes

The React 17 RC blog post describes the rest of the breaking changes in React 17.

We’ve only had to change fewer than twenty components out of 100,000+ in the Facebook product code to work with these changes, so we expect that most apps can upgrade to React 17 without too much trouble. Please tell us if you run into problems.

### New JSX Transform

React 17 supports the new JSX transform. We’ve also backported support for it to React 16.14.0, React 15.7.0, and 0.14.10. Note that it is completely opt-in, and you don’t have to use it. The classic JSX transform will keep working, and there are no plans to stop supporting it.

### React Native

React Native has a separate release schedule. We currently expect the support for React 17 to land in React Native 0.65, but the exact version is subject to change. As always, you can track the release discussions on the React Native Community releases issue tracker.
