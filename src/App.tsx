import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from "./components/Airdrop";

function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <div className="lg:px-44 md:px-20">
        <div className="relative min-h-screen sm:border-l sm:border-r border-neutral-800 py-2 px-2 md:py-4 md:px-4 lg:py-8 lg:px-8">
          <ConnectionProvider
            endpoint={
              "https://solana-devnet.g.alchemy.com/v2/tlv2QFFNvRh8kBN0QY6W4"
            }
          >
            <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <WalletMultiButton />
                <WalletDisconnectButton />
                <div>Main Page again</div>
                <Airdrop />
              </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
