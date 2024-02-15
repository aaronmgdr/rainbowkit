import { isAndroid } from '../../../utils/isMobile'
import { DefaultWalletOptions, Wallet } from '../../Wallet'
import { getWalletConnectConnector } from '../../getWalletConnectConnector'

export type ValoraWalletOptions = DefaultWalletOptions;

export const Valora = ({
  projectId,
  walletConnectParameters,
}: ValoraWalletOptions): Wallet => ({
  id: "valora",
  name: "Valora",
  iconUrl:
    "https://registry.walletconnect.com/api/v1/logo/md/d01c7758d741b363e637a817a09bcf579feae4db9f5bb16f599fdd1f66e2f974",
  iconBackground: "#FFF",
  downloadUrls: {
    android: "https://play.google.com/store/apps/details?id=co.clabs.valora",
    ios: "https://apps.apple.com/app/id1520414263?mt=8",
    qrCode: "https://valoraapp.com/",
  },
  mobile: {
    getUri: (uri: string) => {
      return isAndroid()
        ? uri
        : `celo://wallet/wc?uri=${encodeURIComponent(uri)}`
    },
  },
  qrCode: {
    getUri: (uri: string) => uri,
    instructions: {
      learnMoreUrl: "https://valoraapp.com/learn",
      steps: [
        {
          description:
            "The crypto wallet to buy, send, spend, earn, and collect NFTs on the Celo blockchain.",
          step: "install",
          title: "Open the Valora app",
        },
        {
          description:
            "After you scan, a connection prompt will appear for you to connect your wallet.",
          step: "scan",
          title: "Tap the scan button",
        },
      ],
    },
  },
  createConnector: getWalletConnectConnector({
    projectId,
    walletConnectParameters,
  }),
})
