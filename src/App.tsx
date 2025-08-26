import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from "./components/Airdrop";
import TokenLaunchpad from "./components/TokenLaunchpad";
import { ShowBalance } from "./components/ShowBalance";
import { SendToken } from "./components/SendToken";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="lg:px-44 md:px-20">
        <div className="relative min-h-screen sm:border-l sm:border-r border-neutral-800 py-2 px-2 md:py-4 md:px-4 lg:py-8 lg:px-8">
          <ConnectionProvider
            endpoint={
              "https://solana-devnet.g.alchemy.com/v2/tlv2QFFNvRh8kBN0QY6W4"
            }
          >
            <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div className="flex items-center justify-between w-full mb-10">
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                </div>
                <div className="flex flex-col gap-20">
                  <TokenLaunchpad />
                  <Airdrop />
                  <ShowBalance />
                  <SendToken />
                </div>
              </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
