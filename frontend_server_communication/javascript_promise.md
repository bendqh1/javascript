A promise can be in one of three states: pending, fulfilled, or rejected. 

A promise starts life in a pending state. If the action relating to the promise is successful, the promise is said to be fulfilled. If the action is unsuccessful, the promise is said to be rejected. 

Once a promise is either fulfilled or rejected, but not pending, it’s also considered settled.

Any function that returns a promise can be used with async/await

Unlike await, the return keyword doesn’t convert promise rejections to catchable errors.
