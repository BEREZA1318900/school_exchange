foo.onclick = function() {
    textToClipboard('МАОУ «КУГ №1 - Универс»');
  };
  
  
  function textToClipboard(str) {
    const ttcContainer = document.createElement('textarea');
    const styleStr = 'position: fixed; left: -200px; top: -200px; width: 10px; height: 10px;';
    ttcContainer.setAttribute('style', styleStr);
    document.body.appendChild(ttcContainer);
  
    ttcContainer.value = str;
    ttcContainer.focus();
    ttcContainer.select();
    document.execCommand('copy');
    document.body.removeChild(ttcContainer);
  }