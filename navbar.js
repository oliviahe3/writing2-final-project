function loadNav() {
  const style = document.createElement("style");
  style.textContent = `
    body {
      background-color: #fadfeb;
      margin: 0;
    }
    .page {
      display: flex;
    }

    #sidebar {
      width: 180px;
      min-height: 100vh;
      background-color: #ffcfe5;
      padding: 20px;
      flex-shrink: 0;
    }

    #sidebar ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    #sidebar li {
      margin-bottom: 10px;
    }

    #sidebar a {
      text-decoration: none;
      color: #4a0080;
    }

    #sidebar a:hover {
      text-decoration: underline;
    }

    .content {
      padding: 20px 40px;
      flex-grow: 1;
    }
  `;
  document.head.appendChild(style);

  document.getElementById("navbar").innerHTML = `
    <nav id="sidebar">
      <ul>
        <li><a href="introduction.html">Introduction</a></li>
        <li><a href="breakfast.html">Breakfast</a></li>
        <li><a href="snack_morning.html">Snack - Morning</a></li>
        <li><a href="lunch.html">Lunch</a></li>
        <li><a href="snack_afternoon.html">Snack - Afternoon</a></li>
        <li><a href="dinner.html">Dinner</a></li>
        <li><a href="conclusion.html">Conclusion</a></li>
        <li><a href="works_consulted.html">Works Consulted</a></li>
      </ul>
    </nav>
  `;
}