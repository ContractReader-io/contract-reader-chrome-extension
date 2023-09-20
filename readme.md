# ContractReader.io Chrome Extension

A simple Chrome extension that gets the smart contract address of a collection and adds a button to pages on Etherscan, OpenSea, or Blur that take you to the [ContractReader.io](https://contractreader.io) page for that token.

Due to the nature of Chrome Extensions being able to inject code into your browser, it's paramount that the extension be open source so you can be sure that everything is above board.

## Examples

Etherscan:

![](https://media.cleanshot.cloud/media/10690/UyyolOz2TKotbZLvu2cCi1oZcgC5VTNxWD8ENHQG.jpeg?Expires=1677567469&Signature=F6bZCsTt~KAb1YT7dwqpByYhTWJ1zdTv8vcWNvUvgI7BuqN9aQDb0I8m-QIlkClf4Vhl-UyxnkSS7mqjJ1u9kddLF32Qo-XRsv6uvlnoQyaiceFBPZqFcNUvWiHqQKV4jfAVaqucNXhEj8kYOFdE-NZPIJqis-Am2srveKBiU7-aMZOPj9QIv~EMZQIXTuikSvYRBFVJx3vZVM5gnwdmkUq45qK33pF0jQ8JBTVc1qvscPQxHCgT6F8OLtK~l0khcrP7qBtOcNYDqpFdzXHC07iy6y5gAwHzZAedXxBDFnQxuBJ8n6S0pLheWBd2s07JoCs2kgYYLAPndtBVdUTR-w__&Key-Pair-Id=K269JMAT9ZF4GZ)
![](https://media.cleanshot.cloud/media/10690/YBmVfzD8yvls2Y6b0NKN9AQqiDziAZh39zBL96Vd.jpeg?Expires=1677567476&Signature=TTjCopkUJG~HEXk4xsW4H-HUG8xynYjC0IemXnLpt9tlJJL1x5Ek3S3M92k1IlgqginGYqbcbZ0EBESJx5tR8MjYLubmFv3FM8eyAdvNBjd0cXvQOzXgCuP1RYu~h51vgnS~zfZcopTl9ZwEYWQYkzIif0DH4f-QV~KaCcMSvyRjKDggXA3EsJIN7z1O-TKvinex9nElmyk24BaQxYgMHP3EJ7VfPPhYqN14qtXoKVNBz7ZN0rj0Ba1iB3Dq8~kC9JdRFMEkMJnZEBgDzh2ey3vwxBXAUivkNCaMy3motvAOT0hzv~fonU1hSBldB2CvnZEuKPNlIQ4q4dDlRPuX-w__&Key-Pair-Id=K269JMAT9ZF4GZ)

OpenSea:

![](https://media.cleanshot.cloud/media/10690/EpBa8martdXB99vEIksbREDmiF5IRgkQPc9BgWTC.jpeg?Expires=1677567579&Signature=al~hbQy5LdiAUTUXOKTxD1onsjfLUi-wVUZoH2xAuDTcSumZqKmfbnT-XkMG78~CdD-uTxEp1lkorNK7n6Z2nltAORXhiEv8mmTux3JC3fNtkaaC-u6Nxcs9eytV9XqfbpiqnNdKAaEyd5xt53pbmg7mN7qQJyKENyAUe7TiUzY6EW0hTVD61e6EvHDN0FMxP8~SSXWCIjOkTtxzWPC~Npxtp8SRjtT-QUbrWTPlCqr1gHSk94zlxH1cnKGSCmnUdUUakMKMjdfuqxrvmYUG0aYFmmOi6YoizktANu~rxuDMGQEF2-D82XgptMt5fmEVPJ9JkS-lXW-dGCc8XMI5VA__&Key-Pair-Id=K269JMAT9ZF4GZ)

Blur:

![](https://media.cleanshot.cloud/media/10690/iCcreKu0Bj9MZP3heBliUhg21LXomowXSa7Xiz1I.jpeg?Expires=1677567501&Signature=elwo9POWQj0aRgNlpmcs9KFrd7ZidQLQ-NyejS0fAYNMDfv3oyYjBCztCTsp2A~pgjHK-zcTzVlY~iegAX7r0YzPjyfPhKs98Tmnp49Q4RtTF-FYY4w8uEmpulz8Pfe5c4b63fyoOngVa3RzSiAtGqrGMp0pwnwz~-12ESMJAaw1zYCQK3-Y7MgjBrHmDAp79EM~cvpcFOT21Vc3x4YAVm3skLGspjM9W4yT5gEGI-qFvoRzXg1vkAGewhEZDy8dDLJ-hDw0GWah8mkZnn7lrcL-F9c44UtHgYLF1ohoI2XectAiOdbFZXXVNioCHoLnAUvEQDKOe-K4HiLMqpMXCw__&Key-Pair-Id=K269JMAT9ZF4GZ)

---

## TODO

- [ ] Submit to Google Chrome Store (pending)

- [ ] Support for Brave and Firefox

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
* Run `yarn browserify src/index.js -o bundle.js` to generate a new `bundle.js` file
* Go to `chrome://extensions` in your browser and refresh the extension to get the latest changes

## Contributing Guide

* Pull requests and feedback are always welcome
* Code of conduct: Be Excellent To Each Other
