describe('payments.js test', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  describe('submitPaymentInfo()', function () {
    it('should add a new payment to allPayments', function () {
      submitPaymentInfo();

      let payment = allPayments.payment1;
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(payment.billAmt).toEqual('100');
      expect(payment.tipAmt).toEqual('20');
      expect(payment.tipPercent).toEqual(20);
    });

    it('should not add a new payment if curPayment is undefined', function () {
      billAmtInput.value = 0;
      tipAmtInput.value = 0;

      expect(Object.keys(allPayments).length).toEqual(0);
    });
  });

  describe('createCurPayemnt()', function () {
    it('should create a new payment object when bill/tip are not empty', function () {
      let payment = { billAmt: '100', tipAmt: '20', tipPercent: 20 };

      expect(createCurPayment()).toEqual(payment);
    });

    it('should create a new payment if tipAmt is 0', function () {
      tipAmtInput.value = 0;
      let payment = { billAmt: '100', tipAmt: '0', tipPercent: 0 };

      expect(createCurPayment()).toEqual(payment);
    });

    it('should not create a new payment if bill/tipAmt are empty', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';

      expect(createCurPayment()).toEqual(undefined);
    });

    it('should not create a new payment when billAmt is 0.', function () {
      billAmtInput.value = 0;

      expect(createCurPayment()).toEqual(undefined);
    });
  });

  describe('appendPaymentTable()', function () {
    it('should append new tr to paymentTbody', function () {
      submitPaymentInfo();
      let tdList = document.querySelectorAll('#payment1 td');

      expect(tdList.length).toEqual(4);
      expect(tdList[0].innerText).toEqual('$100');
      expect(tdList[1].innerText).toEqual('$20');
      expect(tdList[2].innerText).toEqual('20%');
      expect(tdList[3].innerText).toEqual('X');
    });
  });

  describe('updateSummary()', function () {
    it('should calulate tipPercentAvg properly', function () {
      allPayments.payment2 = { billAmt: '100', tipAmt: '10', tipPercent: 10 };
      submitPaymentInfo();

      expect(summaryTds[2].innerText).toEqual('15%');
    });
  });

  afterEach(function () {
    paymentTbody.innerHTML = '';
    for (let td of summaryTds) {
      td.innerHTML = '';
    }
    paymentId = 0;
    allPayments = {};
    billAmtInput.value = '';
    tipAmtInput.value = '';
  });
});
