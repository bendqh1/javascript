## Code pattern for any webpage which includes the iframe

```
<html>
	<body>
        <script src="/iframe-resizer/js/iframeResizer.min.js"></script>
		<iframe id="myIframe" width="100%" src="https://hanekudai.com/pjcrcf/index.php"></iframe>
		<script>
			const iframes = iFrameResize({ log: true }, '#myIframe');
		</script>
	</body>
</html>
```

## Code pattern that is loaded inside the iframe (index.php)

```
<!DOCTYPE html>
<html>
	<head>
		<! -- All head code -->
	</head>
	<body>
		<! -- ALL body code PLUS the line below -->
	<script src="/iframe-resizer/js/iframeResizer.contentWindow.min.js"></script>
</html>
```

