package com.transweg.backend.review;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;

@RestController
public class ReviewController {

    private final ReviewRepository reviewRepository;
    private final String adminToken;

    public ReviewController(
            ReviewRepository reviewRepository, @Value("${reviews.admin-token}") String adminToken) {
        this.reviewRepository = reviewRepository;
        this.adminToken = adminToken;
    }

    @GetMapping("/api/reviews")
    public List<ReviewResponse> listReviews() {
        return reviewRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(ReviewResponse::from)
                .toList();
    }

    @PostMapping("/api/reviews")
    public ResponseEntity<ReviewResponse> submitReview(@Valid @RequestBody ReviewRequest request) {
        String name = request.name() == null || request.name().isBlank() ? null : request.name().trim();
        var review = new Review(name, request.rating(), request.comment().trim(), Instant.now());
        var saved = reviewRepository.save(review);
        return ResponseEntity.status(HttpStatus.CREATED).body(ReviewResponse.from(saved));
    }

    @DeleteMapping("/api/reviews/{id}")
    public ResponseEntity<Void> deleteReview(
            @PathVariable Long id, @RequestHeader("X-Admin-Token") String token) {
        if (adminToken.isBlank() || !adminToken.equals(token)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        reviewRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
