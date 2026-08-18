package com.transweg.backend.contact;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@EnableConfigurationProperties(ContactMailProperties.class)
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final JavaMailSender mailSender;
    private final ContactMailProperties mailProperties;

    public ContactService(JavaMailSender mailSender, ContactMailProperties mailProperties) {
        this.mailSender = mailSender;
        this.mailProperties = mailProperties;
    }

    public void sendContactMessage(ContactRequest request) {
        var mail = new SimpleMailMessage();
        mail.setTo(mailProperties.recipientEmail());
        if (mailProperties.fromEmail() != null && !mailProperties.fromEmail().isBlank()) {
            mail.setFrom(mailProperties.fromEmail());
        }
        mail.setSubject("Transweg Kontaktanfrage: " + request.title());
        mail.setText("""
                Neue Nachricht über das Kontaktformular auf transweg.at

                Name: %s
                Titel: %s

                Nachricht:
                %s
                """.formatted(request.name(), request.title(), request.message()));

        try {
            mailSender.send(mail);
        } catch (MailException e) {
            // SMTP relays fail transiently (auth expiry, provider outage); the caller
            // must know this is not a validation error so it can return 502 not 400.
            log.error("Failed to send contact message from {}", request.name(), e);
            throw new ContactMailDeliveryException("Nachricht konnte nicht gesendet werden.", e);
        }
    }
}
