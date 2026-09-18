package com.transweg.backend.review;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;

@RestController
public class ReviewController {

    private final ReviewRepository reviewRepository;

    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
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
}
