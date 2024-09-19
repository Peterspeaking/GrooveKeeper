import styles from "./page.module.css";
import { Image, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.page}>
      <VStack paddingTop="200px">
        <Image src="/icon.png" alt="Vinyl records" />
      </VStack>
    </div>
  );
}
