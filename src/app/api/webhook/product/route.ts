import { NextResponse } from "next/server";

interface WebhookEntry {
  id: number;
  name: string;
  [key: string]: unknown;
}

interface WebhookPayload {
  model: "ongoing-product" | "past-product";
  action: "create" | "update" | "delete";
  entry: WebhookEntry;
}

export async function POST(req: Request) {
  try {
    const payload: WebhookPayload = await req.json();

    const { model, action, entry } = payload;

    console.log("--- Webhook received ---");
    console.log("Collection:", model);
    console.log("Action:", action);
    console.log("Entry:", entry);
    console.log("-----------------------");

    // Obrada po kolekciji
    if (model === "ongoing-product") {
      // TODO: dodaj logiku za ongoing products
      console.log("Processing ongoing product...");
    } else if (model === "past-product") {
      // TODO: dodaj logiku za past products
      console.log("Processing past product...");
    }

    return NextResponse.json({ message: "Webhook received successfully" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
