import { ThemeProvider } from '@pm/ui';

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="dark h-full" dir="ltr">
        <div className="dark:bg-black flex h-full">
         <div className="dark:bg-black bg-black flex min-h-screen flex-col items-center justify-between h-full w-full">
           <main>{children}</main>
         </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
