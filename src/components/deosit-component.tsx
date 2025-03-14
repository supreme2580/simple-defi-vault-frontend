import StarknetIcon from "./icons/starknet-icon";

export default function DepositComponent() {
    return(
        <div className="w-full h-[620px] rounded-3xl border-2 border-[#1E1E1E] p-6">
            <div className="space-y-5 h-full">
                <div className="w-full h-fit rounded-3xl bg-[#171717] border-2 border-[#1E1E1E] p-6">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="text-white text-lg">Deposit</h4>
                        <h4 className="text-white/50 text-lg">Balance: 700000 STRK</h4>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-1.5">
                        <input placeholder="0" className="outline-0 ring-0 placeholder:text-3xl text-3xl pt-1.5 flex-1 text-white" type="number" />
                        <div className="flex flex-row items-center justify-center space-x-1">
                            <StarknetIcon />
                            <h4 className="text-2xl text-white">STRK</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit rounded-3xl bg-transparent border-2 border-[#1E1E1E] p-6">
                    <div className="flex flex-row items-start justify-between">
                        <h4 className="text-white text-lg">Receive</h4>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-1.5">
                        <h4 className="text-3xl text-white">-</h4>
                        <div className="flex flex-row items-center justify-center space-x-1">
                            <StarknetIcon />
                            <h4 className="text-2xl text-white">xSTRK</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full h-70 rounded-3xl bg-[#171717] border-2 border-[#1E1E1E] p-6">
                    <div className="flex flex-col h-full w-full">
                        <div className="w-full h-full space-y-5">
                            <h4 className="text-white text-lg">Stats</h4>
                            <div className="w-full h-0.5 bg-[#1E1E1E]" />
                        </div>
                        <div className="space-y-1.5 h-[400px]">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-white/50 text-lg">Yield</h4>
                                <h4 className="text-white text-lg">15.6%</h4>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-white/50 text-lg">Total Amount</h4>
                                <h4 className="text-white text-lg">12,495 STRK</h4>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-white/50 text-lg">Total Locked</h4>
                                <h4 className="text-white text-lg">104,564,959.45 STRK</h4>
                            </div>
                        </div>
                        <button className="w-full py-3 bg-[#503EE5] text-white border-0 rounded-xl hover:cursor-pointer">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}