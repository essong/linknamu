type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  // mailto: 같은 링크는 새 탭으로 열면 빈 탭만 남으므로 웹 주소만 새 탭으로 연다
  const isWebLink = url.startsWith("http");

  return (
    <a
      href={url}
      {...(isWebLink && { target: "_blank", rel: "noopener noreferrer" })}
      className="block w-full rounded-3xl border border-card-border bg-card px-6 py-4 text-center text-[15px] font-medium shadow-[0_4px_24px_-6px_var(--shadow)] backdrop-blur-md transition duration-300 hover:-translate-y-px hover:bg-card-hover hover:shadow-[0_8px_28px_-6px_var(--shadow)]"
    >
      {title}
    </a>
  );
}
