describe('helpers.js test', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  describe('sumPaymentTotal()', function () {
    it('should sum all payment types properly', function () {
      submitPaymentInfo();
      billAmtInput.value = 50;
      tipAmtInput.value = 0;
      submitPaymentInfo();

      expect(sumPaymentTotal('billAmt')).toEqual(150);
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });
  });

  describe('calculateTipPercent()', function () {
    it('should calculate tipPercent properly', function () {
      expect(calculateTipPercent(100, 20)).toEqual(20);
    });
  });

  describe('appendTd()', function () {
    it('should append value to tr', function () {
      let tr = document.createElement('tr');
      appendTd(tr, 'cake');

      expect(tr.firstChild.innerText).toEqual('cake');
    });
  });

  describe('appendDeleteBtn()', function () {
    it('should add a td with delete button on provided tr', function () {
      let tr = document.createElement('tr');
      expect(tr.children.length).toEqual(0);

      appendDeleteBtn(tr);
      expect(tr.children.length).toEqual(1);
      expect(tr.children[0].innerText).toEqual('X');
    });
  });

  describe('deleteElement()', function () {
    it('should remove parent tr from serverTable on button click', function () {
      serverNameInput.value = 'Max';
      submitServerInfo();

      let tBody = document.querySelector('#serverTable tbody');
      console.log(tBody.children.length, 'FIRST CHECK');

      expect(tBody.children.length).toEqual(1);

      let deleteBtn = tBody.children[0].children[2];
      deleteBtn.click();

      expect(tBody.children.length).toEqual(0);
    });
  });

  afterEach(function () {
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    for (td of summaryTds) {
      td.innerHTML = '';
    }
    billAmtInput.value = '';
    tipAmtInput.value = '';
    serverTbody.innerHTML = '';
    serverNameInput.value = '';
    allServers = {};
  });
});
