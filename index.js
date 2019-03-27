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

});
