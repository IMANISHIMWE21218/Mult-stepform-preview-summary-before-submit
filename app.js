const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");



nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("next");
    });
});
prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("prev");
    });
});

// new sumary javascript

function showSummary() {
    // Get form data
    const VehicleType = document.getElementById("VehicleType").value;
    const VehicleUsage = document.getElementById("VehicleUsage").value;
    const VehicleManufacturedYear = document.getElementById("VehicleManufacturedYear").value;
    const VehicleBrand = document.getElementById("VehicleBrand").value;
    const VehicelModel = document.getElementById("VehicelModel").value;
    const VehiclePlate = document.getElementById("VehiclePlate").value;
    const VehicleChassis = document.getElementById("VehicleChassis").value;
    const VehicleSeatCapacity = document.getElementById("VehicleSeatCapacity").value;
    const Duration = document.getElementById("Duration").value;
    const LocationCover = document.getElementById("LocationCover").value;
    const Declaredvalue = document.getElementById("Declaredvalue").value;
    const Numberofoccupantscovered = document.getElementById("Numberofoccupantscovered").value;
    const SumInsuredperoccupant = document.getElementById("SumInsuredperoccupant").value;
    
    const Thirdparty = document.getElementById("Thirdparty").checked;
    const OwnDamage = document.getElementById("OwnDamage").checked;
    const Theft = document.getElementById("Theft").checked;
    const Fire = document.getElementById("Fire").checked;
    const Occupant = document.getElementById("Occupant").checked;
    const TPL = document.getElementById("TPL").checked;

    
    // Create summary
    let summary = "<h2>Form Data Summary:</h2>";
    summary += "<label>VehicleType:</label> <span>" + VehicleType + "</span><br>";
    summary += "<label>VehicleUsage:</label> <span>" + VehicleUsage + "</span><br>";
    summary += "<label>VehicleManufacturedYear:</label> <span>" + VehicleManufacturedYear + "</span><br>";
    summary += "<label>VehicleBrand:</label> <span>" + VehicleBrand + "</span><br>";

    summary += "<label>VehicelModel:</label> <span>" + VehicelModel + "</span><br>";
    summary += "<label>VehiclePlate:</label> <span>" + VehiclePlate + "</span><br>";
    summary += "<label>VehicleChassis:</label> <span>" + VehicleChassis + "</span><br>";
    summary += "<label>VehicleSeatCapacity:</label> <span>" + VehicleSeatCapacity + "</span><br>";
    summary += "<label>Duration:</label> <span>" + Duration + "</span><br>";
    summary += "<label>LocationCover:</label> <span>" + LocationCover + "</span><br>";
    summary += "<label>Declaredvalue:</label> <span>" + Declaredvalue + "</span><br>";

    summary += "<label>Numberofoccupantscovered:</label> <span>" + Numberofoccupantscovered + "</span><br>";
    summary += "<label>SumInsuredperoccupant:</label> <span>" + SumInsuredperoccupant + "</span><br>";

    summary += "<label>Subscribe to our Thirdparty:</label> <span>" + (Thirdparty ? "Yes" : "No") + "</span><br>";
    summary += "<label>Subscribe to our OwnDamage:</label> <span>" + (OwnDamage ? "Yes" : "No") + "</span><br>";
    summary += "<label>Subscribe to our Theft:</label> <span>" + (Theft ? "Yes" : "No") + "</span><br>";
    summary += "<label>Subscribe to our Fire:</label> <span>" + (Fire ? "Yes" : "No") + "</span><br>";
    summary += "<label>Subscribe to our Occupant:</label> <span>" + (Occupant ? "Yes" : "No") + "</span><br>";
    summary += "<label>Subscribe to our TPL:</label> <span>" + (TPL ? "Yes" : "No") + "</span><br>";
    
    // Display summary
    document.getElementById("summary").innerHTML = summary;
  }

  //  sumary javascript end
  



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input","select").forEach((input) => {
        const { name, value } = input;
        inputs.push({ name, value });
    });
    console.log(inputs);
    form.reset();
});
function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = steps.indexOf(active);
    steps[index].classList.remove("active");
    if (btn === "next") {
        index++;
    } else if (btn === "prev") {
        index--;
    }
    steps[index].classList.add("active");
}
