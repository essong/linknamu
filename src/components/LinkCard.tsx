type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border-2 border-foreground px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
    >
      {title}
    </a>
  );
}
