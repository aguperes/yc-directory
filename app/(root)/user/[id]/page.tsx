import { auth } from "@/auth";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import UserStartups from "@/components/UserStartups";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function User({ params }: Params) {
  const { id } = await params;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-[24px] font-black uppercase text-center line-clamp-1">
              {user.name}
            </h3>
          </div>
          <Image
            src={user.image}
            alt={user.image}
            height={220}
            width={220}
            className="profile_image"
          />
          <p className="text-[30px] text-white font-extrabold text-center mt-7">
            @{user?.username}
          </p>
          <p className="mt-1 text-center text-white text-[16px] font-normal">
            {user?.bio}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 xl:-mt-5 ">
          <p className="text-[30px] font-bold">
            {session?.id === id ? "Your" : "All"}
          </p>
          <ul className="card_grid-sm">
            <UserStartups id={id} />
          </ul>
        </div>
      </section>
    </>
  );
}
