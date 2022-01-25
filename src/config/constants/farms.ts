import { ChainId } from '@astroswap/sdk'

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

export const ADA_ASTRO_LP_PID = chainId === MAINNET ? 1 : 1
export const ADA_USDT_LP_PID = chainId === MAINNET ? 5 : 3

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
        {
          pid: 0,
          lpSymbol: 'ASTRO',
          lpAddresses: {
            111: '0xb830d8213e2c3dD621037703D05A5e594387B6Be',
            106: '0xaBf26902Fd7B624e0db40D31171eA9ddDf078351',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          lpSymbol: 'ADA_Astro LP',
          lpAddresses: {
            111: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
            106: '0x33f879690C165cC320B0BA04cEb1F9CeaC80F376',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
        // {
        //   pid: 2,
        //   lpSymbol: 'ADA_ETH LP',
        //   lpAddresses: {
        //     111: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
        //     106: '0x7c3F1eA99770aa23Fe1b19097c93BB0cF34C8351',
        //   },
        //   token: serializedTokens.weth,
        //   quoteToken: serializedTokens.wvlx,
        // },
        // {
        //   pid: 3,
        //   lpSymbol: 'ADA_BUSD LP',
        //   lpAddresses: {
        //     111: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
        //     106: '0x8e2B762Bee3E2bf2C8fB0cdd04274042748D6C23',
        //   },
        //   token: serializedTokens.busd,
        //   quoteToken: serializedTokens.wvlx,
        // },
        // {
        //   pid: 4,
        //   lpSymbol: 'ADA_USDC LP',
        //   lpAddresses: {
        //     111: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
        //     106: '0x757Ac3cDFfa84b67dFC58c5880Aa8037ef5a23d5',
        //   },
        //   token: serializedTokens.usdc,
        //   quoteToken: serializedTokens.wvlx,
        // },
        {
          pid: 5,
          lpSymbol: 'ADA_USDT LP',
          lpAddresses: {
            111: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
            106: '0x7F3cB73FC470c2c9F543FdD17dF4De0e97b51A97',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wvlx,
        },
      ]
    : [
        /**
         * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
         */
        {
          pid: 0,
          lpSymbol: 'Astro',
          lpAddresses: {
            111: '0x73E199C7AED3485B74e5A63f3A204407CE44A825',
            106: '',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          lpSymbol: 'ADA_ASTRO LP',
          lpAddresses: {
            111: '0xF8A8dA66e3D7A7e696464A50061BbEe1A3cf9e6b',
            106: '',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.ada,
        },
        // {
        //   pid: 2,
        //   lpSymbol: 'ADA_ETH LP',
        //   lpAddresses: {
        //     111: '0x8aa6D06723eAc62DCEf1d61573d78A4fB4008cc8',
        //     106: '',
        //   },
        //   token: serializedTokens.weth,
        //   quoteToken: serializedTokens.ada,
        // },
        {
          pid: 3,
          lpSymbol: 'ADA_USDT LP',
          lpAddresses: {
            111: '0xbA1AF83C0FC66F5Cdd17AFC0Cc8B077c3820D934',
            106: '',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.ada,
        },
        // {
        //   pid: 4,
        //   lpSymbol: 'ADA_USDC LP',
        //   lpAddresses: {
        //     111: '0x3b9F1b0F3aCE0181269E53A7aA10d218e81a29d7',
        //     106: '',
        //   },
        //   token: serializedTokens.usdc,
        //   quoteToken: serializedTokens.ada,
        // },
        // {
        //   pid: 5,
        //   lpSymbol: 'ADA_BUSD LP',
        //   lpAddresses: {
        //     111: '0xDCa7E16a316D6283B970fd0E50E6Ae8c0B852B51',
        //     106: '',
        //   },
        //   token: serializedTokens.busd,
        //   quoteToken: serializedTokens.ada,
        // },
      ]

export default farms
