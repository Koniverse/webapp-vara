import { init } from '@subwallet-connect/react';
import walletConnectPolkadotModule from '@subwallet-connect/walletconnect-polkadot';
import talismanModule from '@subwallet-connect/talisman';
import polkadot_jsModule from '@subwallet-connect/polkadot-js';
import subwalletPolkadotModule from '@subwallet-connect/subwallet-polkadot';
import icons from '@static/icons'
import { SubstrateProvider } from "@subwallet-connect/common";
import type { Signer, SignerPayloadJSON, SignerResult } from '@polkadot/types/types';
import { RequestArguments } from '@store/consts/types.ts'
import { GearApi } from '@gear-js/api'

const walletConnectPolkadot = walletConnectPolkadotModule({
  projectId: '59b5826141a56b204e9e0a3f7e46641d',
  dappUrl: 'http://dex-vara.kael.asia/'
})
const polkadotWallet = polkadot_jsModule();
const subwalletPolkadotWalet = subwalletPolkadotModule();
const talismanWallet = talismanModule();

const subWalletWCIds = '9ce87712b99b3eb57396cc8621db8900ac983c712236f48fb70ad28760be3f6a';

export default init({
  theme: "dark",
  connect : {
    autoConnectLastWallet : true,
    autoConnectAllPreviousWallet : true
  },
  accountCenter: {
    desktop : {
      enabled: false,
    },
    mobile: {
      enabled: false
    }
  },
  wcConfigOption: {
    projectId: '59b5826141a56b204e9e0a3f7e46641d',
    explorerRecommendedWalletIds: [subWalletWCIds]
  },

  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [
    subwalletPolkadotWalet,
    walletConnectPolkadot,
    talismanWallet,
    polkadotWallet
  ],

  chains: [],
  // An array of Chains that your app supports
  chainsPolkadot:[
    {
      id: '0xfe1b4c55fd4d668101126434206571a7838a8b6b93a6d1b95d607e78e6c53763' ,
      token: 'VARA',
      decimal : 12,
      label: 'Vara Network',
      blockExplorerUrl: 'vara.subscan.io',
      namespace: 'substrate'
    },
    {
      id: '0x525639f713f397dcf839bd022cd821f367ebcf179de7b9253531f8adbe5436d6',
      namespace: 'substrate',
      token: 'TVARA',
      label: 'Vara Network Testnet',
      blockExplorerUrl: `vara.subscan.io`,
      decimal: 12
    }
  ],

  appMetadata: {
    // The name of your dApp
    name: 'SubConnect',
    icon: icons.SubWalletConnectorIcon,
    logo: icons.SubWalletLogo,
    description: 'Demo app for SubWalletConnect V2',
    // The url to a getting started guide for app
    gettingStartedGuide: 'http://mydapp.io/getting-started',
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        name: 'SubWallet',
        url: 'https://www.subwallet.app'
      },
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://docs.subwallet.app/main/privacy-and-security/terms-of-use',
    }
  }
})


export async function getWCSigner (senderAddress: string, provider: SubstrateProvider, api: GearApi) : Promise<Signer > {
  if(!api) return {} ;

  return {
    signPayload : async (payload: SignerPayloadJSON): Promise<SignerResult>  => {
      const args = {} as RequestArguments;

      args.method = 'polkadot_signTransaction';
      args.params = {
        address: senderAddress,
        transactionPayload: payload
      };

      const { signature }  = (await provider.request(args)) as Pick<SignerResult, 'signature'>;
      return { id: 0, signature };
    }
  }
}


