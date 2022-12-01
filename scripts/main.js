// CSS koppeling
import "../styles/style.scss";

// D3 importeren
import * as d3 from "d3";

// GreenSock importeren
import gsap from "gsap";

// breedte, hoogte en margins instellen voor de grafiek
const margin = { top: 20, right: 30, bottom: 40, left: 90 },
  width = 600 - margin.left - margin.right,
  height = 700 - margin.top - margin.bottom;

// SVG toevoegen aan de grafiek
const svg = d3
  .select("#grafiek")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// X-as toevoegen aan de grafiek
const x = d3.scaleLinear().range([0, width]);
const xAxis = svg.append("g").attr("transform", `translate(0,${height})`);

// Y-as toevoegen aan de grafiek
const y = d3.scaleBand().range([0, height]).padding(0.5);
const yAxis = svg.append("g");

// Functie die bars aanmaakt/update voor de gegeven variable (welkeRace)
function update(welkeRace) {
  // Fetch data van de API
  fetch(
    "https://opensheet.elk.sh/1jmeYXeE-VrP_qJgBJFZyrcz4e3OAIo9IkDAMAR4h2Ek/Blad1"
  )
    .then((res) => res.json())
    .then((data) => {
      // Data sorteren van groot naar klein
      data.sort(function (a, b) {
        return d3.descending(+a[welkeRace], +b[welkeRace]);
      });

      // X-as instellen voor de grafiek
      x.domain([0, d3.max(data, (d) => +d[welkeRace])]);
      xAxis.transition().duration(2000).call(d3.axisBottom(x));

      // Y-as instellen voor de grafiek
      y.domain(data.map((d) => d.driver));
      yAxis.transition().duration(2000).call(d3.axisLeft(y));

      // Data toevoegen aan de bars
      const u = svg.selectAll("rect").data(data);

      // Update bars
      u.join("rect")
        .attr("x", x(0))
        .attr("y", (d) => y(d.driver))
        .attr("width", (d) => x(d[welkeRace]))
        .attr("height", y.bandwidth())
        .attr("fill", "#FF0000");
    });
}
update("race1");

// Hier staan alle event listeners
window.addEventListener("DOMContentLoaded", () => {
  let saudi = document.getElementById("saudi");
  let openSaudi = document.getElementById("openSaudi");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openSaudi.addEventListener("click", () => {
    saudi.scrollIntoView({ behavior: "smooth" });
    update("race2");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let australia = document.getElementById("australia");
  let openAustralia = document.getElementById("openAustralia");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openAustralia.addEventListener("click", () => {
    australia.scrollIntoView({ behavior: "smooth" });
    update("race3");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let italy = document.getElementById("italy");
  let openItaly = document.getElementById("openItaly");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openItaly.addEventListener("click", () => {
    italy.scrollIntoView({ behavior: "smooth" });
    update("race4");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let usa = document.getElementById("usa");
  let openUsa = document.getElementById("openUsa");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openUsa.addEventListener("click", () => {
    usa.scrollIntoView({ behavior: "smooth" });
    update("race5");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let spain = document.getElementById("spain");
  let openSpain = document.getElementById("openSpain");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openSpain.addEventListener("click", () => {
    spain.scrollIntoView({ behavior: "smooth" });
    update("race6");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let monaco = document.getElementById("monaco");
  let openMonaco = document.getElementById("openMonaco");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openMonaco.addEventListener("click", () => {
    monaco.scrollIntoView({ behavior: "smooth" });
    update("race7");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let azer = document.getElementById("azer");
  let openAzer = document.getElementById("openAzer");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openAzer.addEventListener("click", () => {
    azer.scrollIntoView({ behavior: "smooth" });
    update("race8");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let canada = document.getElementById("canada");
  let openCanada = document.getElementById("openCanada");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openCanada.addEventListener("click", () => {
    canada.scrollIntoView({ behavior: "smooth" });
    update("race9");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let great = document.getElementById("great");
  let openGreat = document.getElementById("openGreat");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openGreat.addEventListener("click", () => {
    great.scrollIntoView({ behavior: "smooth" });
    update("race10");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let austria = document.getElementById("austria");
  let openAustria = document.getElementById("openAustria");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openAustria.addEventListener("click", () => {
    austria.scrollIntoView({ behavior: "smooth" });
    update("race11");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let france = document.getElementById("france");
  let openFrance = document.getElementById("openFrance");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openFrance.addEventListener("click", () => {
    france.scrollIntoView({ behavior: "smooth" });
    update("race12");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let hungary = document.getElementById("hungary");
  let openHungary = document.getElementById("openHungary");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openHungary.addEventListener("click", () => {
    hungary.scrollIntoView({ behavior: "smooth" });
    update("race13");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let belgium = document.getElementById("belgium");
  let openBelgium = document.getElementById("openBelgium");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openBelgium.addEventListener("click", () => {
    belgium.scrollIntoView({ behavior: "smooth" });
    update("race14");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let netherlands = document.getElementById("netherlands");
  let openNetherlands = document.getElementById("openNetherlands");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openNetherlands.addEventListener("click", () => {
    netherlands.scrollIntoView({ behavior: "smooth" });
    update("race15");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let italy2 = document.getElementById("italy2");
  let openItaly2 = document.getElementById("openItaly2");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openItaly2.addEventListener("click", () => {
    italy2.scrollIntoView({ behavior: "smooth" });
    update("race16");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let singapore = document.getElementById("singapore");
  let openSingapore = document.getElementById("openSingapore");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openSingapore.addEventListener("click", () => {
    singapore.scrollIntoView({ behavior: "smooth" });
    update("race17");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let japan = document.getElementById("japan");
  let openJapan = document.getElementById("openJapan");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openJapan.addEventListener("click", () => {
    japan.scrollIntoView({ behavior: "smooth" });
    update("race18");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let usa2 = document.getElementById("usa2");
  let openUsa2 = document.getElementById("openUsa2");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openUsa2.addEventListener("click", () => {
    usa2.scrollIntoView({ behavior: "smooth" });
    update("race19");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let mexico = document.getElementById("mexico");
  let openMexico = document.getElementById("openMexico");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openMexico.addEventListener("click", () => {
    mexico.scrollIntoView({ behavior: "smooth" });
    update("race20");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let brazil = document.getElementById("brazil");
  let openBrazil = document.getElementById("openBrazil");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openBrazil.addEventListener("click", () => {
    brazil.scrollIntoView({ behavior: "smooth" });
    update("race21");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });

  let abu = document.getElementById("abu");
  let openAbu = document.getElementById("openAbu");

  // Klik op de knop = volgende section + nieuwe variable meegegeven + simpele gsap animatie uitvoeren
  openAbu.addEventListener("click", () => {
    abu.scrollIntoView({ behavior: "smooth" });
    update("race22");
    gsap
      .timeline({ repeat: 0, defaults: { duration: 1, ease: "none" } })
      .to("rect", { scaleX: 0 })
      .to("rect", { scaleX: 1 });
  });
});
