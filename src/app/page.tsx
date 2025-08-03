import Image from "next/image";
import Header from "@/components/Header";
import Container from "@/components/Layout/Container";
import ContainerText from "@/components/Layout/Banner/MainContainerText";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="flex w-[1280px] mx-auto bg-black flex-col gap-8">
        <Header />
        <Container />
        <div className="w-[100%] py-[128px] px-[280px] text-center justify-center gap-6 flex flex-col items-center">
          <ContainerText
            title="Волки используют Aetérna"
            subtitle="А ты бездарь, до сих пор платишь бездарям фронтендерам за работу. Не будь лохом, и используй наш сервис"
            rocketButtonText="Газ"
            secondButtonText="Войти в аккаунт"
          />
        </div>
        <Footer />
      </section>
    </>
  );
}
