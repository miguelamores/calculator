document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("myRange");
    let output = document.getElementById("year");
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
    document.getElementById('calculate').onclick = function() {
        if (window.screen.width <= 600) {
            resultBox.style.animation = 'moveInLeft 1s ease-out';
            resultBox.style.opacity = 1;
            window.scrollBy(0, 300);
        }
    }

});
