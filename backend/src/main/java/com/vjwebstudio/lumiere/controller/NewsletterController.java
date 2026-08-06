package com.vjwebstudio.lumiere.controller;

import com.vjwebstudio.lumiere.dto.ApiResponseDTO;
import com.vjwebstudio.lumiere.dto.NewsletterDTO;
import com.vjwebstudio.lumiere.service.NewsletterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/newsletter")
@RequiredArgsConstructor
public class NewsletterController {

    private final NewsletterService newsletterService;

    @PostMapping
    public ResponseEntity<ApiResponseDTO> subscribe(@Valid @RequestBody NewsletterDTO dto) {
        ApiResponseDTO response = newsletterService.subscribe(dto);
        return ResponseEntity.ok(response);
    }
}
