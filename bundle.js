(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const eth_regex = /0x[a-fA-F0-9]{40}/;

function onReady(yourMethod) {
  var readyStateCheckInterval = setInterval(function() {
    if (document && document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);
      yourMethod();
    }
  }, 10);
}

if (location.href.includes("etherscan.io/")) {
  const address = location.href.match(eth_regex)[0];
  const newButton = document.createElement('a');

  newButton.style.color = 'white';
  newButton.style.border = 'none';
  newButton.style.borderRadius = '0.5rem';
  newButton.style.fontWeight = '500';
  newButton.style.fontSize = '0.78515625rem';
  newButton.style.padding = '0.3rem 0.6rem';

  const nav_tabs = document.getElementById("nav_tabs")

  for(var i = 0; i < nav_tabs.children.length; i++) {
    if (nav_tabs.children[i].innerText === "Contract") {
      if (nav_tabs.children[i].children[0].childElementCount == 0) {
        newButton.innerText = "Warning: Contract Not Verified";
        newButton.style.backgroundImage = 'linear-gradient(to bottom right, #ff6f61, #e82c0c)';

        nav_tabs.appendChild(newButton);

      } else if (nav_tabs.children[i].children[0].childElementCount == 1) { // Has verified check
          newButton.href = `https://contractreader.io/contract/${address}`;
          newButton.innerText = "View on ContractReader";
          newButton.style.cursor = 'pointer';
          newButton.style.backgroundImage = 'linear-gradient(to bottom,#a78bfa,#e879f9)';

          nav_tabs.appendChild(newButton);
      }
    }
  }

} else if (location.href.includes("opensea.io/collection/")) {
  const elements = document.getElementsByClassName("fresnel-container")[13];
  const element_set = elements.children[0].children[0]
  const first_element = element_set.children[0]
  const _class = first_element.classList.value

  if (first_element.href.includes("etherscan.io")) {
    const address = first_element.href.match(eth_regex)

    const newButton = document.createElement('a');
    newButton.href = `https://contractreader.io/contract/${address}`;
    newButton.className = _class
    const img_url = chrome.runtime.getURL("images/favicon.png")
    console.log('img', img_url)
    newButton.style.backgroundImage = `url("${img_url}")`;
    newButton.style.backgroundSize = '20px';
    newButton.style.width = '20px';
    newButton.style.height = '20px';
    newButton.style.marginTop = '14px';
    newButton.style.marginRight = '15px';

    element_set.prepend(newButton)
  }

} else if (location.href.includes('https://blur.io/collection/')) {
    onReady(function() {
      const marketplaces_etc = Array(document.getElementById("OVERLINE").children[0].children[0].children[2].children[0].children)

      const button_holder = Array(document.getElementById("OVERLINE").children[0].children[0].children[2].children[0])
      const _class = button_holder[0].classList.value
      const address = marketplaces_etc[0][3].href.match(eth_regex)[0]

      const newButton = document.createElement('a');
      newButton.href = `https://contractreader.io/contract/${address}`;
      const img_url = chrome.runtime.getURL("images/favicon.png")
      newButton.style.backgroundImage = `url("${img_url}")`;
      newButton.style.backgroundSize = '21px';
      newButton.style.width = '21px';
      newButton.style.height = '21px';

      document.getElementsByClassName(_class)[0].appendChild(newButton)
    });
}

},{}]},{},[1]);
