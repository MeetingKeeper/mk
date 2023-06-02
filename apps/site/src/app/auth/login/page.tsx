import Link from "next/link";
import appConfig from "../../../../app.config";

export const metadata = {
  title: `${appConfig.name}'s Login `,
  description: appConfig.description,
}

export default function LoginPage() {
  return (
    <p className="text-center">
      Dont&apos;t have an account? &nbsp;
      <Link href="/auth/register">
        <span className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
          Sign Up
        </span>
      </Link>
    </p>
  );
}
