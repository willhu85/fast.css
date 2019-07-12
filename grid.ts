export function grid() {
  let html = "";
  let rowHtml = "";
  const rowStart = '<div class="row">';
  const rowEnd = "</div>";
  const arrayColCount = [12, 24];
  arrayColCount.forEach(function(v, i) {
    for (let index = 1; index <= v; index++) {
      const innerHtml = `<div class="col-${index}-${v} bgd">col-${index}-${v}</div>`;
      rowHtml = rowStart + innerHtml + rowEnd;
      html = html + rowHtml;
    }
  });
  window.document.getElementById("grid").innerHTML = html;
}
