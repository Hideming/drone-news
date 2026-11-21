/* ドローン週報の号一覧。新しい号を先頭に1行追加する。 */
window.WEEKLY_ISSUES = [
  { file: "20261121.html", label: "11/21号" }
];
(function () {
  var nav = document.getElementById('issue-nav');
  if (!nav || !window.WEEKLY_ISSUES) return;
  var here = location.pathname.split('/').pop() || '';
  var list = window.WEEKLY_ISSUES.slice(0, 6);
  list.forEach(function (it) {
    var a = document.createElement('a');
    a.href = it.file;
    a.textContent = it.label;
    a.className = 'issue-btn';
    if (it.file === here) a.setAttribute('aria-current', 'page');
    nav.appendChild(a);
  });
  var more = document.createElement('a');
  more.href = './';
  more.textContent = 'すべての号';
  more.className = 'issue-btn more';
  nav.appendChild(more);
})();
