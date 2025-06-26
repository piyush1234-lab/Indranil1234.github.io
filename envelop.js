// Submit the form with "Yes" or "No"
function submitAnswer(value) {
  document.getElementById("answer").value = value;
  document.getElementById("loveForm").submit();
}

// Flip the envelope to show the back side
function flipEnvelope() {
  const container = document.querySelector(".container");
  container.classList.toggle("flip");

  const bod = document.getElementById("bod");
  const b = document.getElementById("b");
  const heart = document.getElementById("heart");
  const b1 = document.getElementById("b1");
  const ddd = document.getElementById("ddd");
  const ddd1 = document.getElementById("ddd1");
  const stamp = document.getElementById("stamp");
  const flaps = document.querySelectorAll('.flap');

  setTimeout(() => {
    bod.style.zIndex = "0";
    bod.style.border = "none";
    bod.style.backgroundColor = "white";
    b.style.display = "none";
    heart.style.display = "block";
    b1.style.display = "block";
    ddd.style.display = "none";
    ddd1.style.display = "none";
    stamp.style.display = "none";

    flaps.forEach(flap => {
      flap.style.border = "2px solid #f9e3b0";
      flap.style.boxSizing = "border-box";
      flap.style.backgroundColor = "#fff4cc";
    });
  }, 300);

  document.getElementById("letter1").style.transform = "rotateY(-180deg)";
  document.getElementById("loveForm").style.transform = "rotateY(-180deg)";
  b1.style.transform = "rotateY(-180deg)";
}

// Open the top flap of the envelope
function openEnvelope() {
  const b1 = document.getElementById("b1");
  const flappy = document.getElementById("flappy");

  flappy.style.transform = "rotateX(180deg)";
  b1.style.animation = "fadeout .5s forwards";

  setTimeout(() => {
    flappy.style.zIndex = "1";
  }, 1000);

  setTimeout(() => {
    const box = document.getElementById("messageBox");
    box.style.display = "block";
    box.classList.add("show");
  }, 1000);
}

// Button touch color effects
function colorchange(b) {
  b.style.backgroundColor = "#ff6f61";
  b.style.color = "white";
}

function colorchange2(b) {
  b.style.backgroundColor = "rgba(0,0,0,0.1)";
  b.style.color = "black";
}

// Open the letter and show the response form
function openletter() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("movedown");

  const letter = document.getElementById("letter1");
  letter.classList.add("popout");

  const box = document.getElementById("messageBox");
  const b2 = document.getElementById("b2");
  b2.style.display = "none";

  // Show YES/NO buttons and expand letter
  setTimeout(() => {
    letter.style.height = "900px";
    box.style.height = "900px";

    const b3 = document.getElementById("b3");
    const b4 = document.getElementById("b4");
    const form = document.getElementById("loveForm");

    b3.style.opacity = "1";
    b3.style.zIndex = "200";
    b4.style.opacity = "1";
    b4.style.zIndex = "200";
    form.style.display = "flex";
  }, 1000);

  // Fade out flaps and body
  const flaps = document.querySelectorAll(".flap");
  const bod = document.getElementById("bod");
  const flappy = document.getElementById("flappy");
  const heart = document.getElementById("heart");

  flaps.forEach(flap => flap.style.animation = "fadeout 1s forwards");
  bod.style.animation = "fadeout 1s forwards";
  flappy.style.animation = "fadeout 1s forwards";
  heart.style.animation = "fadeout 1s forwards";

  // Hide envelope parts after fade
  setTimeout(() => {
    flaps.forEach(flap => flap.style.visibility = "hidden");
    bod.style.visibility = "hidden";
    flappy.style.visibility = "hidden";
    heart.style.visibility = "hidden";
  }, 1000);

  // Adjust paragraph spacing
  const allP2 = document.querySelectorAll(".p2");
  allP2.forEach(p => {
    p.style.top = "-62px";
  });

  // Update top values safely
  const p1 = document.getElementById("p1");
  const p2 = document.getElementById("p2");
  const p3 = document.getElementById("p3");
  const p4 = document.getElementById("p4");

  if (p1) p1.style.top = "-65.5px";
  if (p2) p2.style.top = "-57px";
  if (p3) p3.style.top = "-47px";
  if (p4) p4.style.top = "-38px";
}

// YES button hover effect
function call() {
  const b3 = document.getElementById("b3");
  b3.style.backgroundColor = "green";
  b3.style.color = "white";
  b3.style.textShadow = "0px 0px 5px black";
}

function call1() {
  const b3 = document.getElementById("b3");
  b3.style.backgroundColor = "white";
  b3.style.color = "green";
  b3.style.textShadow = "0px 0px 5px green";
}

// NO button hover effect
function uncall() {
  const b4 = document.getElementById("b4");
  b4.style.backgroundColor = "red";
  b4.style.color = "white";
  b4.style.textShadow = "0px 0px 5px black";
}

function uncall1() {
  const b4 = document.getElementById("b4");
  b4.style.backgroundColor = "white";
  b4.style.color = "red";
  b4.style.textShadow = "0px 0px 5px red";
}