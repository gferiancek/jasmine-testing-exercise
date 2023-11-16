// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// expects table row element, and appends new td with deleteBtn + eventListener
function appendDeleteBtn(tr, type) {
  let deleteBtn = document.createElement('td');
  deleteBtn.innerText = 'X';
  deleteBtn.dataset.type = type;
  deleteBtn.addEventListener('click', deleteElement);

  tr.append(deleteBtn);
}

// Should find closest parent tr and remove from the table.
function deleteElement(event) {
  let tr = event.target.closest('tr');
  let type = event.target.dataset.type;
  delete allServers[tr.id];
  tr.remove();

  switch (type) {
    case 'server':
      delete allServers[tr.id];
      updateServerTable();
      break;
    case 'payment':
      delete allPayments[tr.id];
      updateServerTable();
      updateSummary();
  }
}
