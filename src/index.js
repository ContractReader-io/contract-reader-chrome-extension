// const { createPublicClient, http, getAddress } = require("viem");
// const { normalize } = require('viem/ens');
// const { mainnet } = require('viem/chains');
const ethers = require('ethers');

const provider = ethers.getDefaultProvider();

// const publicClient = createPublicClient({
//   chain: mainnet,
//   transport: http(),
// })

// const resolverAddress = async (address) => await publicClient.getEnsResolver({
//     name: address,
//   })

const createEnsButton = (address) => {
  const ensButton = document.createElement('a');
  ensButton.href = `https://etherscan.io/address/${address}`;
  ensButton.target = "_blank";
  ensButton.className = 'badge bg-white hover:bg-secondary text-dark text-nowrap fw-medium transition-all rounded-pill py-1.5 px-2';
  ensButton.style.border = '1px solid #D9D9D9';
  return ensButton;
}

const createImage = () => {
  const image = document.createElement('img');
  image.src = chrome.runtime.getURL("images/ens-new.svg");
  image.style.width = '13px';
  image.style.marginRight = '4px';
  return image;
}

const createSpan = (ensAddress) => {
  const span = document.createElement('span');
  span.innerText = ensAddress;
  span.style.padding = '4px 0';
  span.style.display = 'inline-block';
  return span;
}

if (location.href.includes("basescan.org/tx/")) {
  const row = document.getElementsByClassName('row align-items-center')[6];
  const addressDiv = row.children[1];
  const address = addressDiv.innerText.trim();

  provider.lookupAddress(address).then(ensAddress => {
    if (ensAddress === '0x0000000000000000000000000000000000000000') return;

    const ensButton = createEnsButton(address);

    const referenceElement = addressDiv.children[1];
    addressDiv.insertBefore(ensButton, referenceElement.nextSibling);

    ensButton.appendChild(createImage());
    ensButton.appendChild(createSpan(ensAddress));
  });
} else if (location.href.includes('basescan.org/address/')) {
  const targetDiv = document.getElementsByClassName('row mb-4')[0];

  const match = location.href.match(/address\/(0x[a-fA-F0-9]{40})/);
  const address = match ? match[1] : null;

  if (!address) return;

  provider.lookupAddress(address).then(ensAddress => {
    if (ensAddress === '0x0000000000000000000000000000000000000000') return;

    const ensButton = createEnsButton(address);
    ensButton.style.marginBottom = '10px';

    const parentElement = targetDiv.parentElement;
    parentElement.insertBefore(ensButton, targetDiv);

    ensButton.appendChild(createImage());
    ensButton.appendChild(createSpan(ensAddress));
  });

}
