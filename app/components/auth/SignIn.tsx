import { signIn } from "@/auth"

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className="cursor-pointer" type="submit">Login</button>
    </form>
  )
}