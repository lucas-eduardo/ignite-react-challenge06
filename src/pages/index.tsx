import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { continents } from "../utils/continents";

import { Header } from "../Components/Header";
import { Banner } from "../Components/Banner";
import { TravelTypes } from "../Components/TravelTypes";
import { CallToAction } from "../Components/CallToAction";

interface IContinent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface IHomeProps {
  continents: IContinent[];
}

export default function Home({ continents }: IHomeProps) {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
        <meta
          name="description"
          content="Conheça as 100 cidades mais visitadas do mundo e prepare sua viagem"
        ></meta>
      </Head>
      <Flex width="100%" flexDir="column" bg="gray.50" align="center">
        <Header />

        <Banner />

        <TravelTypes />

        <CallToAction continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      continents: continents.map((continent) => ({
        id: continent.id,
        name: continent.name,
        call: continent.call,
        callImage: continent.callImage,
      })),
    },
  };
};
