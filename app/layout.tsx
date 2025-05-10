import StoreProvider from "@/providers/StoreProvider";
import "./globals.scss";
import StartupProvider from "@/providers/StartupProvider";
import RequestProvider from "@/providers/RequestProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <StoreProvider>
          <StartupProvider>
            <RequestProvider>
              {children}
            </RequestProvider>
          </StartupProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
