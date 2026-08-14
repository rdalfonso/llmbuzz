import { Body, Button, Container, Head, Html, Preview, Section, Text } from '@react-email/components';

import styles from './ResetPasswordEmail.module.css';

interface ResetPasswordProps {
    url: string;
}

export const ResetPasswordEmail = ({ url }: ResetPasswordProps) => {
    return (
        <Html>
            <Head />
            <Preview>Reset your password</Preview>
            <Body className={styles.body}>
                <Container className={styles.container}>
                    <Text className={styles.text}>Hello,</Text>
                    <Text className={styles.text}>
                        We received a request to reset your password. Click the button below to set up a new password.
                    </Text>
                    <Section className={styles.section}>
                        <Button href={url} className={styles.content}>
                            Reset Password
                        </Button>
                    </Section>
                    <Text className={styles.content}>
                        This link will expire soon. If you didn't ask to reset your password, you can safely disregard this email.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};