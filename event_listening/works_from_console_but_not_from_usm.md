## 1) It may be a USM problem

First try to enable devlopment mode:

Navigate to `edge://extensions/` and click the button to do so in a sidebar in the far left of the viewport (at about the middle of the sidebar).

It’s strange that **Tampermonkey** > **Dashboard** > **Settings** > **Config mode: Advanced** doesn’t contain a developer mode of its own, unrelated to other extensions.

## 2) The script may be disabled or the User Script Manager may be disabled or both

...

## 3) Misc

Try adding:

```js
// @run-at      document-start
```
