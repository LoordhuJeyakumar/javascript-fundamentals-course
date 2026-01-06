(function(){
  const runBtn = document.getElementById('run');
  const resetBtn = document.getElementById('reset');
  const html = document.getElementById('html');
  const css = document.getElementById('css');
  const js = document.getElementById('js');
  const preview = document.getElementById('preview');

  function buildPage() {
    const content = `<!doctype html><html><head><meta charset="utf-8"><style>${css.value}</style></head><body>${html.value}<script>try{${js.value}}catch(e){document.body.insertAdjacentHTML('beforeend','<pre style="color:red">'+e.message+'</pre>')}</script></body></html>`;
    return 'data:text/html;charset=utf-8,' + encodeURIComponent(content);
  }

  runBtn.addEventListener('click', ()=>{
    preview.src = buildPage();
  });

  resetBtn.addEventListener('click', ()=>{
    html.value = '<div id="app">Hello from sandbox</div>';
    css.value = 'body{font-family:system-ui,Segoe UI,Roboto,Arial;}#app{padding:12px;background:#eef}';
    js.value = "document.getElementById('app').textContent += ' — updated by script';";
    preview.src = 'about:blank';
  });

  // Auto-run initial content
  preview.src = buildPage();
})();