If you try to debug a redirection script, note that redirection can be heavily restricted by any of the following protocols:

* Content Security Policy (CSP)
* Cross Origin Restrictions (CROS)
* Built-in browser limitations

In such cases, it is best to take another approach then redirection, such as destroying the DOM and flusing all browser cache from the last hour.
