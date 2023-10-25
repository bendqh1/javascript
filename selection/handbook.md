`document.querySelector('X');` is usually the best way to go.

A mouse selection with devtool may select a pseudo element (such as `::after`).

Ween we mouse left click on the element in the DOM treee we can also select "Store as global variable" and then taken right to the console to process it.

Shadow DOMs or Shadow roots can prevent access to an element if they are closed, then, probably, a macro action should be used.
