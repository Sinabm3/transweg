package com.transweg.backend.contact;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(
        @NotBlank(message = "Name ist erforderlich.") @Size(max = 100) String name,
        @NotBlank(message = "Titel ist erforderlich.") @Size(max = 150) String title,
        @NotBlank(message = "Nachricht ist erforderlich.") @Size(max = 5000) String message) {
}
