const charactersData = [
  {
    name: "Ted Mosby",
    role: "The Romantic Architect",
    energy: "Enerji: Hayalperest & Hikâyeci",
    accent: "#4338ca",
    soft: "rgba(67, 56, 202, 0.12)",
    description: "Kelimelere, hikâyelere ve büyük anlamlar yakalamaya bayılan; her anı unutulmaz bir anıya dönüştüren karakter.",
    quote: "“Kids, some lessons stay with you forever.”"
  },
  {
    name: "Robin Scherbatsky",
    role: "Cool, Sharp & Iconic",
    energy: "Enerji: Karizmatik & Kendine Has (Hocamızın İkizi)",
    accent: "#db2777",
    soft: "rgba(219, 39, 119, 0.13)",
    description: "Rahat tavrı, keskin zekâsı ve ortama girdiği an yaydığı o kendine güvenen enerjiyle Gizem Hoca'ya en çok yakışan ruh.",
    quote: "“Nobody asked you, Patrice!” / “Let’s go to the mall!”"
  },
  {
    name: "Lily Aldrin",
    role: "The Warm Connector",
    energy: "Enerji: Samimi, Neşeli & Birleştirici",
    accent: "#14b8a6",
    soft: "rgba(20, 184, 166, 0.13)",
    description: "Ekibin duygusal dengesi; samimiyeti, sıcak bakışı ve herkesi bir arada tutan o içten tavrıyla dikkat çeker.",
    quote: "“You son of a beetch!”"
  },
  {
    name: "Marshall Eriksen",
    role: "Big Heart & Pure Joy",
    energy: "Enerji: Pozitif, Sadık & Coşkulu",
    accent: "#0ea5e9",
    soft: "rgba(14, 165, 233, 0.13)",
    description: "Yüksek coşkusu, içten gülüşü ve çevresine yaydığı o tertemiz iyi niyetle her ortamı aydınlatır.",
    quote: "“Lawyered!”"
  },
  {
    name: "Barney Stinson",
    role: "The Showman",
    energy: "Enerji: Şovmen, Hızlı & Unutulmaz",
    accent: "#d97706",
    soft: "rgba(217, 119, 6, 0.13)",
    description: "Sıradan anları bile büyük bir sahneye çeviren, temposu hiç düşmeyen ve akılda kalan o ikonik kıvılcım.",
    quote: "“It’s going to be leg—wait for it—dary!”"
  }
];

const charChips = document.querySelectorAll(".char-chip");
const charCard = document.getElementById("charCard");
const charName = document.getElementById("charName");
const charRole = document.getElementById("charRole");
const charEnergy = document.getElementById("charEnergy");
const charDesc = document.getElementById("charDesc");
const charQuote = document.getElementById("charQuote");

function applyCharacter(index, animate = true) {
  const item = charactersData[index];
  if (!item) return;

  charChips.forEach((chip, i) => {
    chip.classList.toggle("active", i === index);
  });

  const updateChar = () => {
    rootEl.style.setProperty("--char-accent", item.accent);
    rootEl.style.setProperty("--char-soft", item.soft);
    charName.textContent = item.name;
    charRole.textContent = item.role;
    charEnergy.textContent = item.energy;
    charDesc.textContent = item.description;
    charQuote.textContent = item.quote;
  };

  if (!animate) {
    updateChar();
    return;
  }

  charCard.classList.add("is-switching");
  window.setTimeout(() => {
    updateChar();
    charCard.classList.remove("is-switching");
  }, 150);
}

charChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    applyCharacter(Number(chip.dataset.char), true);
  });
});

const tracksData = [
  {
    name: "Highway to Hell",
    artist: "AC/DC",
    time: "00:48 – 01:00",
    mood: "High-Voltage Entrance",
    accent: "#ff5e5b",
    soft: "rgba(255, 94, 91, 0.13)",
    description: "İlk riff ve patlayan enerjiyle tam yol hızlanan, hiç frene basmayan klasik bir marş.",
    quote: "“Living easy, living free, season ticket on a one-way ride.”",
    comment: "00:48–01:00 aralığındaki o ivme, sınıfa girer girmez havayı değiştiren o keskin ve özgüvenli ritmin ta kendisi.",
    himym: "Barney’nin takım elbisesini ilikleyip odaya girdiği o ‘Suit Up’ sahnesi gibi net ve iddialı."
  },
  {
    name: "Dream On",
    artist: "Aerosmith",
    time: "02:00 – 02:10",
    mood: "Soaring Chorus",
    accent: "#6c5ce7",
    soft: "rgba(108, 92, 231, 0.13)",
    description: "Sabırla örülen cümlelerin zirveye tırmandığı, tutku dolu ikonik bir an.",
    quote: "“Dream on, dream on, dream until your dream comes true.”",
    comment: "02:00–02:10 arası; hayallerin peşinden gitmenin ve vazgeçmemenin en güçlü İngilizce karşılığı.",
    himym: "Ted’in mimarlık hayallerine ve büyük hedeflerine baktığı o içten, umut dolu anlar."
  },
  {
    name: "Dust in the Wind",
    artist: "Kansas",
    time: "01:00 – 01:20",
    mood: "Acoustic Reflection",
    accent: "#0ea5e9",
    soft: "rgba(14, 165, 233, 0.13)",
    description: "Akustik gitarın dinginliği içinde anın kıymetini fısıldayan derin bir durak.",
    quote: "“All we are is dust in the wind.”",
    comment: "01:00–01:20 arasındaki o sade ve dokunaklı geçiş, kalabalık gürültülerin arasında kısa ama iz bırakan bir nefes gibi.",
    himym: "MacLaren’s’ta masada oturup hayatın hızını bir anlığına yavaşlattıkları o samimi sohbetler."
  },
  {
    name: "Carry On Wayward Son",
    artist: "Kansas",
    time: "01:30 – 01:50",
    mood: "Unstoppable Drive",
    accent: "#d97706",
    soft: "rgba(217, 119, 6, 0.13)",
    description: "Yorgunluğu silip atan, yoluna kararlılıkla devam etmeni söyleyen efsanevi tempo.",
    quote: "“Carry on my wayward son, there’ll be peace when you are done.”",
    comment: "01:30–01:50 aralığındaki o coşku ve kararlılık, zor günlerde bile başı dik tutan o sağlam enerjiyi taşıyor.",
    himym: "Marshall ve Lily’nin en zor anlarda bile birbirine tutunup yoluna devam ettiği o sağlam bağ."
  },
  {
    name: "Sweet Child O’Mine",
    artist: "Guns N’ Roses",
    time: "03:40 – 04:00 & 04:40",
    mood: "Golden Guitar Finale",
    accent: "#db2777",
    soft: "rgba(219, 39, 119, 0.13)",
    description: "Melodinin doruğa çıktığı, duygusu yüksek ve akılda kalıcı en parlak sekanslar.",
    quote: "“Where do we go now? Where do we go?”",
    comment: "Hem 03:40–04:00 dilimi hem de 04:40 anı; şarkının ruhunu en canlı hissettiren, gülümseten ve unutulmayan kısımlar.",
    himym: "Sezon finalinde tüm ekibin aynı masada, aynı gülümsemeyle toplandığı o unutulmaz kare."
  }
];

const rootEl = document.documentElement;
const chips = document.querySelectorAll(".track-chip");
const trackCard = document.getElementById("trackCard");
const trackName = document.getElementById("trackName");
const trackArtist = document.getElementById("trackArtist");
const trackTime = document.getElementById("trackTime");
const trackMood = document.getElementById("trackMood");
const trackDesc = document.getElementById("trackDesc");
const trackQuote = document.getElementById("trackQuote");
const trackComment = document.getElementById("trackComment");
const trackHimym = document.getElementById("trackHimym");

function applyTrack(index, animate = true) {
  const item = tracksData[index];
  if (!item) return;

  chips.forEach((chip, i) => {
    chip.classList.toggle("active", i === index);
  });

  const updateContent = () => {
    rootEl.style.setProperty("--active-accent", item.accent);
    rootEl.style.setProperty("--active-soft", item.soft);
    trackName.textContent = item.name;
    trackArtist.textContent = item.artist;
    trackTime.textContent = item.time;
    trackMood.textContent = item.mood;
    trackDesc.textContent = item.description;
    trackQuote.textContent = item.quote;
    trackComment.textContent = item.comment;
    trackHimym.textContent = item.himym;
  };

  if (!animate) {
    updateContent();
    return;
  }

  trackCard.classList.add("is-switching");
  window.setTimeout(() => {
    updateContent();
    trackCard.classList.remove("is-switching");
  }, 160);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const idx = Number(chip.dataset.track);
    applyTrack(idx, true);
  });
});

applyTrack(0, false);
applyCharacter(1, false);

const photoCards = document.querySelectorAll(".polaroid-card");
const photoDots = document.querySelectorAll(".photo-dot");

function setActivePhoto(photoIndex) {
  photoCards.forEach((card) => {
    const isMatch = Number(card.dataset.photo) === photoIndex;
    card.classList.toggle("is-active", isMatch);
  });
  photoDots.forEach((dot) => {
    const isMatch = Number(dot.dataset.photo) === photoIndex;
    dot.classList.toggle("active", isMatch);
  });
}

photoDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    setActivePhoto(Number(dot.dataset.photo));
  });
});

photoCards.forEach((card) => {
  card.addEventListener("click", () => {
    setActivePhoto(Number(card.dataset.photo));
  });
});

const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
