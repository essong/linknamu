export type Link = {
  // 클릭 수를 저장할 때 쓰는 고유 키 — 바꾸면 기존 클릭 수와 연결이 끊긴다
  id: string;
  title: string;
  url: string;
};

export const links: Link[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/essong" },
  { id: "blog", title: "✍️ 블로그", url: "https://example.com" },
  { id: "email", title: "💌 이메일", url: "mailto:scid0524@gmail.com" },
];
