import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

interface WebhookEntry {
  id: number;
  name: string;
  slug?: string;
  [key: string]: unknown;
}

interface WebhookPayload {
  model: string;
  action: "create" | "update" | "delete";
  entry: WebhookEntry;
}

export async function POST(req: Request) {
  try {
    const payload: WebhookPayload = await req.json();
    const { entry } = payload;

    console.log("--- Webhook received ---");
    console.log("Entry:", entry);
    console.log("-----------------------");

    revalidatePath("/erasmus");

    if (entry.slug) {
      revalidatePath(`/erasmus/${entry.slug}`);
      console.log(`Revalidated single page: /erasmus/${entry.slug}`);
    }

    return NextResponse.json({
      message: "Webhook received and revalidated successfully",
    });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
