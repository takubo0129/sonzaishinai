
const defaultQuotes = [
    "風が止むとき、人は本当の自分に出会う。",
    "本音はいつも、沈黙の中に隠れている。",
    "昨日を抱えて、今日を生きるな。",
    "真実はコーヒーの底に沈んでいる。",
    "無駄の中に、本質がいることもある。",
    "努力の見返りは、他人ではなく自分が決める。",
    "愛されるより、面白がられたい。",
    "夢を追う者は、時計を見ない。"
  ];
  
  const defaultAuthors = [
    "エドワード・B・ウィリアムズ（1849–1910）",
    "クラレンス・ヴァレンタイン（1875–1941）",
    "カタリナ・M・ゼンツ（1891–1960）",
    "ジャン・マクシミリアン（1852–1904）",
    "アビゲイル・J・コーエン（1889–1963）",
    "ノエル・T・カラハン（1914–1980）"
  ];
  
  function getUserQuotes() {
    const saved = localStorage.getItem("userQuotes");
    return saved ? JSON.parse(saved) : [];
  }
  
  function saveUserQuotes(quotes) {
    localStorage.setItem("userQuotes", JSON.stringify(quotes));
  }
  
  function generateQuote() {
    const userQuotes = getUserQuotes();
    const allQuotes = [...defaultQuotes, ...userQuotes.map(q => q.text)];
    const allAuthors = [...defaultAuthors, ...userQuotes.map(q => q.author + "（" + q.years + "）")];
  
    const quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    const author = allAuthors[Math.floor(Math.random() * allAuthors.length)];
    document.getElementById("quoteBox").innerText = `「${quote}」\n── ${author}`;
  }
  
  function addCustomQuote() {
    const text = document.getElementById("newQuote").value.trim();
    const author = document.getElementById("newAuthor").value.trim();
    const years = document.getElementById("newYears").value.trim();
  
    if (!text || !author || !years) {
      alert("すべての項目を入力してください！");
      return;
    }
  
    const newEntry = { text, author, years };
    const current = getUserQuotes();
    current.push(newEntry);
    saveUserQuotes(current);
  
    document.getElementById("newQuote").value = "";
    document.getElementById("newAuthor").value = "";
    document.getElementById("newYears").value = "";
  
    alert("偉人と名言を登録しました！");
  }
  
  window.addEventListener("click", () => {
    const bgm = document.getElementById("bgm");
    bgm.play().catch(() => {});
  }, { once: true });
  