import { auth, signIn, signOut } from "@/auth"
import Link from "next/link"
import Image from "next/image"

export default async function Navbar() {
  const session = await auth()

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="YC logo" width={144} height={30}></Image>
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server"
                  await signOut({ redirectTo: "/" })
                }}
              >
                <button>Logout</button>
              </form>

              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server"
                await signIn("github")
              }}
            >
              <button>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}