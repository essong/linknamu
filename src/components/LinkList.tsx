"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/lib/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 서버 응답 전에는 모두 0회로 보여 준다
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => setCounts(data))
      .catch((error) => console.error("클릭 수 조회 실패:", error));
  }, []);

  const handleClick = (id: string) => {
    // 화면에는 바로 +1 반영
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    // 링크로 이동하면서 요청이 취소되지 않도록 sendBeacon 사용
    const body = JSON.stringify({ id });
    if (!navigator.sendBeacon?.("/api/clicks", body)) {
      fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(
        () => {},
      );
    }
  };

  return (
    <ul className="mt-12 flex w-full flex-col gap-4 sm:gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
