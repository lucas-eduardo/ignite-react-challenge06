import { useState, useCallback } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Flex, useDisclosure } from "@chakra-ui/react";

import { continents } from "../utils/continents";

import { Header } from "../Components/Header";
import { ContinentBanner } from "../Components/ContinentBanner";
import { ContinentDetail } from "../Components/ContinentDescription";
import { ContinentCities } from "../Components/ContinentCities";
import { PhotosModal } from "../Components/PhotosModal";


interface ICity {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}

interface IContinentProps {
  continent: {
    id: string;
    name: string;
    call: string;
    callImage: string;
    bannerImage: string;
    about: string;
    countries: number;
    languages: number;
    cities100: number;
    cities: ICity[];
  };
}

interface IModalInfo {
  city: string;
  query: string;
}

export default function Continent({ continent }: IContinentProps) {
  const [modalInfo, setModalInfo] = useState<IModalInfo>({
    city: "",
    query: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = useCallback(({ city, query }: IModalInfo) => {
    setModalInfo({ city, query });
    onOpen();
  }, [setModalInfo, onOpen]);

  return (
    <>
      <Head>
        <title>{`WorldTrip | ${continent.name}`}</title>
        <meta
          name="description"
          content={`Conheça as cidades mais visitadas da ${continent.name} e prepare sua viagem`}
        ></meta>
      </Head>
      <Flex width="100%" flexDir="column" bg="gray.50" align="center">
        <Header />
        <ContinentBanner name={continent.name} image={continent.bannerImage} />
        <ContinentDetail
          about={continent.about}
          countries={continent.countries}
          languages={continent.languages}
          cities100={continent.cities100}
        />
        <ContinentCities cities={continent.cities} onClickCard={openModal} />
      </Flex>
      <PhotosModal modalInfo={modalInfo} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: continents.map((continent) => {
      return {
        params: {
          id: continent.id,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  return {
    props: {
      continent: continents.find((continent) => continent.id === id),
    },
  };
};
