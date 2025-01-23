To make all HTML tables responsive using "brutal" JavaScript without any CSS, you can modify the tables directly in JavaScript by adding a container around each table and using some logic to detect when the table overflows, which would trigger a horizontal scroll. Here’s a way to do this using vanilla JavaScript:

```javascript
// Function to make all tables responsive
(function() {
    // Select all tables on the page
    const tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
        // Create a wrapper div around each table
        const wrapper = document.createElement('div');
        wrapper.style.overflowX = 'auto';  // Enable horizontal scrolling when needed
        wrapper.style.width = '100%';  // Ensure the wrapper takes the full width of its parent
        table.parentNode.insertBefore(wrapper, table);  // Insert the wrapper before the table
        wrapper.appendChild(table);  // Move the table inside the wrapper
    });
})();
```

## Notes

1. This script makes any table that is wider than its container (such as when there are many columns) to be scrollable horizontally.
2. **Styling the Wrapper**: The wrapper is styled with `overflowX = 'auto'`, which means that if the table exceeds the width of its container, horizontal scrolling will appear.
3. **Wrapping the Table**: The new wrapper is inserted into the DOM just before the table, and the table is appended inside this wrapper.
