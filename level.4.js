/* PRO.Tech — الاختبار الرابع (متوسط): الجمل الشرطية والمعاملات المنطقية */
(function () {
  "use strict";

  var DURATION = 40 * 60; // بالثواني
  var NAME_KEY = "protech-name";
  var THEME_KEY = "protech-theme";
  var LETTERS = ["أ", "ب", "ج", "د"];
  var QUESTIONS = [
    {"code":"let x = 5;\nlet y = 10;\nif (x > 3 && y < 8) {\n  console.log(\"Yes\");\n} else {\n  console.log(\"No\");\n}","options":["Yes","No","5","10"],"answer":1},
    {"code":"let a = 4;\nif (a < 2 || a > 3) {\n  console.log(\"Inside\");\n} else {\n  console.log(\"Outside\");\n}","options":["Outside","4","Inside","undefined"],"answer":2},
    {"code":"let ok = false;\nif (!ok) {\n  console.log(\"Closed\");\n} else {\n  console.log(\"Open\");\n}","options":["Closed","Open","true","false"],"answer":0},
    {"code":"let age = 17;\nlet hasId = true;\nif (age >= 18 || hasId && age >= 16) {\n  console.log(\"Allowed\");\n} else {\n  console.log(\"Denied\");\n}","options":["Denied","Allowed","true","17"],"answer":1},
    {"code":"let x = 7;\nif (x > 5 && x < 10 && x !== 7) {\n  console.log(\"A\");\n} else if (x > 5 && x < 10) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}","options":["A","C","B","7"],"answer":2},
    {"code":"let a = true;\nlet b = false;\nif (a && b || !b) {\n  console.log(\"P\");\n} else {\n  console.log(\"Q\");\n}","options":["Q","true","false","P"],"answer":3},
    {"code":"let a = 10;\nlet b = 20;\nif (!(a > 5 && b > 25)) {\n  console.log(\"Pass\");\n} else {\n  console.log(\"Fail\");\n}","options":["Fail","10","20","Pass"],"answer":3},
    {"code":"let n = 15;\nif (n % 3 === 0 && n % 5 === 0) {\n  console.log(\"FizzBuzz\");\n} else if (n % 3 === 0 || n % 5 === 0) {\n  console.log(\"One of them\");\n} else {\n  console.log(n);\n}","options":["One of them","FizzBuzz","15","Fizz"],"answer":1},
    {"code":"let a = 5;\nlet b = 5;\nif (a !== b || a < b) {\n  console.log(\"1\");\n} else if (a >= b && a <= b) {\n  console.log(\"2\");\n} else {\n  console.log(\"3\");\n}","options":["2","1","3","5"],"answer":0},
    {"code":"let x = 0;\nif (x === 0 && !x) {\n  console.log(\"Zero\");\n} else {\n  console.log(\"Other\");\n}","options":["Other","0","Zero","undefined"],"answer":2},
    {"code":"let x = 3;\nlet y = 8;\nlet r = \"\";\nif (x > y || x === 3) {\n  r = r + \"A\";\n}\nif (x < y && y !== 8) {\n  r = r + \"B\";\n}\nif (!(x === y)) {\n  r = r + \"C\";\n}\nconsole.log(r);","options":["ABC","A","AC","BC"],"answer":2},
    {"code":"let a = 5;\nlet b = \"5\";\nif (a == b && a !== b) {\n  console.log(\"Both\");\n} else if (a == b) {\n  console.log(\"Loose only\");\n} else {\n  console.log(\"None\");\n}","options":["Both","Loose only","None","5"],"answer":0},
    {"code":"let t = 25;\nif (t < 10 || t > 30) {\n  console.log(\"Extreme\");\n} else if (t >= 20 && t <= 30) {\n  console.log(\"Nice\");\n} else {\n  console.log(\"Normal\");\n}","options":["Nice","Extreme","Normal","25"],"answer":0},
    {"code":"let a = 2;\nlet b = 3;\nif (!(a === 2) || !(b === 3)) {\n  console.log(\"Different\");\n} else {\n  console.log(\"Same\");\n}","options":["Different","2","Same","3"],"answer":2},
    {"code":"let x = 8;\nif (x > 5 || x > 10 && x < 6) {\n  console.log(\"T\");\n} else {\n  console.log(\"F\");\n}","options":["F","T","8","true"],"answer":1},
    {"code":"let a = true;\nlet b = true;\nif (!a || !b) {\n  console.log(\"One is false\");\n} else if (a && b) {\n  console.log(\"Both true\");\n} else {\n  console.log(\"Other\");\n}","options":["One is false","Other","true","Both true"],"answer":3},
    {"code":"let x = 12;\nlet y = 0;\nif (x > 10 && x < 20) {\n  y = y + 1;\n}\nif (x > 10 || x < 5) {\n  y = y + 2;\n}\nif (x !== 12 && x > 0) {\n  y = y + 4;\n}\nconsole.log(y);","options":["7","1","6","3"],"answer":3},
    {"code":"let score = 70;\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 80 || score === 75) {\n  console.log(\"B\");\n} else if (score >= 70 && score < 80) {\n  console.log(\"C\");\n} else {\n  console.log(\"D\");\n}","options":["C","B","D","A"],"answer":0},
    {"code":"let a = 1;\nlet b = 2;\nif (a > b && b > 0 || a < b && b > 5) {\n  console.log(\"X\");\n} else {\n  console.log(\"Y\");\n}","options":["X","1","2","Y"],"answer":3},
    {"code":"let x = 5;\nif (x != 5 || !(x < 5) && x <= 5) {\n  console.log(\"M\");\n} else {\n  console.log(\"N\");\n}","options":["N","M","5","true"],"answer":1}
  ];

  function $(id) { return document.getElementById(id); }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function save(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* تجاهل */ } }

  /* ---------- الوضع (داكن / فاتح) ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    $("themeToggle").textContent = theme === "dark" ? "☀ الوضع الفاتح" : "☾ الوضع الداكن";
  }
  applyTheme(load(THEME_KEY) === "light" ? "light" : "dark");
  $("themeToggle").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    save(THEME_KEY, next);
    applyTheme(next);
  });

  /* ---------- تلوين الكود ---------- */
  var KEYWORDS = /^(let|const|var|if|else|for|function|return)$/;
  var LITERALS = /^(true|false|null|undefined|NaN|Infinity)$/;
  var BUILTINS = /^(console|log|length)$/;
  var TOKENS = /("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|(\/\/.*)|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_$][\w$]*)\b|(===|!==|==|!=|<=|>=|&&|\|\||\+\+|--|\+=|-=|\*=|[!<>%*\/+\-=])/g;

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function highlight(code) {
    var out = "", last = 0, m;
    TOKENS.lastIndex = 0;
    while ((m = TOKENS.exec(code)) !== null) {
      var text = m[0], cls = "";
      if (m[1]) cls = "tk-str";
      else if (m[2]) cls = "tk-com";
      else if (m[3]) cls = "tk-num";
      else if (m[4]) {
        if (KEYWORDS.test(text)) cls = "tk-kw";
        else if (LITERALS.test(text)) cls = "tk-lit";
        else if (BUILTINS.test(text)) cls = "tk-fn";
      } else if (m[5]) cls = "tk-op";
      out += esc(code.slice(last, m.index));
      out += cls ? '<span class="' + cls + '">' + esc(text) + "</span>" : esc(text);
      last = m.index + text.length;
    }
    return out + esc(code.slice(last));
  }

  /* ---------- الحالة ---------- */
  var answers = [];
  var current = 0;
  var endAt = 0;
  var timerId = null;
  var running = false;
  var studentName = "";

  var screens = ["startScreen", "quizScreen", "resultScreen"];
  function show(id) {
    screens.forEach(function (s) { $(s).hidden = s !== id; });
    window.scrollTo(0, 0);
  }

  function guard(e) { e.preventDefault(); e.returnValue = ""; }

  /* ---------- شاشة الاسم ---------- */
  var nameInput = $("nameInput");
  var savedName = load(NAME_KEY);
  if (savedName) nameInput.value = savedName;

  function enter() {
    var name = nameInput.value.replace(/\s+/g, " ").trim();
    if (!name) {
      $("nameError").hidden = false;
      nameInput.focus();
      return;
    }
    $("nameError").hidden = true;
    studentName = name;
    save(NAME_KEY, name);
    startQuiz();
  }
  $("enterBtn").addEventListener("click", enter);
  nameInput.addEventListener("keydown", function (e) { if (e.key === "Enter") enter(); });
  nameInput.addEventListener("input", function () { $("nameError").hidden = true; });

  /* ---------- الاختبار ---------- */
  function startQuiz() {
    answers = QUESTIONS.map(function () { return -1; });
    current = 0;
    endAt = Date.now() + DURATION * 1000;
    running = true;
    window.addEventListener("beforeunload", guard);
    show("quizScreen");
    renderQuestion();
    updateTimer();
    timerId = setInterval(updateTimer, 250);
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function updateTimer() {
    var left = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
    var el = $("timer");
    el.textContent = pad(Math.floor(left / 60)) + ":" + pad(left % 60);
    el.classList.toggle("warn", left <= 300);
    if (left === 0) finish(true);
  }

  function answeredCount() {
    return answers.filter(function (a) { return a !== -1; }).length;
  }

  function renderQuestion() {
    var q = QUESTIONS[current];
    $("qCounter").textContent = "السؤال " + (current + 1) + " من " + QUESTIONS.length;
    $("answeredCount").textContent = "تمت الإجابة عن " + answeredCount() + " من " + QUESTIONS.length;
    $("code").innerHTML = highlight(q.code);

    var box = $("options");
    box.innerHTML = "";
    q.options.forEach(function (text, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "option" + (answers[current] === i ? " selected" : "");
      b.setAttribute("aria-pressed", answers[current] === i ? "true" : "false");
      var letter = document.createElement("span");
      letter.className = "opt-letter";
      letter.textContent = LETTERS[i];
      var label = document.createElement("span");
      label.className = "opt-text";
      label.dir = "ltr";
      label.textContent = text;
      b.appendChild(letter);
      b.appendChild(label);
      b.addEventListener("click", function () {
        answers[current] = i;
        renderQuestion();
      });
      box.appendChild(b);
    });

    $("prevBtn").disabled = current === 0;
    $("nextBtn").disabled = current === QUESTIONS.length - 1;
    renderGrid();
  }

  function renderGrid() {
    var grid = $("qgrid");
    grid.innerHTML = "";
    QUESTIONS.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = i + 1;
      b.setAttribute("aria-label", "السؤال " + (i + 1) + (answers[i] !== -1 ? " (تمت الإجابة)" : ""));
      if (answers[i] !== -1) b.classList.add("answered");
      if (i === current) b.classList.add("current");
      b.addEventListener("click", function () { current = i; renderQuestion(); });
      grid.appendChild(b);
    });
  }

  $("prevBtn").addEventListener("click", function () { if (current > 0) { current--; renderQuestion(); } });
  $("nextBtn").addEventListener("click", function () { if (current < QUESTIONS.length - 1) { current++; renderQuestion(); } });

  /* ---------- التسليم ---------- */
  var dialog = $("confirmDialog");
  $("submitBtn").addEventListener("click", function () {
    var left = QUESTIONS.length - answeredCount();
    $("dlgText").textContent = left > 0
      ? "عدد الأسئلة التي لم تُجب عنها: " + left + ". هل تريد تسليم الاختبار الآن؟"
      : "أجبت عن جميع الأسئلة. هل تريد تسليم الاختبار الآن؟";
    dialog.showModal();
  });
  $("dlgCancel").addEventListener("click", function () { dialog.close(); });
  $("dlgConfirm").addEventListener("click", function () { dialog.close(); finish(false); });

  function levelOf(percent) {
    if (percent >= 90) return "ممتاز";
    if (percent >= 75) return "جيد جدًا";
    if (percent >= 60) return "جيد";
    if (percent >= 50) return "مقبول";
    return "يحتاج إلى مراجعة";
  }

  function finish(auto) {
    if (!running) return;
    running = false;
    clearInterval(timerId);
    window.removeEventListener("beforeunload", guard);
    if (dialog.open) dialog.close();

    var total = QUESTIONS.length;
    var wrong = [];
    QUESTIONS.forEach(function (q, i) { if (answers[i] !== q.answer) wrong.push(i); });
    var score = total - wrong.length;
    var percent = Math.round((score / total) * 100);

    $("autoNote").hidden = !auto;
    $("resultGreeting").textContent = "يا " + studentName + "، نتيجتك هي " + score + " من " + total;
    $("resultPercent").textContent = percent + "%";
    $("resultLevel").textContent = levelOf(percent);

    var list = $("wrongList");
    list.innerHTML = "";
    $("wrongTitle").textContent = wrong.length
      ? "الأسئلة التي أخطأت فيها (" + wrong.length + ")"
      : "أحسنت، لا توجد أسئلة خاطئة.";

    wrong.forEach(function (i) {
      var q = QUESTIONS[i];
      var item = document.createElement("article");
      item.className = "wrong-item";
      var h = document.createElement("h3");
      h.textContent = "السؤال " + (i + 1) + ": ما ناتج الكود الآتي؟";
      var pre = document.createElement("pre");
      pre.className = "code";
      pre.dir = "ltr";
      pre.innerHTML = highlight(q.code);
      var p = document.createElement("p");
      p.className = "your-answer";
      if (answers[i] === -1) {
        p.textContent = "لم تُجب عن هذا السؤال.";
      } else {
        p.appendChild(document.createTextNode("إجابتك: "));
        var span = document.createElement("span");
        span.className = "opt-text";
        span.dir = "ltr";
        span.textContent = q.options[answers[i]];
        p.appendChild(span);
      }
      item.appendChild(h);
      item.appendChild(pre);
      item.appendChild(p);
      list.appendChild(item);
    });

    show("resultScreen");
  }

  $("retryBtn").addEventListener("click", startQuiz);
})();
