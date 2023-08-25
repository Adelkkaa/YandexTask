import { AppProps } from "next/app";
import "@/shared/styles/styles.css";
import { MainLayout } from "@/layouts";
import { Overpass } from "next/font/google";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Transition } from "@/widgets/transition";

const overpass = Overpass({ subsets: ["latin", "cyrillic"] });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { route } = useRouter();
  return (
    <MainLayout className={overpass.className}>
      <AnimatePresence mode="wait">
        <motion.div key={route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </MainLayout>
  );
};

export default MyApp;
