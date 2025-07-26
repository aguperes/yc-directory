import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export type StartupCardType = {
  _createdAt: string;
  views: number;
  author: {
    _id: number;
    name: string;
  };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
};

export default function StartupCard({ post }: { post: StartupCardType }) {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;
  return (
    <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
          {formatDate(_createdAt)}
        </p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-[16px] font-medium">{views}</span>
        </div>
      </div>

      <div className="flex justify-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author._id}`}>
            <p className="text-[16px] font-medium line-clamp-1">
              {author.name}
            </p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <h3 className="text-[26px] font-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">
          {description}
        </p>

        <img
          src={image}
          alt="placeholder"
          className="w-full h-[164px] rounded-[10px] object-cover"
        />
      </Link>

      <div className="flex justify-between gap-3 mt-5">
        <Link href={`/?query=${category.toLocaleLowerCase()}`}>
          <p className="text-[16px] font-medium">{category}</p>
        </Link>
        <Button
          className="rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3"
          asChild
        >
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}
