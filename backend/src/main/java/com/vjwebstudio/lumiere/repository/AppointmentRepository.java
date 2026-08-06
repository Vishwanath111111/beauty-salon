package com.vjwebstudio.lumiere.repository;

import com.vjwebstudio.lumiere.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByClientEmail(String clientEmail);
}
