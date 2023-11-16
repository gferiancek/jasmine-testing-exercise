describe('calculateMonthlyPayments', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 3 })).toEqual('96.56');
  });

  it('should return a result with 2 decimal places', function () {
    const monthly = calculateMonthlyPayment({ amount: 10000, years: 10, rate: 3 });
    const decimalSplit = monthly.split('.');
    expect(decimalSplit[1].length).toEqual(2);
  });
});

/// etc
