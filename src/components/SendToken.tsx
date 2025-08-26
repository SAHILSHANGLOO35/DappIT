import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  PublicKey,
} from "@solana/web3.js";
import { useState } from "react";

export function SendToken() {
  const [sendTo, setSendTo] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendToken() {
    const transaction = new Transaction();
    if (!wallet.publicKey) return "No wallet detected.";
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(sendTo),
        lamports: Number(tokenAmount) * LAMPORTS_PER_SOL,
      })
    );
    await wallet.sendTransaction(transaction, connection);
    setSendTo("");
    setTokenAmount("");
    alert(`Sent ${tokenAmount} SOL to ${sendTo}`);
  }

  return (
    <div className="text-neutral-100 flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="flex gap-8 items-center justify-center">
          <input
            type="text"
            value={sendTo}
            onChange={(e) => setSendTo(e.target.value)}
            placeholder="Send To"
            className="border border-neutral-500/40 bg-neutral-500/20 outline-none px-4 w-64 py-2"
          />
          <input
            type="text"
            value={tokenAmount}
            onChange={(e) => setTokenAmount(e.target.value)}
            placeholder="Enter Amount"
            className="border border-neutral-500/40 bg-neutral-500/20 outline-none px-4 w-64 py-2"
          />
        </div>
        <button
          className="px-4 py-1 bg-blue-600 rounded-sm cursor-pointer hover:bg-blue-800 transition-colors duration-200"
          onClick={sendToken}
        >
          Send Token
        </button>
      </div>
    </div>
  );
}
