import { useConnection, useWallet } from "@solana/wallet-adapter-react";
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
        Number(airdropAmount) * 1000000000
      );
    } catch (err) {
      console.error("Airdrop failed:", err);
    }
  }

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={airdropAmount}
        onChange={(e) => setAirdropAmount(e.target.value)}
        placeholder="Enter Amount"
        className="border border-neutral-800 px-4 py-1 rounded-sm outline-none"
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
