import StoreProvider from "@/providers/StoreProvider";
import "./globals.scss";
import StartupProvider from "@/providers/StartupProvider";
import RequestProvider from "@/providers/RequestProvider";
import ToastProvider from "@/providers/ToastProvider";

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
              <ToastProvider>
                {children}
              </ToastProvider>
            </RequestProvider>
          </StartupProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
