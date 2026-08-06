package com.vjwebstudio.lumiere.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AppointmentDTO {
    private Long id;

    @NotBlank(message = "Guest name is required")
    private String clientName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String clientEmail;

    @NotBlank(message = "Phone number is required")
    private String clientPhone;

    @NotBlank(message = "Service ID is required")
    private String serviceId;

    @NotBlank(message = "Service name is required")
    private String serviceName;

    private String therapistId;
    private String therapistName;

    @NotBlank(message = "Date is required")
    private String preferredDate;

    @NotBlank(message = "Time is required")
    private String preferredTime;

    private String notes;
    private String status;
    private String createdAt;
}
