import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

type SearchParamsType = {
  searchParams: Promise<{ query: string | undefined }>;
};

export default async function Home({ searchParams }: SearchParamsType) {
  const { query } = await searchParams;

  const posts = [
    {
      _createdAt: "12-13-2021",
      views: 55,
      author: {
        _id: 1,
        name: "Agustin",
      },
      _id: 1,
      description: "This is a description.",
      image:
        "https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6;">
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
            posts.map((post) => <StartupCard key={post._id} post={post} />)
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
