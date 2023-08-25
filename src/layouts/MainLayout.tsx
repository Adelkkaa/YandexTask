import { Header } from "@/widgets/header";
import { Navbar } from "@/widgets/navbar";
import { TopLeftImage } from "@/widgets/topLeftImage";

type Props = React.PropsWithChildren<{
  className: string;
}>;

export const MainLayout = ({ children, className }: Props) => {
  return (
    <div className="bg-purple w-full h-[100vh] text-white bg-cover bg-no-repeat relative overflow-y-hidden">
      <Header />
      <TopLeftImage />
      <Navbar />
      <main className={`${className} text-white`}>{children}</main>
    </div>
  );
};
