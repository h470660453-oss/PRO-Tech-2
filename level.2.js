/* PRO.Tech — الاختبار الثاني (سهل): حلقات for */
(function () {
  "use strict";

  var DURATION = 40 * 60; // بالثواني
  var NAME_KEY = "protech-name";
  var THEME_KEY = "protech-theme";
  var LETTERS = ["أ", "ب", "ج", "د"];
  var QUESTIONS = [
    {"code":"let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  sum = sum + i;\n}\nconsole.log(sum);","options":["10","5","21","15"],"answer":3},
    {"code":"let s = \"\";\nfor (let i = 0; i < 4; i++) {\n  s = s + i;\n}\nconsole.log(s);","options":["6","0123","1234","0 1 2 3"],"answer":1},
    {"code":"let c = 0;\nfor (let i = 0; i < 7; i++) {\n  c++;\n}\nconsole.log(c);","options":["6","8","0","7"],"answer":3},
    {"code":"let t = 0;\nfor (let i = 2; i <= 10; i += 2) {\n  t = t + i;\n}\nconsole.log(t);","options":["20","30","25","55"],"answer":1},
    {"code":"let r = 1;\nfor (let i = 1; i <= 4; i++) {\n  r = r * i;\n}\nconsole.log(r);","options":["24","10","12","16"],"answer":0},
    {"code":"let s = \"\";\nfor (let i = 5; i >= 1; i--) {\n  s = s + i;\n}\nconsole.log(s);","options":["54321","12345","15","5432"],"answer":0},
    {"code":"let c = 0;\nfor (let i = 10; i > 0; i -= 3) {\n  c++;\n}\nconsole.log(c);","options":["3","5","4","10"],"answer":2},
    {"code":"let x = 0;\nfor (let i = 1; i <= 3; i++) {\n  x = x + 10;\n}\nconsole.log(x);","options":["10","30","60","6"],"answer":1},
    {"code":"let s = \"*\";\nfor (let i = 0; i < 3; i++) {\n  s = s + \"*\";\n}\nconsole.log(s);","options":["****","***","*****","4"],"answer":0},
    {"code":"let last = 0;\nfor (let i = 0; i < 5; i++) {\n  last = i * 2;\n}\nconsole.log(last);","options":["8","10","4","6"],"answer":0},
    {"code":"let n = 0;\nfor (let i = 1; i < 5; i++) {\n  n = n + i;\n}\nconsole.log(n);","options":["15","5","10","14"],"answer":2},
    {"code":"let s = 0;\nfor (let i = 0; i < 3; i++) {\n  s = s + i * 2;\n}\nconsole.log(s);","options":["3","12","9","6"],"answer":3},
    {"code":"let s = \"\";\nfor (let i = 1; i <= 3; i++) {\n  s = s + \"A\" + i;\n}\nconsole.log(s);","options":["AAA123","A123","A1A2A3","A6"],"answer":2},
    {"code":"let c = 0;\nfor (let i = 0; i <= 20; i += 5) {\n  c++;\n}\nconsole.log(c);","options":["4","5","20","6"],"answer":1},
    {"code":"let sum = 0;\nfor (let i = 1; i <= 3; i++) {\n  sum = sum + i;\n  sum = sum * 2;\n}\nconsole.log(sum);","options":["12","11","22","24"],"answer":2},
    {"code":"let c = 0;\nfor (let i = 5; i < 5; i++) {\n  c++;\n}\nconsole.log(c);","options":["1","0","5","undefined"],"answer":1},
    {"code":"let s = 0;\nfor (let i = 3; i <= 9; i += 3) {\n  s += i;\n}\nconsole.log(s);","options":["18","12","9","15"],"answer":0},
    {"code":"let n = 100;\nfor (let i = 1; i <= 3; i++) {\n  n = n - 10;\n}\nconsole.log(n);","options":["90","60","97","70"],"answer":3},
    {"code":"let s = \"\";\nfor (let i = 0; i < 3; i++) {\n  s = i + s;\n}\nconsole.log(s);","options":["012","3","102","210"],"answer":3},
    {"code":"let x = 1;\nfor (let i = 0; i < 5; i++) {\n  x = x * 2;\n}\nconsole.log(x);","options":["10","16","32","64"],"answer":2}
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
