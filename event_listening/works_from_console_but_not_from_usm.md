## It may be a USM problem

First try to enable devlopment mode:

Navigate to:

  edge://extensions/

Then, click the button to do so in a sidebar in the far left of the viewport (at about the middle of the sidebar).

It’s strange that **Tampermonkey** > **Dashboard** > **Settings** > **Config mode: Advanced** doesn’t contain a developer mode of its own, unrelated to other extensions.

## Misc

Try adding:

```js
// @run-at      document-start
```
