import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import markdownit from "markdown-it";

type Params = {
  params: Promise<{ id: string }>;
};

const md = markdownit();

export default async function Page({ params }: Params) {
  const { id } = await params;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <img
          src={post.image}
          alt="thumbnail"
          className="w-64 h-48 rounded-xl object-cover"
        />

        <div className="space-y-5 mt-10 mx-w-4xl mx-auto">
          <div className="flex justify-between items-center gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author?.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="font-medium text-[20px] text-black">
                  {post.author?.name}
                </p>
                <p className="font-medium text-[16px] text-black-300">
                  {post.author?.username}
                </p>
              </div>
            </Link>
            <p className="category-tag">{post.category}</p>
          </div>
          <h3 className="text-[30px] font-bold text-black">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl break-all font-sans"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        <hr className="border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto;" />
      </section>
    </>
  );
}
