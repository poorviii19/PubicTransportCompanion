function generateRoutes() {
  const distance = parseFloat(document.getElementById("distance").value);
  const mode = document.getElementById("mode").value;
  const routesDiv = document.getElementById("routes");

  routesDiv.innerHTML = "";

  if (isNaN(distance)) {
    alert("Please enter distance");
    return;
  }

  let routes = [];

  // RULE-BASED LOGIC
  if (distance < 3) {
    routes.push({
      name: "Bus Route",
      time: "25–35 mins",
      cost: "₹20–30",
      difficulty: "easy"
    });
  } else if (distance <= 6) {
    routes.push({
      name: "Metro + Walk",
      time: "20–30 mins",
      cost: "₹35–45",
      difficulty: "medium"
    });
  } else {
    routes.push({
      name: "Metro + Bus",
      time: "35–50 mins",
      cost: "₹50–70",
      difficulty: "hard"
    });
  }

  // MODE ADJUSTMENTS
  if (mode === "student") {
    routes[0].cost = "₹15–25";
  }

  if (mode === "elderly") {
    routes[0].difficulty = "easy";
    routes[0].time += " (less walking)";
  }

  // RENDER
  routes.forEach(route => {
    routesDiv.innerHTML += `
      <div class="route-card">
        <h3>${route.name}</h3>
        <p>⏱ ${route.time}</p>
        <p>💰 ${route.cost}</p>
        <span class="badge ${route.difficulty}">
          ${route.difficulty.toUpperCase()}
        </span>
        <br/>
        <button onclick="goToSteps()">View Steps</button>
      </div>
    `;
  });
}

function goToSteps() {
  window.location.href = "steps.html";
}
