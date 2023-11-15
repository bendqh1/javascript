This works on Drupal `example.com/admin/structure/types` webpages but you can change `'tr.odd, tr.even'` to just `tr` to make it work on generally any webpage with a table.

```js
const allTableRowsExceptTableHeading = document.querySelectorAll('tr.odd, tr.even');

allTableRowsExceptTableHeading.forEach((element) => {
    const newCell = document.createElement('td');
    // This variable must be here inside the function because...
        // For each table row we work on, we create and add a table cell...

    element.insertAdjacentElement('afterbegin', newCell);

    newCell.innerHTML = '<span class="numberCell">A</span>';
    newCell.style.display = 'table-cell';
    newCell.style.width = 'maxContent';
    newCell.style.textAlign = 'center';
    newCell.style.backgroundColor = 'yellow';
    // These HTML-CSS directives must be here inside the function because...
        // For each table row we work on, we create and add these new HTML-CSS directives...
});

let baseNumber = 1;
document.querySelectorAll('.numberCell').forEach((element)=>{
    element.innerHTML = `<span>${baseNumber++}</span>`;
});
```

## More information here:

https://www.sitepoint.com/community/t/how-to-add-a-table-cell-to-a-table-row-in-javascript/431975/1
