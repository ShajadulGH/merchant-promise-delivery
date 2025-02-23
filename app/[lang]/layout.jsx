import "../assets/scss/globals.scss";
import "../assets/scss/theme.scss";
import { siteConfig } from "@/config/site";
import Providers from "@/provider/providers";
import "simplebar-react/dist/simplebar.min.css";
import TanstackProvider from "@/provider/providers.client";
import "flatpickr/dist/themes/light.css";
import DirectionProvider from "@/provider/direction.provider";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <TanstackProvider>
        <Providers>
          <DirectionProvider>{children}</DirectionProvider>
        </Providers>
      </TanstackProvider>
    </html>
  );
}
