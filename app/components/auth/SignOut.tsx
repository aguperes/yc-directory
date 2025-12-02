import { signOutAction } from "@/app/components/auth/actions";

export function SignOut() {
  return (
    <form action={signOutAction}>
      <button className="cursor-pointer" type="submit">
        Logout
      </button>
    </form>
  );
}
