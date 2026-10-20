import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 보여 주기용 더미 데이터 — 나중에 실제 내용으로 교체
const profile = {
  name: "김파라",
  bio: "세계 최강 바이브코더",
  imageSrc: "/profile.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-4 py-12 sm:py-16">
      <div className="flex w-full max-w-md flex-col items-center">
        <Profile {...profile} />
        <ul className="mt-16 flex w-full flex-col gap-6">
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
