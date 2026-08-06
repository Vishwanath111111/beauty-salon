package com.vjwebstudio.lumiere.controller;

import com.vjwebstudio.lumiere.dto.ApiResponseDTO;
import com.vjwebstudio.lumiere.dto.ContactMessageDTO;
import com.vjwebstudio.lumiere.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponseDTO> submitContact(@Valid @RequestBody ContactMessageDTO dto) {
        ApiResponseDTO response = contactService.processContactInquiry(dto);
        return ResponseEntity.ok(response);
    }
}
