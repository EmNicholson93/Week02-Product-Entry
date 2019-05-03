function makeNameCell(name) {
    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', name);
    link.href = 'product-details.html?' + searchParams.toString();
    link.textContent = name;
    nameCell.appendChild(link);
    return nameCell;
}

function boolConversion(bool) {
    if(bool) {
        return 'Yes';
    }
    return 'No';
}

function makeListCell(list) {
    let stringFromList = '';
    if(list) {
        stringFromList = list.join(', ');
    }
    const listCell = makeTextCell(stringFromList);
    return textCell;
}

function makeTextCell(text) {
    const textCell = document.createElement('td');
    textCell.textContent = text;
    return textCell;
}

const productRow = {
    makeNameCell: makeNameCell,
    boolConversion: boolConversion,
    makeTextCell: makeTextCell,
    makeListCell: makeListCell
};

export default productRow;