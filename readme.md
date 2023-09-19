# ENS Names on Base Chrome Extension

A Chrome extension that adds the Mainnet ENS address of an Ethereum address on Basescan.org.

Due to the nature of Chrome Extensions being able to inject code into your browser, it's paramount that the extension be open source so you can be sure that everything is above board.

Brought to you by [ContractReader.io](https://contractreader.io), the best way to read and understand smart contracts (we support Base too!)

---

## TODO

- [ ] Submit to Google Chrome Store

- [ ] Get this working with Viem and remove Ethers

## User Installation

_We will be on the Google Chrome Extension Store soon but before we are, here's how you can install this right now_

1. Clone the repo or click the **Code** button and select "Download Zip"
2. Go to `chrome://extensions` in your browser
3. Enable developer mode (top right of your browser) if not already enabled
4. Click "Load unpacked extension" and choose the directory that holds this extension, wherever you cloned it on your machine
5. That's it!

## Developer Installation

* Clone the repo
* Yarn or npm install
* Go to `chrome://extensions` in your browser
* Enable developer mode (top right of your browser) if not already enabled
* Click "Load unpacked extension" and choose the directory that holds this extension, wherever you cloned it on your machine
* Make changes to `src/index.js`
* Run `npx webpack` to generate a new `bundle.js` file
* Go to `chrome://extensions` in your browser and refresh the extension to get the latest changes

## Contributing Guide

* Pull requests and feedback are always welcome
* Code of conduct: Be Excellent To Each Other
