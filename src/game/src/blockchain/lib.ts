import { ethers } from 'ethers'
import { CONST, TankToken } from '../const/const'
const oasistanksAbi = require('./abi/Oasistanks.json')

declare var window: any
let provider: ethers.providers.Web3Provider
let signer: ethers.providers.JsonRpcSigner
let address: string
let contractWithSigner: ethers.Contract

export const connectWallet = async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum)

  await provider.send('eth_requestAccounts', [])

  window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0xa515',
        rpcUrls: ['https://testnet.emerald.oasis.dev'],
        chainName: 'Oasis Testnet',
        nativeCurrency: {
          name: 'TEST',
          symbol: 'TEST',
          decimals: 18,
        },
        blockExplorerUrls: ['https://testnet.explorer.emerald.oasis.dev'],
      },
    ],
  })

  signer = provider.getSigner()
  address = await signer.getAddress()

  const contract = new ethers.Contract(CONST.OASISTANKS_CONTRACT, oasistanksAbi, provider)
  contractWithSigner = contract.connect(signer)

  console.log(address)
}

export const getTanks = async () => {
  const tankId1 = await contractWithSigner.tokenOfOwnerByIndex(address, 1)
  const tankId2 = await contractWithSigner.tokenOfOwnerByIndex(address, 2)
  const tankId3 = await contractWithSigner.tokenOfOwnerByIndex(address, 3)
  const tankId4 = await contractWithSigner.tokenOfOwnerByIndex(address, 4)

  const tankCode1 = await contractWithSigner._tokenToTankCode(tankId1)
  const tankCode2 = await contractWithSigner._tokenToTankCode(tankId2)
  const tankCode3 = await contractWithSigner._tokenToTankCode(tankId3)
  const tankCode4 = await contractWithSigner._tokenToTankCode(tankId4)

  CONST.USER_TANKS = [
    {
      tokenId: tankId1,
      tankCode: tankCode1,
    },
    {
      tokenId: tankId2,
      tankCode: tankCode2,
    },
    {
      tokenId: tankId3,
      tankCode: tankCode3,
    },
    {
      tokenId: tankId4,
      tankCode: tankCode4,
    },
  ]
  console.log(CONST.USER_TANKS)
}

export const mintTank = async () => {
  const tx = await contractWithSigner.mintTank(address)
  const confirmation = await provider.getTransactionReceipt(tx.hash);
  console.log(confirmation)
}

export const upgradeTank = async (tank: TankToken) => {
  const tx = await contractWithSigner.upgradeTank(tank.tokenId, tank.tankCode)
  const confirmation = await provider.getTransactionReceipt(tx.hash);
  console.log(confirmation)
}