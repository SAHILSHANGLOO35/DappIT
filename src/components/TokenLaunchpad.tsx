const TokenLaunchpad = () => {
  return (
    <div className="text-neutral-100 flex flex-col items-center gap-8">
      <div className="text-4xl">Solana Token Launchpad</div>
      <input
        type="text"
        className="border border-neutral-500/40 bg-neutral-500/20 outline-none px-4 w-64 py-2"
        placeholder="Token name"
      />
      <input
        type="text"
        className="border border-neutral-500/40 bg-neutral-500/20 outline-none px-4 w-64 py-2"
        placeholder="Token symbol"
      />
      <input
        type="text"
        className="border border-neutral-500/40 bg-neutral-500/20 outline-none px-4 w-64 py-2"
        placeholder="Image URL"
      />
      <input
        type="text"
        className="border border-neutral-500/40 bg-neutral-500/20 outline-none px-4 w-64 py-2"
        placeholder="Enter amount"
      />
      <button className="bg-neutral-900 px-4 py-2 rounded-sm cursor-pointer hover:bg-neutral-500/50 transition-all duration-200">
        Create Token
      </button>
    </div>
  );
};

export default TokenLaunchpad;
