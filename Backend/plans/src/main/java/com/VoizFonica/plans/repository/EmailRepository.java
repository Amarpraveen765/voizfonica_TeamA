package com.VoizFonica.plans.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.VoizFonica.plans.entity.Mail;

public interface EmailRepository extends JpaRepository<Mail, Integer> {

}
