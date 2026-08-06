package com.vjwebstudio.lumiere.service;

import com.vjwebstudio.lumiere.dto.ApiResponseDTO;
import com.vjwebstudio.lumiere.dto.ContactMessageDTO;
import com.vjwebstudio.lumiere.entity.ContactMessage;
import com.vjwebstudio.lumiere.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;

    public ApiResponseDTO processContactInquiry(ContactMessageDTO dto) {
        ContactMessage msg = ContactMessage.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .subject(dto.getSubject())
                .message(dto.getMessage())
                .build();

        contactMessageRepository.save(msg);
        return new ApiResponseDTO(true, "Inquiry received. Our concierge will contact you shortly.");
    }
}
