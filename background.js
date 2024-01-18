const eth_regex = /0x[a-fA-F0-9]{40}/;

function changeUrl(url) {
  const eth_address = url.match(eth_regex)[0];
  let newUrl = 'https://contractreader.io/contract/';

  if (url.includes('goerli.etherscan.io/address/') || url.includes('goerli.etherscan.io/token/')) {
    newUrl += 'goerli/';
    newUrl += eth_address;

    return newUrl;

  } else if (url.includes('sepolia.etherscan.io/address/') || url.includes('sepolia.etherscan.io/token/')) {
    newUrl += 'sepolia/';
    newUrl += eth_address;

    return newUrl;

  } else if (url.includes('optimistic.etherscan.io/address/') || url.includes('optimistic.etherscan.io/token/')) {
    newUrl += 'optimism/';
    newUrl += eth_address;

    return newUrl;

  } else if (url.includes('etherscan.io/address/') || url.includes('etherscan.io/token/')) {
    newUrl += 'mainnet/';

  } else if (url.includes('basescan.org/address/') || url.includes('basescan.org/token/')) {
    newUrl += 'base/';

  } else if (url.includes('polygonscan.com/address/') || url.includes('polygonscan.com/token/')) {
    newUrl += 'polygon/';

  } else if (url.includes('arbiscan.io/address/') || url.includes('arbiscan.io/token/')) {
    newUrl += 'arbitrum/';

  } else if (url.includes('bscscan.com/address/') || url.includes('bscscan.com/token/')) {
    newUrl += 'bsc/';
  }

  newUrl += eth_address;

  return newUrl;
}

// Update the current tab with the new URL
chrome.action.onClicked.addListener(function(tab) {
  if (tab.url.includes('/tx/')) return;

  chrome.tabs.update(tab.id, {url: changeUrl(tab.url)});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    const url = changeInfo.url;

    if (url.includes('etherscan.io') || url.includes('basescan.org') ||
        url.includes('polygonscan.com') || url.includes('arbiscan.io') ||
        url.includes('bscscan.com')) {
      chrome.action.setIcon({
        path: {
          "16": "images/cr-purple16.png",
          "48": "images/cr-purple48.png",
          "128": "images/cr-purple128.png"
        },
        tabId,
      });
    } else {
      chrome.action.setIcon({
        path: {
          "16": "images/cr-grey16.png",
          "48": "images/cr-grey48.png",
          "128": "images/cr-grey128.png"
        },
        tabId,
      });
    }
  }
});
