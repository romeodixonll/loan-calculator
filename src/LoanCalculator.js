import React, { useState } from "react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const annualInterest = parseFloat(interestRate) / 100;
    const monthlyInterest = annualInterest / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    if (monthlyInterest === 0) {
      setMonthlyPayment((principal / numberOfPayments).toFixed(2));
      return;
    }

    const payment =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfPayments)) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Loan/Mortgage Calculator
      </h1>
      <div className="mb-4">
        <label className="block mb-1">Loan Amount ($)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Annual Interest Rate (%)</label>
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Loan Term (Years)</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={calculatePayment}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Calculate Payment
      </button>
      {monthlyPayment && (
        <div className="mt-4 text-center text-xl">
          Monthly Payment: <strong>${monthlyPayment}</strong>
        </div>
      )}
    </div>
  );
}
