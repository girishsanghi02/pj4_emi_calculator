// Get loan amount from range slider

document.getElementById("loanRange").addEventListener(
    "input",
    function () {

        document.getElementById("loanAmount").value =
            this.value;

    }
);


// Get interest rate from range slider

document.getElementById("interestRange").addEventListener(
    "input",
    function () {

        document.getElementById("interestRate").value =
            this.value;

    }
);


// Get tenure from range slider

document.getElementById("tenureRange").addEventListener(
    "input",
    function () {

        document.getElementById("tenure").value =
            this.value;

    }
);


// EMI Calculation

function calculateEMI() {

    // Get values

    let loanAmount =
        Number(
            document.getElementById("loanAmount").value
        );

    let annualInterest =
        Number(
            document.getElementById("interestRate").value
        );

    let years =
        Number(
            document.getElementById("tenure").value
        );


    // Convert annual interest into monthly interest

    let monthlyRate =
        annualInterest / 12 / 100;


    // Convert years into months

    let months =
        years * 12;


    // EMI Formula

    let emi =
        loanAmount *
        monthlyRate *
        Math.pow(
            1 + monthlyRate,
            months
        )
        /
        (
            Math.pow(
                1 + monthlyRate,
                months
            ) - 1
        );


    // Total payment

    let totalPayment =
        emi * months;


    // Total interest

    let totalInterest =
        totalPayment - loanAmount;


    // Display EMI

    document.getElementById("monthlyEMI").innerText =
        formatMoney(emi);


    // Display principal

    document.getElementById("principal").innerText =
        formatMoney(loanAmount);


    // Display interest

    document.getElementById("interest").innerText =
        formatMoney(totalInterest);


    // Display total payment

    document.getElementById("totalPayment").innerText =
        formatMoney(totalPayment);


    // Display tenure

    document.getElementById("displayTenure").innerText =
        years + " Years";


    // Summary

    document.getElementById("summaryLoan").innerText =
        formatMoney(loanAmount);


    document.getElementById("summaryRate").innerText =
        annualInterest + "%";


    document.getElementById("summaryTenure").innerText =
        years + " Years";
}


// Indian currency format

function formatMoney(amount) {

    return "₹" +
        Math.round(amount).toLocaleString("en-IN");

}


// Calculate automatically when page opens

calculateEMI();