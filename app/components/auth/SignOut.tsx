import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button className="cursor-pointer" type="submit">
        Logout
      </button>
    </form>
  );
}
