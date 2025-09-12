import MainBlockFAQ from "@/components/documents/MainBlockFAQ";
import HeaderDocumentText from "@/components/documents/header";
import DocumentText from "@/components/documents/text";
import Wrapper from "@/components/Layout/Wrapper";
import BottomBanner from "@/components/Pages/Index/Banner";
import { Zap } from "lucide-react";
import FaqSubtitle from "@/components/documents/Subtitle";

const Faq = () => {
  return (
    <>
      <Wrapper className="flex flex-col mt-25 sm:mt-0 gap-[48px]">
        <HeaderDocumentText>Часто задаваемые вопросы</HeaderDocumentText>
        <MainBlockFAQ>
          <FaqSubtitle>А вот если метеорит упадет?</FaqSubtitle>
          <DocumentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DocumentText>
        </MainBlockFAQ>
        <MainBlockFAQ>
          <FaqSubtitle>А вот если метеорит упадет?</FaqSubtitle>
          <DocumentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DocumentText>
        </MainBlockFAQ>
        <MainBlockFAQ>
          <FaqSubtitle>А вот если метеорит упадет?</FaqSubtitle>
          <DocumentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DocumentText>
        </MainBlockFAQ>
        <MainBlockFAQ>
          <FaqSubtitle>А вот если метеорит упадет?</FaqSubtitle>
          <DocumentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DocumentText>
        </MainBlockFAQ>
        <MainBlockFAQ>
          <FaqSubtitle>А вот если метеорит упадет?</FaqSubtitle>
          <DocumentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DocumentText>
        </MainBlockFAQ>
        <MainBlockFAQ>
          <FaqSubtitle>А вот если метеорит упадет?</FaqSubtitle>
          <DocumentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DocumentText>
        </MainBlockFAQ>
        <MainBlockFAQ>
          <FaqSubtitle>А вот если метеорит упадет?</FaqSubtitle>
          <DocumentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DocumentText>
        </MainBlockFAQ>
        <BottomBanner
          title="Волки используют Aetérna"
          text="А ты бездарь, до сих пор платишь бездарям фронтендерам за работу. Не будь лохом, и используй наш сервис"
          showBottomLogo={true}
          showBorderSvg={false}
          FirstButton="Войти в редактор"
          SecondButton="Войти в аккаунт"
          icon={<Zap />}
        />
      </Wrapper>
    </>
  );
};

export default Faq;
