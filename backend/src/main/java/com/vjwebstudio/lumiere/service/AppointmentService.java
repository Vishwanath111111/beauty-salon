package com.vjwebstudio.lumiere.service;

import com.vjwebstudio.lumiere.dto.AppointmentDTO;
import com.vjwebstudio.lumiere.entity.Appointment;
import com.vjwebstudio.lumiere.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    public AppointmentDTO createAppointment(AppointmentDTO dto) {
        Appointment appointment = Appointment.builder()
                .clientName(dto.getClientName())
                .clientEmail(dto.getClientEmail())
                .clientPhone(dto.getClientPhone())
                .serviceId(dto.getServiceId())
                .serviceName(dto.getServiceName())
                .therapistId(dto.getTherapistId())
                .therapistName(dto.getTherapistName())
                .preferredDate(dto.getPreferredDate())
                .preferredTime(dto.getPreferredTime())
                .notes(dto.getNotes())
                .status("CONFIRMED")
                .build();

        Appointment saved = appointmentRepository.save(appointment);
        dto.setId(saved.getId());
        dto.setStatus(saved.getStatus());
        dto.setCreatedAt(saved.getCreatedAt().toString());
        return dto;
    }

    public AppointmentDTO getAppointmentById(Long id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with ID: " + id));

        AppointmentDTO dto = new AppointmentDTO();
        dto.setId(appointment.getId());
        dto.setClientName(appointment.getClientName());
        dto.setClientEmail(appointment.getClientEmail());
        dto.setClientPhone(appointment.getClientPhone());
        dto.setServiceId(appointment.getServiceId());
        dto.setServiceName(appointment.getServiceName());
        dto.setTherapistId(appointment.getTherapistId());
        dto.setTherapistName(appointment.getTherapistName());
        dto.setPreferredDate(appointment.getPreferredDate());
        dto.setPreferredTime(appointment.getPreferredTime());
        dto.setNotes(appointment.getNotes());
        dto.setStatus(appointment.getStatus());
        dto.setCreatedAt(appointment.getCreatedAt().toString());
        return dto;
    }

    public List<AppointmentDTO> getAllAppointments() {
        return appointmentRepository.findAll().stream().map(a -> {
            AppointmentDTO dto = new AppointmentDTO();
            dto.setId(a.getId());
            dto.setClientName(a.getClientName());
            dto.setClientEmail(a.getClientEmail());
            dto.setClientPhone(a.getClientPhone());
            dto.setServiceId(a.getServiceId());
            dto.setServiceName(a.getServiceName());
            dto.setTherapistId(a.getTherapistId());
            dto.setTherapistName(a.getTherapistName());
            dto.setPreferredDate(a.getPreferredDate());
            dto.setPreferredTime(a.getPreferredTime());
            dto.setNotes(a.getNotes());
            dto.setStatus(a.getStatus());
            dto.setCreatedAt(a.getCreatedAt().toString());
            return dto;
        }).collect(Collectors.toList());
    }
}
