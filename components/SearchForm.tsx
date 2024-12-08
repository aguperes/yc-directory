import Form from "next/form"
import SearchFormReset from "./SearchFormReset"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">{query && <SearchFormReset />}</div>
      <Button className="search-btn text-white">
        <Search className="size-5" />
      </Button>
    </Form>
  )
}
