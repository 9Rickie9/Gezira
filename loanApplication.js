document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let amount = document.getElementById("amount").value;
    let purpose = document.getElementById("purpose").value;
    let repayment = document.getElementById("repayment").value;

    if (name && email && phone && amount && purpose && repayment) {
        document.getElementById("message").innerText = "Loan application submitted successfully!";
        document.getElementById("message").style.color = "green";
        document.getElementById("loanForm").reset();
    } else {
        document.getElementById("message").innerText = "Please fill all fields!";
        document.getElementById("message").style.color = "red";
    }
});

function updateAmount() {
    document.getElementById("amountValue").innerText = "SSP" + document.getElementById("amount").value;
}
