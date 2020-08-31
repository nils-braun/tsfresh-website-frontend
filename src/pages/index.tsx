import { FC, useEffect } from 'react';
import AOS from "aos";

import Header from "../components/header";
import Hero from "../components/hero";
import UseCase from "../components/usecase";
import UsedIn from "../components/usedin";
import Content from "../components/content";
import GettingStarted from "../components/gettingstarted";
import Action from "../components/action";
import Footer from "../components/footer";

export interface HomePageProps {};

const HomePage: FC<HomePageProps> = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  });

  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
      <Header />
      <Hero />
      <UseCase />
      <UsedIn />
      <Content />
      <GettingStarted />
      <Action />
      <Footer />
    </div>
  );
}

export default HomePage;
