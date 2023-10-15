import { Container, Description, Heading } from "./Home-style";

// Home.js
export default function Home() {
  return (
    <Container>
         <Heading>Welcome to the Contact Manager App</Heading>
      <Description>
        This app helps you manage your contacts efficiently. You can add,
        edit, and delete contacts with ease.
      </Description>
      <p>
        Get started by navigating to the "Contacts" section and explore the
        features.
      </p>
    </Container>
  );
}
