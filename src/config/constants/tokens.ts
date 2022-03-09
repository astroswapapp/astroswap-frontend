import { ChainId, Token } from '@astroswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'
import addresses from './addresses.json'

const { MAINNET, TESTNET } = ChainId

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wvlx: new Token(MAINNET, addresses[106].WVLX, 18, 'WVLX', 'Wrapped VLX', 'https://www.astroswap.app/'),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  vlx: new Token(MAINNET, addresses[106].WVLX, 18, 'VLX', 'VLX', 'https://www.astroswap.app/'),
  ada: new Token(MAINNET, addresses[106].AdaToken, 6, 'ADA', 'Cardano', 'https://www.cardano.org/'),
  cake: new Token(MAINNET, addresses[106].AstroToken, 18, 'ASTRO', 'AstroToken', 'https://www.astroswap.app/'),
  busd: new Token(
    MAINNET,
    '0xc111c29a988ae0c0087d97b33c6e6766808a3bd3',
    18,
    'BUSD',
    'Multichain BUSD',
    'https://www.astroswap.app/',
  ),
  wag: new Token(
    MAINNET,
    '0xabf26902fd7b624e0db40d31171ea9dddf078351',
    18,
    'WAG',
    'WAGToken',
    'https://www.wagyuswap.app/',
  ),
  adapad: new Token(
    MAINNET,
    '0xdb0170e2d0c1cc1b2e7a90313d9b9afa4f250289',
    18,
    'ADAPAD',
    'ADAPad',
    'https://adapad.io/',
  ),
  dana: new Token(MAINNET, '0x87d506b45d3398a49f95d0e4b26f645dc74fe105', 6, 'DANA', 'Ardana', 'https://ardana.org/'),
  revu: new Token(
    MAINNET,
    '0x78fec264679c07aa1302af240fcb0c76db6e3a1c',
    6,
    'REVU',
    'Revuto',
    'https://crypto.revuto.com/',
  ),
  meld: new Token(MAINNET, '0xa5dcd54e78431f912d39e45174de23cde3842795', 6, 'MELD', 'MELD', 'https://meld.com/'),
  lq: new Token(
    MAINNET,
    '0x07bfb2da0f5204f1a9e48f0d7dc0442ec953e318',
    6,
    'LQ',
    'Liqwid Finance',
    'https://www.liqwid.finance/',
  ),
  xray: new Token(
    MAINNET,
    '0x438ec6bdf9909131b3bf5243429572fb9d0354a7',
    6,
    'XRAY',
    'Ray Network',
    'https://raynetwork.io/',
  ),
  pavia: new Token(MAINNET, '0x3ed96aaaba90d2e4642a917d65613784124b5793', 6, 'PAVIA', 'Pavia', 'https://www.pavia.io/'),
  vyfi: new Token(
    MAINNET,
    '0xc4b2aa12383e7a2fcc5fda9b7c5257c20b20cdd6',
    6,
    'VYFI',
    'VyFinance',
    'https://www.vyfi.io/',
  ),
  aada: new Token(
    MAINNET,
    '0x478bcae58d38a1fde507eab3ff2251b60e53863a',
    6,
    'AADA',
    'AADA Finance',
    'https://aada.finance/',
  ),
  clap: new Token(
    MAINNET,
    '0x253540b0fa37d2fc25e348672e09cbf395832438',
    6,
    'CLAP',
    'Cardashift',
    'https://cardashift.com/',
  ),
  adax: new Token(MAINNET, '0xd579b8b50200739ddd74e9255a75de6f4716d14d', 6, 'ADAX', 'ADAX', 'https://adax.pro/'),
  syrup: new Token(
    MAINNET,
    addresses[106].AstroStake,
    18,
    'AstroStake',
    'AstroStake Token',
    'https://www.astroswap.app/',
  ),
}

export const testnetTokens = {
  wvlx: new Token(TESTNET, addresses[111].WVLX, 18, 'WVLX', 'Wrapped VLX', 'https://www.astroswap.app/'),
  ada: new Token(TESTNET, addresses[111].AdaToken, 18, 'ADA', 'Cardano', 'https://www.cardano.org/'),
  cake: new Token(TESTNET, addresses[111].AstroToken, 18, 'ASTRO', 'AstroToken', 'https://www.astroswap.app/'),
  syrup: new Token(
    TESTNET,
    addresses[111].AstroStake,
    18,
    'AstroStake',
    'AstroStake Token',
    'https://www.astroswap.app/',
  ),
  busd: new Token(
    TESTNET,
    '0xe2172a8E1762ae9962A59EE88a731522A61a4cc9',
    18,
    'BUSD',
    'Velas BUSD',
    'https://www.astroswap.app/',
  ),
}

const tokens = (): TokenList => {
  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (chainId === ChainId.TESTNET) {
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {})

    return Object.keys(testnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
