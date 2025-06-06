import { useConnectWallet } from '@subwallet-connect/react'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions as walletActions } from '@store/reducers/wallet'
import { actions as snackbarsActions } from '@store/reducers/snackbars.ts'
import { hexAddress } from '@store/selectors/wallet.ts'
import { decodeAddress } from '@gear-js/api'


export default function useWalletConnection() {
  const [{ wallet, connecting }, connect, disconnect ] = useConnectWallet();
  const dispatch = useDispatch();
  const walletAddress = useSelector(hexAddress)

  useEffect(() => {
    if (wallet && walletAddress !== decodeAddress(wallet.accounts[0].address)) {
      dispatch(walletActions.connect({ wallet: wallet }));
    }
  }, [wallet, walletAddress])


  const connectWallet = useCallback( async () => {
      try {
         const newWallet = (await connect())[0];

        if (!newWallet) {
          throw new Error('Cannot connect to wallet');
        }

        dispatch(walletActions.connect({ wallet: newWallet }));
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'Unknown error';

        dispatch(
          snackbarsActions.add({
            message: errorMessage,
            variant: 'error',
            persist: false
          })
        )
      }
  }, [connect, dispatch, wallet]);

  const disconnectWallet = useCallback(async () => {
    if (wallet) {
      try {
        await disconnect({ label: wallet.label, type: wallet.type });
        dispatch(walletActions.disconnect());
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'Unknown error';

        dispatch(
          snackbarsActions.add({
            message: errorMessage,
            variant: 'error',
            persist: false
          })
        )
      }
    }
  }, [disconnect, dispatch, wallet]);

  const reconnectWallet = useCallback(async () => {
    await disconnectWallet();
    await connectWallet();
  }, [disconnectWallet, connectWallet]);


  return {
    wallet,
    connecting,
    connectWallet,
    disconnectWallet,
    reconnectWallet
  };
}
