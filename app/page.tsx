import HeroVinyl from "@/components/HeroVinyl";
import { Box, Image, VStack, Center, HStack, Heading } from "@chakra-ui/react";
export default function Home() {
  return (
    <Center>
      <VStack w="80%" spacing={8} align="center">
        <HStack>
            <Heading>Collection</Heading>
            <Image src="/icon.png" alt="Vinyl records" />
            <Heading>Mood</Heading> // Thinking of having a page where it shows several different moods and associated albums
        </HStack>
        <Box w="full" borderRadius="20px" opacity="82%">
            <HeroVinyl
            artist="Pink Floyd"
            album="The Dark Side of the Moon"
            year="1973"
            imageUrl="/dark-side-of-the-moon.png"
          />
        </Box>
      </VStack>
    </Center>
  );
}
