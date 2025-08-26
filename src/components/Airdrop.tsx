import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function Airdrop() {
  const [airdropAmount, setAirdropAmount] = useState("");
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirDrop() {
    if (!wallet.publicKey) return alert("No wallet detected.");

    try {
      await connection.requestAirdrop(
        wallet.publicKey,
        Number(airdropAmount) * LAMPORTS_PER_SOL
      );
      setAirdropAmount("");
    } catch (err) {
      console.error("Airdrop failed:", err);
    }
  }

  return (
    <div className="text-neutral-100 flex flex-col items-center justify-center gap-8">
      <input
        type="text"
        value={airdropAmount}
        onChange={(e) => setAirdropAmount(e.target.value)}
        placeholder="Enter Amount"
        className="border border-neutral-500/40 bg-neutral-500/20 outline-none px-4 w-64 py-2"
      />
      <button
        className="px-4 py-1 bg-blue-600 rounded-sm cursor-pointer hover:bg-blue-800 transition-colors duration-200"
        onClick={sendAirDrop}
      >
        Send Airdrop
      </button>
    </div>
  );
}
