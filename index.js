document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("myRange");
    let output = document.getElementById("year");
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
        return hasError;
    }

    output.value = slider.value; // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.value = this.value;
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
        if (window.screen.width <= 600) {
            resultBox.style.animation = 'moveInLeft 1s ease-out';
            resultBox.style.opacity = 1;
            window.scrollBy(0, 300);
        }
        validate();
    }

});
