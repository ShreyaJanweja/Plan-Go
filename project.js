function planTrip() {
  const days = document.getElementById("days").value;
  const destination = document.getElementById("destination").value.trim();
  const people = document.getElementById("people").value;

  if (!days || !destination || !people) {
    alert("⚠ Please fill all fields!");
    return;
  }

  alert(`Trip Planned!\n\nDays: ${days}\nDestination: ${destination}\nPeople: ${people}`);
} 