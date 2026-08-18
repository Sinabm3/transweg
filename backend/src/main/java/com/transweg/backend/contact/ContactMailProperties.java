package com.transweg.backend.contact;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "contact")
public record ContactMailProperties(String recipientEmail, String fromEmail) {
}
