import { signOutAction } from "@/components/auth/actions";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form action={signOutAction}>
      <button className="cursor-pointer" type="submit">
        <span className="max-sm:hidden">Logout</span>
        <LogOut className="size-6 mt-[5.5px] sm:hidden text-red-500" />
      </button>
    </form>
  );
}
