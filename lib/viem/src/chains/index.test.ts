import { expect, test } from 'vitest'

import * as chains from './index.js'

test('exports chains', () => {
  expect(Object.keys(chains)).toMatchInlineSnapshot(`
    [
      "arbitrum",
      "arbitrumGoerli",
      "arbitrumNova",
      "aurora",
      "auroraTestnet",
      "avalanche",
      "avalancheFuji",
      "base",
      "baseGoerli",
      "bearNetworkChainMainnet",
      "bearNetworkChainTestnet",
      "boba",
      "bronos",
      "bronosTestnet",
      "bsc",
      "bscTestnet",
      "bxn",
      "bxnTestnet",
      "canto",
      "celo",
      "celoAlfajores",
      "celoCannoli",
      "classic",
      "confluxESpace",
      "cronos",
      "cronosTestnet",
      "crossbell",
      "dfk",
      "dogechain",
      "edgeware",
      "edgewareTestnet",
      "eos",
      "eosTestnet",
      "evmos",
      "evmosTestnet",
      "ekta",
      "ektaTestnet",
      "fantom",
      "fantomTestnet",
      "fibo",
      "filecoin",
      "filecoinCalibration",
      "filecoinHyperspace",
      "flare",
      "flareTestnet",
      "foundry",
      "fuse",
      "fuseSparknet",
      "iotex",
      "iotexTestnet",
      "gobi",
      "goerli",
      "gnosis",
      "gnosisChiado",
      "hardhat",
      "harmonyOne",
      "haqqMainnet",
      "haqqTestedge2",
      "holesky",
      "klaytn",
      "kroma",
      "kromaSepolia",
      "linea",
      "lineaTestnet",
      "localhost",
      "mainnet",
      "mantle",
      "mantleTestnet",
      "meter",
      "meterTestnet",
      "metis",
      "metisGoerli",
      "mev",
      "mevTestnet",
      "modeTestnet",
      "moonbaseAlpha",
      "moonbeam",
      "moonriver",
      "neonDevnet",
      "nexi",
      "nexilix",
      "oasys",
      "okc",
      "optimism",
      "optimismGoerli",
      "optimismSepolia",
      "opBNB",
      "opBNBTestnet",
      "plinga",
      "polygon",
      "polygonMumbai",
      "polygonZkEvmTestnet",
      "polygonZkEvm",
      "pulsechain",
      "pulsechainV4",
      "qMainnet",
      "qTestnet",
      "rollux",
      "rolluxTestnet",
      "ronin",
      "saigon",
      "scrollSepolia",
      "scrollTestnet",
      "sepolia",
      "skaleBlockBrawlers",
      "skaleCalypso",
      "skaleCalypsoTestnet",
      "skaleChaosTestnet",
      "skaleCryptoBlades",
      "skaleCryptoColosseum",
      "skaleEuropa",
      "skaleEuropaTestnet",
      "skaleExorde",
      "skaleHumanProtocol",
      "skaleNebula",
      "skaleNebulaTestnet",
      "skaleRazor",
      "skaleTitan",
      "skaleTitanTestnet",
      "songbird",
      "songbirdTestnet",
      "shardeumSphinx",
      "syscoin",
      "syscoinTestnet",
      "taraxa",
      "taikoJolnir",
      "taikoTestnetSepolia",
      "taraxaTestnet",
      "telos",
      "telosTestnet",
      "thunderTestnet",
      "vechain",
      "wanchain",
      "wanchainTestnet",
      "xdc",
      "xdcTestnet",
      "zhejiang",
      "zkSync",
      "zkSyncTestnet",
      "zetachainAthensTestnet",
      "zora",
      "zoraTestnet",
    ]
  `)
})
