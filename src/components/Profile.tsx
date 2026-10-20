import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function Profile({ name, bio, imageSrc }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        className="h-28 w-28 rounded-full object-cover shadow-[0_12px_32px_-8px_var(--shadow)] ring-4 ring-card-border sm:h-32 sm:w-32"
        priority
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-balance text-[15px] leading-relaxed text-muted">
        {bio}
      </p>
    </section>
  );
}
