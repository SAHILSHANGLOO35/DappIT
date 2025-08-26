import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance() {
  const [balance, setBalance] = useState<any>("");
  const wallet = useWallet();
  const { connection } = useConnection();

  const getSolBalance = async () => {
    if (!wallet.publicKey) return alert("No wallet detected");
    const currentBalance = await connection.getBalance(
      wallet.publicKey,
      "confirmed"
    );
    setBalance(currentBalance);
  };

  return (
    <div className="flex flex-col items-center justify-cente gap-8">
      <button
        className="px-4 py-1 bg-blue-600 rounded-sm cursor-pointer hover:bg-blue-800 transition-colors duration-200"
        onClick={getSolBalance}
      >
        Show Balance
      </button>
      <div className="border border-neutral-800 px-4 py-1 rounded-sm">
        Current Balance - {balance / LAMPORTS_PER_SOL} SOL
      </div>
    </div>
  );
}
