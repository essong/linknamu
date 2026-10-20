import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 보여 주기용 더미 데이터 — 나중에 실제 내용으로 교체
const profile = {
  name: "Choco",
  bio: "풀스택개발자 | 요즘은 경제와 AI 개발에 관심이 많아요",
  imageSrc: "/profile.jpg",
};

const links = [
  { title: "🐙 깃허브", url: "https://github.com/essong" },
  { title: "✍️ 블로그", url: "https://example.com" },
  { title: "💌 이메일", url: "mailto:scid0524@gmail.com" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-16 sm:py-24">
      <div className="flex w-full max-w-sm flex-col items-center">
        <Profile {...profile} />
        <ul className="mt-12 flex w-full flex-col gap-4 sm:gap-5">
          {links.map((link) => (
            <li key={link.title}>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
