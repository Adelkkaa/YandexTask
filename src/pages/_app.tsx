import { AppProps } from "next/app";
import "@/shared/styles/styles.css";
import { MainLayout } from "@/layouts";
import { Overpass } from "next/font/google";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Transition } from "@/widgets/transition";
import dynamic from "next/dynamic";

const overpass = Overpass({ subsets: ["latin", "cyrillic"] });
const ToastContainer = dynamic(
  () =>
    import("react-toastify").then((comps) => ({
      default: comps.ToastContainer,
    })),
  { suspense: true }
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { route } = useRouter();
  return (
    <MainLayout className={overpass.className}>
      <AnimatePresence mode="wait">
        <motion.div key={route} className="h-full">
          <Transition />
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </motion.div>
      </AnimatePresence>
    </MainLayout>
  );
};

export default MyApp;
