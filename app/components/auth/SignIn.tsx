import { signInAction } from "@/app/components/auth/actions";

export function SignIn() {
  return (
    <form action={signInAction}>
      <button className="cursor-pointer" type="submit">
        Login
      </button>
    </form>
  );
}
