### User's Question:

Some web browsers have an option to block all images whatsoever.

Typically, these web browsers, don't do that by JavaScript, rather, by some backend block.

The backend block, causes images to disappear, but their `alt` attribute, and their global attribute known as `title`, both keep appearing.

Now then, if I block these images with JavaScript (via targeting the `img` tag), then the `alt` and `title` attributes totally vanish along with the image.

Therefore, blocking images in the web browser backend level should be very different than blocking them in the frontend level.

How do these web browsers backendly block images and also give no more than five common commands in various backend programming languages which are not vanilla JavaScript, for how to block images backendly in the way that I have described (i.e the image is blocked, but her `alt` and `title` attributes remain intact).

Short answer.

---

### Response:

Web browsers block images at the backend level by modifying the way the server handles and delivers resources, such as by intercepting or refusing to send image files to the client. This prevents the images from being rendered, while still allowing the HTML markup and associated attributes (`alt` and `title`) to remain visible.

Here are five common backend commands (in various languages) that can block images in a way that preserves the `alt` and `title` attributes:

1. **Apache (mod_rewrite)**:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_URI} \.(jpg|jpeg|png|gif)$
   RewriteRule .* - [F]
```

2. **Nginx**:
   ```nginx
   location ~* \.(jpg|jpeg|png|gif)$ {
       return 403;
   }
```

3. **Node.js (Express)**:
   ```javascript
   app.use('/images', (req, res, next) => {
       res.status(403).send('Forbidden');
   });
```

4. **Python (Flask)**:
   ```python
   @app.route('/images/<path:image_filename>')
   def block_images(image_filename):
       return "Forbidden", 403
```

5. **PHP**:
   ```php
   if (preg_match('/\.(jpg|jpeg|png|gif)$/i', $_SERVER['REQUEST_URI'])) {
       header('HTTP/1.1 403 Forbidden');
       exit();
   }
```
