function saklarKeluargaUtama() {
  let keluargaUtama = document.getElementById("default-toggle-keluarga");

  let lampuKeluarga1 = document.getElementById("lampu-keluarga-1");
  let lampuKeluarga2 = document.getElementById("lampu-keluarga-2");
  let lampuKeluarga3 = document.getElementById("lampu-keluarga-3");
  
  let saklarKeluarga1 = document.getElementById("default-toggle-k1");
  let saklarKeluarga2 = document.getElementById("default-toggle-k2");
  let saklarKeluarga3 = document.getElementById("default-toggle-k3");

  if (keluargaUtama.checked) {
    lampuKeluarga1.src = "img/on.png";
    lampuKeluarga2.src = "img/on.png";
    lampuKeluarga3.src = "img/on.png";
    saklarKeluarga1.checked = true;
    saklarKeluarga2.checked = true;
    saklarKeluarga3.checked = true;
  } else {
    lampuKeluarga1.src = "img/off.png";
    lampuKeluarga2.src = "img/off.png";
    lampuKeluarga3.src = "img/off.png";
    saklarKeluarga1.checked = false;
    saklarKeluarga2.checked = false;
    saklarKeluarga3.checked = false;
  }
}

function saklarKeluarga() {
  let saklarKeluarga1 = document.getElementById("default-toggle-k1");
  let saklarKeluarga2 = document.getElementById("default-toggle-k2");
  let saklarKeluarga3 = document.getElementById("default-toggle-k3");

  let lampuKeluarga1 = document.getElementById("lampu-keluarga-1");
  let lampuKeluarga2 = document.getElementById("lampu-keluarga-2");
  let lampuKeluarga3 = document.getElementById("lampu-keluarga-3");

  if (saklarKeluarga1.checked) {
    lampuKeluarga1.src = "img/on.png";
  } else {
    lampuKeluarga1.src = "img/off.png";
  }

  if (saklarKeluarga2.checked) {
    lampuKeluarga2.src = "img/on.png";
  } else {
    lampuKeluarga2.src = "img/off.png";
  }

  if (saklarKeluarga3.checked) {
    lampuKeluarga3.src = "img/on.png";
  } else {
    lampuKeluarga3.src = "img/off.png";
  }
}

function saklarMakanUtama() {
  let makanUtama = document.getElementById("default-toggle-makan");
  let saklarMakan1 = document.getElementById("default-toggle-m1");

  let lampuMakan1 = document.getElementById("lampu-makan-1");

  if (makanUtama.checked) {
    lampuMakan1.src = "img/on.png";
    saklarMakan1.checked = true;
  } else {
    lampuMakan1.src = "img/off.png";
    saklarMakan1.checked = false;
  }
}

function saklarMakan() {
  let saklarMakan1 = document.getElementById("default-toggle-m1");

  let lampuMakan1 = document.getElementById("lampu-makan-1");

  if (saklarMakan1.checked) {
    lampuMakan1.src = "img/on.png";
  } else {
    lampuMakan1.src = "img/off.png";
  }
}

function saklarTidurUtama() {
  let tidurUtama = document.getElementById("default-toggle-tidur");
  let saklarTidur1 = document.getElementById("default-toggle-t1");
  let saklarTidur2 = document.getElementById("default-toggle-t2");

  let lampuTidur1 = document.getElementById("lampu-tidur-1");
  let lampuTidur2 = document.getElementById("lampu-tidur-2");

  if (tidurUtama.checked) {
    lampuTidur1.src = "img/on.png";
    lampuTidur2.src = "img/on.png";
    saklarTidur1.checked = true;
    saklarTidur2.checked = true;
  } else {
    lampuTidur1.src = "img/off.png";
    lampuTidur2.src = "img/off.png";
    saklarTidur1.checked = false;
    saklarTidur2.checked = false;
  }
}

function saklarTidur() {
  let saklarTidur1 = document.getElementById("default-toggle-t1");
  let saklarTidur2 = document.getElementById("default-toggle-t2");

  let lampuTidur1 = document.getElementById("lampu-tidur-1");
  let lampuTidur2 = document.getElementById("lampu-tidur-2");

  if (saklarTidur1.checked) {
    lampuTidur1.src = "img/on.png";
  } else {
    lampuTidur1.src = "img/off.png";
  }

  if (saklarTidur2.checked) {
    lampuTidur2.src = "img/on.png";
  } else {
    lampuTidur2.src = "img/off.png";
  }
}

function saklarTamuUtama() {
  let tamuUtama = document.getElementById("default-toggle-tamu");
  let saklarTamu1 = document.getElementById("default-toggle-tm1");
  let saklarTamu2 = document.getElementById("default-toggle-tm2");
  let saklarTamu3 = document.getElementById("default-toggle-tm3");
  let saklarTamu4 = document.getElementById("default-toggle-tm4");

  let lampuTamu1 = document.getElementById("lampu-tamu-1");
  let lampuTamu2 = document.getElementById("lampu-tamu-2");
  let lampuTamu3 = document.getElementById("lampu-tamu-3");
  let lampuTamu4 = document.getElementById("lampu-tamu-4");

  if (tamuUtama.checked) {
    lampuTamu1.src = "img/on.png";
    lampuTamu2.src = "img/on.png";
    lampuTamu3.src = "img/on.png";
    lampuTamu4.src = "img/on.png";
    saklarTamu1.checked = true;
    saklarTamu2.checked = true;
    saklarTamu3.checked = true;
    saklarTamu4.checked = true;
  } else {
    lampuTamu1.src = "img/off.png";
    lampuTamu2.src = "img/off.png";
    lampuTamu3.src = "img/off.png";
    lampuTamu4.src = "img/off.png";
    saklarTamu1.checked = false;
    saklarTamu2.checked = false;
    saklarTamu3.checked = false;
    saklarTamu4.checked = false;
  }
}

function saklarTamu() {
  let saklarTamu1 = document.getElementById("default-toggle-tm1");
  let saklarTamu2 = document.getElementById("default-toggle-tm2");
  let saklarTamu3 = document.getElementById("default-toggle-tm3");
  let saklarTamu4 = document.getElementById("default-toggle-tm4");

  let lampuTamu1 = document.getElementById("lampu-tamu-1");
  let lampuTamu2 = document.getElementById("lampu-tamu-2");
  let lampuTamu3 = document.getElementById("lampu-tamu-3");
  let lampuTamu4 = document.getElementById("lampu-tamu-4");

  if (saklarTamu1.checked) {
    lampuTamu1.src = "img/on.png";
  } else {
    lampuTamu1.src = "img/off.png";
  }

  if (saklarTamu2.checked) {
    lampuTamu2.src = "img/on.png";
  } else {
    lampuTamu2.src = "img/off.png";
  }

  if (saklarTamu3.checked) {
    lampuTamu3.src = "img/on.png";
  } else {
    lampuTamu3.src = "img/off.png";
  }

  if (saklarTamu4.checked) {
    lampuTamu4.src = "img/on.png";
  } else {
    lampuTamu4.src = "img/off.png";
  }
}
