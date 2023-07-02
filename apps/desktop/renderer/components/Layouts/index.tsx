import { ThemeProvider } from '@pm/ui';

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <main>{children}</main>
    </ThemeProvider>
  );
}
