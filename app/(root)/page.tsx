import { client } from "@/sanity/lib/client";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

type SearchParamsType = {
  searchParams: Promise<{ query: string | undefined }>;
};

export default async function Home({ searchParams }: SearchParamsType) {
  const { query } = await searchParams;
  const params = { search: query || null };

  const posts = await client.fetch(STARTUPS_QUERY, params);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup
          <br /> Connect with entrepreneurs
        </h1>

        <p className="sub-heading">
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
