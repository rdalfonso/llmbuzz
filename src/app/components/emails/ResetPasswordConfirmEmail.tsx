import { Body, Button, Container, Head, Html, Preview, Section, Text } from '@react-email/components';

import styles from './ResetPasswordConfirmEmail.module.css';

interface ResetPasswordProps {
    url: string;
}

export const ResetPasswordConfirmEmail = ({ url }: ResetPasswordProps) => {
    return (
        <Html>
            <Head />
            <Preview>Your Careerjourneys.ai password has been reset</Preview>
            <Body className={styles.body}>
                <Container className={styles.container}>
                    <Text className={styles.text}>Hello,</Text>
                    <Text className={styles.text}>
                        Your password has been successfully reset. Click the button below to log in with your new password.
                    </Text>
                    <Section className={styles.section}>
                        <Button href={url} className={styles.content}>
                            Log In
                        </Button>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};