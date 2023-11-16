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
  });
});
