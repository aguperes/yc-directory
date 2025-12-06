import { client } from "@/sanity/lib/client";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { auth } from "@/auth";

type SearchParamsType = {
  searchParams: Promise<{ query: string | undefined }>;
};

export default async function Home({ searchParams }: SearchParamsType) {
  const { query } = await searchParams;
  const params = { search: query || null };

  const session = await auth();
  console.log(session?.id);

  const posts = await client.fetch(STARTUPS_QUERY, params);

  return (
    <>
      <section className="pink_container">
        <h1 className="text-3xl uppercase bg-black px-6 pt-3 text-white font-work-sans font-extrabold sm:[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch your startup
          <br /> Connect with entrepreneurs
        </h1>

        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query ? `Search results for: ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-black-100 text-sm font-normal">
              No Startups Found
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
