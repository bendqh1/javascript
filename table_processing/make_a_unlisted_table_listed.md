```js
const allTableRowsExceptTableHeading = document.querySelectorAll('tr');

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

## Drupal

For Drupal `example.com/admin/structure/types` webpages select `'tr.odd, tr.even'`.

## More information here:

https://www.sitepoint.com/community/t/how-to-add-a-table-cell-to-a-table-row-in-javascript/431975/1
