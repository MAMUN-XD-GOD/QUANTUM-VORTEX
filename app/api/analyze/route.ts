import { NextResponse } from "next/server";
import { engineRouter } from "@/lib/engineRouter";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image } = body;

    const result = engineRouter({ image });

    return NextResponse.json({
      status: "ok",
      ...result
    });

  } catch (e: any) {
    return NextResponse.json({
      status: "error",
      message: e.message
    });
  }
        }
