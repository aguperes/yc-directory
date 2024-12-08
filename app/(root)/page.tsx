import SearchForm from "@/components/SearchForm"

type SearchParams = Promise<{ query?: string }>

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const query = searchParams.query

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup
          <br />
          Connect With Entrepreneurs
        </h1>
        <p className="subheading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  )
}
