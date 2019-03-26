document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("myRange");
    let output = document.getElementById("year");
    output.innerHTML = slider.value; // Display the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
    }

});
