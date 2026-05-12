window.onload = function () {

  // TEXT UTAMA
  document.getElementById("status").innerText = data.status;
  document.getElementById("tagline").innerText = data.tagline;

  document.getElementById("statusBottom").innerText = data.status;
  document.getElementById("taglineBottom").innerText = data.tagline;

  document.getElementById("judul").innerText = data.judul;
  document.getElementById("harga").innerText = data.harga;

  document.getElementById("skin").innerText = data.skin;
  document.getElementById("hero").innerText = data.hero;
  document.getElementById("emblem").innerText = data.emblem;

  document.getElementById("waLink").href = data.wa;

  // STATUS COLOR
  const statusEl = document.getElementById("status");

  statusEl.classList.remove("status-ready","status-sold","status-preorder");

  if (data.statusType === "ready") {
    statusEl.classList.add("status-ready");
  }
  else if (data.statusType === "sold") {
    statusEl.innerText = "SOLD OUT";
    statusEl.classList.add("status-sold");
  }
  else if (data.statusType === "preorder") {
    statusEl.classList.add("status-preorder");
  }

  // LIST INFO
  const infoList = document.getElementById("infoList");
  infoList.innerHTML = "";
  data.infoList.forEach(t => {
    const li = document.createElement("li");
    li.innerText = t;
    infoList.appendChild(li);
  });

  // LIST NOTE
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";
  data.noteList.forEach(t => {
    const li = document.createElement("li");
    li.innerText = t;
    noteList.appendChild(li);
  });

  // SLIDER GAMBAR
  const slider = document.getElementById("slider");
  slider.innerHTML = "";

  data.images.forEach(img => {
    const div = document.createElement("div");
    div.className = "slide";
    div.innerHTML = `<img src="${img}" onclick="openImage(this.src)">`;
    slider.appendChild(div);
  });

};