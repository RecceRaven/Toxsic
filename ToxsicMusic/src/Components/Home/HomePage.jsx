import React from 'react';
import { Box, Button, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Ensure you have react-router-dom installed

function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleAgeVerification = () => {
    // Redirect to the About page
    navigate('/about');
  };

  return (
    <Box height="100vh" width="100vw" position="relative">
      <Image src="URL_TO_YOUR_BACKGROUND_IMAGE" alt="Artist Background" objectFit="cover" width="100%" height="100%" position="absolute" zIndex="-1" />
      <Button colorScheme="blue" onClick={onOpen} size="lg" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        Verify Age
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Age Verification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Please confirm that you are over 18 years old to continue.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAgeVerification}>
              I am over 18
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default HomePage;
