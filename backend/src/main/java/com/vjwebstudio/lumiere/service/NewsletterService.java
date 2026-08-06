package com.vjwebstudio.lumiere.service;

import com.vjwebstudio.lumiere.dto.ApiResponseDTO;
import com.vjwebstudio.lumiere.dto.NewsletterDTO;
import com.vjwebstudio.lumiere.entity.NewsletterSubscriber;
import com.vjwebstudio.lumiere.repository.NewsletterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NewsletterService {

    private final NewsletterRepository newsletterRepository;

    public ApiResponseDTO subscribe(NewsletterDTO dto) {
        if (newsletterRepository.findByEmail(dto.getEmail()).isPresent()) {
            return new ApiResponseDTO(true, "You are already subscribed to Lumière Privé!");
        }

        NewsletterSubscriber subscriber = NewsletterSubscriber.builder()
                .email(dto.getEmail())
                .build();

        newsletterRepository.save(subscriber);
        return new ApiResponseDTO(true, "Welcome to Lumière Privé! Check your email for your 15% voucher.");
    }
}
