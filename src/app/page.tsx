import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links } from "@/lib/links";

const profile = {
  name: "Choco",
  bio: "풀스택개발자 | 요즘은 경제와 AI 개발에 관심이 많아요",
  imageSrc: "/profile.jpg",
};

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-16 sm:py-24">
      <div className="flex w-full max-w-sm flex-col items-center">
        <Profile {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
