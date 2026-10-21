import { NextResponse } from "next/server";
import { links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

// 요청마다 최신 값을 읽도록 캐시하지 않는다
export const dynamic = "force-dynamic";

const linkIds = links.map((link) => link.id);

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 돌려준다
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: linkIds } }).toArray();

    const counts: Record<string, number> = {};
    for (const id of linkIds) counts[id] = 0;
    for (const doc of docs) counts[doc._id] = doc.count;

    return NextResponse.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다" }, { status: 500 });
  }
}

// { id } 링크의 클릭 수를 1 늘린다. sendBeacon으로도 보낼 수 있게 본문을 직접 파싱한다
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = JSON.parse(await request.text()));
  } catch {
    return NextResponse.json({ error: "잘못된 요청 본문" }, { status: 400 });
  }

  // 페이지에 있는 링크만 집계해 임의의 키가 DB에 쌓이지 않게 한다
  if (typeof id !== "string" || !linkIds.includes(id)) {
    return NextResponse.json({ error: "알 수 없는 링크" }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다" }, { status: 500 });
  }
}
