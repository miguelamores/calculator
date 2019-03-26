document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("myRange");
    let output = document.getElementById("year");
    output.value = slider.value; // Display the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.value = this.value;
    }

});
