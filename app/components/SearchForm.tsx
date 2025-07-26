import { Button } from "@/app/components/ui/button";
import { SearchIcon } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

type Params = {
  query: string | undefined;
};

export default function SearchForm({ query }: Params) {
  return (
    <Form
      id="search-form"
      action="/"
      scroll={false}
      className="max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5"
    >
      <input
        name="query"
        defaultValue=""
        className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <Button
          type="submit"
          className="size-[50px] rounded-full bg-black flex justify-center items-center text-white"
        >
          <SearchIcon className="size-5" />
        </Button>
      </div>
    </Form>
  );
}
