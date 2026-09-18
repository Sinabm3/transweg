package com.transweg.backend.review;

import java.time.Instant;

public record ReviewResponse(Long id, String name, int rating, String comment, Instant createdAt) {

    static ReviewResponse from(Review review) {
        return new ReviewResponse(
                review.getId(), review.getName(), review.getRating(), review.getComment(), review.getCreatedAt());
    }
}
