package com.transweg.backend.contact;

public class ContactMailDeliveryException extends RuntimeException {

    public ContactMailDeliveryException(String message, Throwable cause) {
        super(message, cause);
    }
}
