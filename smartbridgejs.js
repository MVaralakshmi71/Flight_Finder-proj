// ✅ Hardcoded flight data (no need for JSON file or fetch)
const flights = [
  {
    id: "AI101",
    airline: "Air India",
    from: "Delhi",
    to: "Mumbai",
    departure: "2025-07-01T07:00:00",
    price: 550
  },
  {
    id: "6E302",
    airline: "IndiGo",
    from: "Bangalore",
    to: "Hyderabad",
    departure: "2025-07-02T09:30:00",
    price: 300
  },
  {
    id: "SG406",
    airline: "SpiceJet",
    from: "Hyderabad",
    to: "Delhi",
    departure: "2025-07-03T14:45:00",
    price: 650
  },
  {
    id: "AF789",
    airline: "Air France",
    from: "New York City",
    to: "Paris",
    departure: "2025-04-10T15:00:00",
    price: 800
  }
];

function showSection(id) {
  document.querySelectorAll('.page-section').forEach(section => {
    section.style.display = section.id === id ? 'block' : 'none';
  });
}

function renderFlights(flightList) {
  const container = document.getElementById('flight-results');
  container.innerHTML = '';

  if (!flightList.length) {
    container.innerHTML = '<p>No flights available.</p>';
    return;
  }

  flightList.forEach(f => {
    const card = document.createElement('div');
    card.className = 'flight-card';
    card.innerHTML = `
      <h3>${f.airline}</h3>
      <p><strong>From:</strong> ${f.from} → <strong>To:</strong> ${f.to}</p>
      <p><strong>Departure:</strong> ${new Date(f.departure).toLocaleString()}</p>
      <p><strong>Price:</strong> $${f.price}</p>
      <button onclick="showSection('booking')">Book Now</button>
    `;
    container.appendChild(card);
  });

  showSection('results');
}

// ✅ Show all flights on load
window.addEventListener('DOMContentLoaded', () => {
  renderFlights(flights);
});

// ✅ Filter flights on search
document.getElementById('flightSearchForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const from = document.getElementById('from').value.trim().toLowerCase();
  const to = document.getElementById('to').value.trim().toLowerCase();

  const filtered = flights.filter(f =>
    f.from.toLowerCase().includes(from) &&
    f.to.toLowerCase().includes(to)
  );

  renderFlights(filtered);
});

document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Booking Confirmed!');
});

document.getElementById('addFlightForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Flight added (simulation only).');
});
