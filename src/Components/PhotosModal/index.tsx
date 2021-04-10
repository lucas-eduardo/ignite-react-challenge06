import React, { useEffect, useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Image,
  ModalBody,
  ModalCloseButton,
  Flex,
  Wrap,
} from "@chakra-ui/react";

import { api } from '../../services/api';

import { Fallback } from "./Fallback";
import { Header } from "./Header";
import { SeeMore } from "./SeeMore";

type ISearch = string;

interface IModalInfo {
  city: string;
  query: string;
}

interface IPhotosModalProps {
  modalInfo: IModalInfo;
  isOpen: boolean;
  onClose: () => void;
}

const MainImage = React.lazy(() => import("./MainImage"));

export const PhotosModal = ({
  modalInfo,
  isOpen,
  onClose,
}: IPhotosModalProps) => {
  const modalHeaderRef = useRef(null);
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    modalHeaderRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [mainImage]);

  useEffect(() => {
    async function searchImages() {
      setLoading(true);
      const { data } = await api.get<ISearch[]>(`images?query=${modalInfo.query}`);

      setMainImage(data[0]);
      setMainImage(data);
      
      setLoading(false);
    }
    
    searchImages();
  }, [modalInfo]);

  return (
    <Modal
      size="4xl"
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior={"outside"}
      initialFocusRef={modalHeaderRef}
    >
      <ModalOverlay />
      <ModalContent ref={modalHeaderRef} minHeight="80%">
        <ModalHeader>
          <Header title={modalInfo.city} />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex width="100%" align="center" justify="center">
            <Flex width="95%" maxWidth="760px" flexDir="column" align="center">
              {loading ? (
                <Fallback />
              ) : (
                <>
                  <React.Suspense fallback={<Fallback />}>
                    <MainImage src={mainImage} />
                  </React.Suspense>
                  <Wrap mt="2rem" align="flex-start" justify="center">
                    {images.map((image) => (
                      <Image
                        key={`thumb-${image}`}
                        width="180px"
                        height="auto"
                        src={image}
                        onClick={() => setMainImage(image)}
                        cursor="pointer"
                      />
                    ))}
                  </Wrap>
                  <SeeMore
                    href={`https://unsplash.com/s/photos/${modalInfo.query}`}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
