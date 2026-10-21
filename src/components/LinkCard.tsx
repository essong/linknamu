type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  // mailto: 같은 링크는 새 탭으로 열면 빈 탭만 남으므로 웹 주소만 새 탭으로 연다
  const isWebLink = url.startsWith("http");

  return (
    <a
      href={url}
      onClick={onClick}
      {...(isWebLink && { target: "_blank", rel: "noopener noreferrer" })}
      className="relative block w-full rounded-3xl border border-card-border bg-card px-16 py-4 text-center text-[15px] font-medium shadow-[0_4px_24px_-6px_var(--shadow)] backdrop-blur-md transition duration-300 hover:-translate-y-px hover:bg-card-hover hover:shadow-[0_8px_28px_-6px_var(--shadow)]"
    >
      {title}
      {/* 제목은 가운데 그대로 두고, 클릭 수만 오른쪽 끝에 작게 */}
      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-muted">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
