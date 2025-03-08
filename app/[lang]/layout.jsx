import "../assets/scss/globals.scss";
import "../assets/scss/theme.scss";
import Providers from "@/provider/providers";
import "simplebar-react/dist/simplebar.min.css";
import TanstackProvider from "@/provider/providers.client";
import "flatpickr/dist/themes/light.css";
export const metadata = {
  title: {
    default: "Promise Delivery",
    template: `%s - Promise Delivery`,
  },
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang} dir="ltr">
      <TanstackProvider>
        <Providers>{children}</Providers>
      </TanstackProvider>
    </html>
  );
}
