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
        className="h-36 w-36 rounded-full border-2 border-foreground object-cover"
        priority
      />
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-base opacity-70">{bio}</p>
    </section>
  );
}
