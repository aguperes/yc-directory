import SearchForm from "../components/SearchForm";

export default async function Home() {
  return (
    <>
      <section className="w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6;">
        <h1 className="text-3xl uppercase bg-black px-6 pt-3 text-white font-work-sans font-extrabold sm:[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch your startup,
          <br /> Connect with entrepreneurs
        </h1>

        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm />
      </section>
    </>
  );
}
