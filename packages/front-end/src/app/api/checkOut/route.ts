import { attestCheckout } from "@/services/eas";
import { JsonRpcProvider, Wallet } from "ethers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { address, hypercertID, hostRate } = await req.json();

  console.debug({ address, hypercertID, hostRate });

  try {
    const provider = new JsonRpcProvider("https://rpc.ankr.com/base_sepolia");
    const wallet = new Wallet(
      "e58aa0579165d19d30699c2572106d502aa5225c65023fcb0165acd3818b0268" as string,
      provider,
    );
    const attestationId = await attestCheckout(
      wallet,
      address,
      hypercertID,
      address,
      hostRate,
    );
    console.debug("Response:" + attestationId);
    return NextResponse.json({ receipt: attestationId });
  } catch (e) {
    console.debug("Error:", e);
    return NextResponse.error();
  }
}
