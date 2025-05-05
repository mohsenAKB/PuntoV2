import StoreProvider from "@/providers/StoreProvider";
import "./globals.scss";
import StartupProvider from "@/providers/StartupProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <StoreProvider>
          <StartupProvider>{children}</StartupProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
