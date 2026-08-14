import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

import styles from './WelcomeEmail.module.css';

interface WelcomeEmailProps {
    name: string;
}

export function WelcomeEmail({ name }: WelcomeEmailProps) {
    return (
        <Html>
            <Head />

            <Preview>Welcome to CareerJourneys.ai!</Preview>

            <Body className={styles.body}>
                <Container className={styles.container}
                >
                    <Heading>Welcome, {name}!</Heading>

                    <Text>
                        Thanks for signing up. We're excited to have you on board.
                    </Text>

                    <Section className={styles.section}>
                        <Button
                            href="https://careerjourneys.ai/dashboard"
                            className={styles.button}
                        >
                            Open Dashboard
                        </Button>
                    </Section>

                    <Text className={styles.text}>
                        Thanks,<br />
                        The CareerJourneys.ai Team
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}