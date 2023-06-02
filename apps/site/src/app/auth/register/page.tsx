import Link from "next/link";
import appConfig from "../../../../app.config";

export const metadata = {
  title: `${appConfig.name}'s Reister `,
  description: appConfig.description,
}

export default function SignUp() {
  return (
    <p className="text-center">
      You already have an account? &nbsp;
      <Link href="/auth/login">
        <span className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
          Login
        </span>
      </Link>
    </p>
  );
}
