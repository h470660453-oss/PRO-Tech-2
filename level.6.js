/* PRO.Tech — الاختبار السادس (متقدم): شامل: الجمل الشرطية والحلقات والمصفوفات والمعاملات المنطقية */
(function () {
  "use strict";

  var DURATION = 40 * 60; // بالثواني
  var NAME_KEY = "protech-name";
  var THEME_KEY = "protech-theme";
  var LETTERS = ["أ", "ب", "ج", "د"];
  var QUESTIONS = [
    {"code":"let a = [4, 9, 2, 7];\nlet c = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] > 3 && a[i] < 8) {\n    c++;\n  }\n}\nconsole.log(c);","options":["3","4","1","2"],"answer":3},
    {"code":"let a = [5, 12, 7, 20, 3];\nlet c = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] > 4 && a[i] < 15 || a[i] === 3) {\n    c++;\n  }\n}\nconsole.log(c);","options":["3","4","5","2"],"answer":1},
    {"code":"let a = [1, 2, 3, 4, 5, 6];\nlet s = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] % 2 === 0 || a[i] > 4) {\n    s += a[i];\n  }\n}\nconsole.log(s);","options":["12","17","21","11"],"answer":1},
    {"code":"let a = [3, 8, 5, 10];\nlet max = a[0];\nfor (let i = 1; i < a.length; i++) {\n  if (a[i] > max) {\n    max = a[i];\n  }\n}\nconsole.log(max);","options":["10","8","3","5"],"answer":0},
    {"code":"let a = [4, 7, 1, 9, 6];\nlet min = a[0];\nfor (let i = 1; i < a.length; i++) {\n  if (a[i] < min) {\n    min = a[i];\n  }\n}\nconsole.log(min);","options":["4","9","1","6"],"answer":2},
    {"code":"let a = [10, 15, 20, 25];\nlet s = \"\";\nfor (let i = 0; i < a.length; i++) {\n  if (!(a[i] % 10 === 0)) {\n    s = s + a[i] + \",\";\n  }\n}\nconsole.log(s);","options":["10,20,","15,25","25,15,","15,25,"],"answer":3},
    {"code":"let a = [2, 5, 8, 11];\nlet c = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] !== 5 && a[i] !== 8) {\n    c = c + a[i];\n  }\n}\nconsole.log(c);","options":["26","13","15","6"],"answer":1},
    {"code":"let a = [1, 2, 3, 4, 5];\nlet r = \"\";\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] > 1 && a[i] < 5) {\n    r = r + a[i];\n  } else if (a[i] === 5) {\n    r = r + \"X\";\n  }\n}\nconsole.log(r);","options":["2345","1234X","234","234X"],"answer":3},
    {"code":"let a = [6, 3, 9, 12];\nlet s = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] % 2 === 0 && a[i] % 3 === 0) {\n    s += 1;\n  } else if (a[i] % 3 === 0) {\n    s += 10;\n  }\n}\nconsole.log(s);","options":["12","22","2","4"],"answer":1},
    {"code":"let a = [5, 10, 15, 20];\nlet s = 0;\nfor (let i = 0; i < a.length; i += 2) {\n  if (a[i] > 5 || i === 0) {\n    s += a[i];\n  }\n}\nconsole.log(s);","options":["20","35","15","30"],"answer":0},
    {"code":"let a = [3, 6, 9];\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] > 4 && !(a[i] === 9)) {\n    a[i] = 0;\n  }\n}\nconsole.log(a[0], a[1], a[2]);","options":["0 0 0","3 6 9","3 0 9","0 0 9"],"answer":2},
    {"code":"let a = [1, 2, 3, 4];\nlet c = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] >= 2 && a[i] <= 3) {\n    c++;\n  }\n}\nconsole.log(c);","options":["2","3","1","4"],"answer":0},
    {"code":"let a = [8, 3, 5];\nlet s = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] > 4) {\n    s = s + a[i];\n  } else {\n    s = s - a[i];\n  }\n}\nconsole.log(s);","options":["16","6","10","0"],"answer":2},
    {"code":"let a = [2, 4, 6];\nlet b = [1, 4, 7];\nlet c = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] === b[i] || a[i] < b[i]) {\n    c++;\n  }\n}\nconsole.log(c);","options":["1","3","2","0"],"answer":2},
    {"code":"let a = [7, 14, 21, 28];\nlet r = \"\";\nfor (let i = 0; i < a.length; i++) {\n  if (a[i] > 10 && a[i] < 25 || i === 3) {\n    r = r + i;\n  }\n}\nconsole.log(r);","options":["123","12","23","0123"],"answer":0},
    {"code":"let a = 10;\nlet b = 20;\nif (a > 5 || b++ > 100) {\n  a = 0;\n}\nconsole.log(a, b);","options":["0 21","0 20","10 20","10 21"],"answer":1},
    {"code":"let a = 3;\nlet b = 8;\nif (a > 5 && b++ > 5) {\n  a++;\n}\nconsole.log(a, b);","options":["3 8","4 9","3 9","4 8"],"answer":0},
    {"code":"let arr = [0, 4, 0, 7];\nlet s = \"\";\nfor (let i = 0; i < arr.length; i++) {\n  s = s + (arr[i] || 9);\n}\nconsole.log(s);","options":["0407","47","4097","9497"],"answer":3},
    {"code":"let a = [3, 5, 8, 10, 12];\nlet c = 0;\nfor (let i = 0; i < a.length; i++) {\n  if (!(a[i] > 4) || a[i] > 9 && a[i] !== 12) {\n    c++;\n  }\n}\nconsole.log(c);","options":["3","1","2","4"],"answer":2},
    {"code":"let a = [1, 2, 3, 4];\nlet s = 0;\nfor (let i = a.length - 1; i >= 0; i--) {\n  if (i === 0 || a[i] % 2 === 1) {\n    s = s + a[i];\n  } else {\n    s = s - a[i];\n  }\n}\nconsole.log(s);","options":["2","0","-4","-2"],"answer":3}
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
