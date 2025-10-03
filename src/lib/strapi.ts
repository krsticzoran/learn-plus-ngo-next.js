const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_URL || !STRAPI_TOKEN) {
  throw new Error("Missing Strapi environment variables");
}

type StrapiResponse<T, M = unknown> = {
  data: T[];
  meta?: M;
};

export async function fetchFromStrapi<T>(path: string): Promise<T[]> {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    //cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.statusText}`);
  }

  const json: StrapiResponse<T> = await res.json();

  return json.data;
}
