document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("myRange");
    let yearsOfMortgage = document.getElementById("year");
    const btnCalculate = document.getElementById('calculate');
    const amount = document.getElementById('amount');
    const amountLabel = document.getElementById('amount-label');

    const tax = document.getElementById('tax');
    const taxLabel = document.getElementById('tax-label');

    const insurance = document.getElementById('insurance');
    const insuranceLabel = document.getElementById('insurance-label');

    const errorField = function setErrorClass(field) {
        field.className = 'form-group__input form-group__input--error'
    }

    const errorLabel = function setErrorLabel(field) {
        field.className = 'error-label error-label__show';
    }

    const errorMessage = function setErrorMessageByDevice() {
        if (window.screen.width <= 600) {
            amountLabel.textContent = 'Mandatory field';
            taxLabel.textContent = 'Mandatory field';
            insuranceLabel.textContent = 'Mandatory field';
        } else {
            amountLabel.textContent = 'Loan Amount is mandatory';
            taxLabel.textContent = 'Annual Tax is mandatory';
            insuranceLabel.textContent = 'Annual Insurance is mandatory';
        }
        
    }

    const validate = function validationFields() {
        let hasError = false;
        if (amount.value === "" ) {
            errorField(amount);
            errorLabel(amountLabel);
            hasError = true;
        } else {
            amount.className = 'form-group__input';
            amountLabel.className = 'error-label__hide';
            hasError = false;
        }
        if (tax.value === "") {
            errorField(tax);
            errorLabel(taxLabel);
            hasError = true;
        } else {
            tax.className = 'form-group__input';
            taxLabel.className = 'error-label__hide';
            hasError = false;
        }
        if (insurance.value === "") {
            errorField(insurance);
            errorLabel(insuranceLabel);
            hasError = true;
        } else {
            insurance.className = 'form-group__input';
            insuranceLabel.className = 'error-label__hide';
            hasError = false;
        }

        hasError ? errorMessage() : null;
        return hasError;
    }

    yearsOfMortgage.value = slider.value; // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        yearsOfMortgage.value = this.value;
    }


    const interestSlider = document.getElementById("interest");
    let interestOutput = document.getElementById("interestOutput");
    interestOutput.value = interestSlider.value; // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    interestSlider.oninput = function() {
        interestOutput.value = this.value;
    }

    const resultBox = document.getElementsByClassName('result')[0];
    btnCalculate.onclick = function() {
        if (!validate()) {
            myResult();
            if (window.screen.width <= 600) {
                resultBox.style.animation = 'moveInLeft 1s ease-out';
                resultBox.style.opacity = 1;
                window.scrollBy(0, 300);
            }
        }
    }

    const myResult = function calculatePrincipleTaxInsurance() {
        let principleAndInterest = ((interestOutput.value / 100) / 12) * amount.value / (1 - Math.pow((1 + ((interestOutput.value / 100) / 12)), - yearsOfMortgage.value * 12));
        let taxResult = tax.value / 12;
        let insuranceResult = insurance.value / 12;
        let totalPayment = principleAndInterest + taxResult + insuranceResult;

        document.getElementById('interestLabel').textContent = `$ ${principleAndInterest.toFixed(2)}`;
        document.getElementById('taxLabel').textContent = `$ ${taxResult.toFixed(2)}`;
        document.getElementById('insuranceLabel').textContent = `$ ${insuranceResult.toFixed(2)}`;
        document.getElementById('totalPaymentLabel').textContent = `$ ${totalPayment.toFixed(2)}`;
    }

});
