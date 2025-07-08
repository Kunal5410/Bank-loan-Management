package com.bankloan.backend_bank.repayment.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
public class Repayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long repaymentId;

    private Long applicationId; // FK to LoanApplication

    private LocalDate dueDate;
    private BigDecimal amountDue;
    private LocalDate paymentDate;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    public enum PaymentStatus {
        PENDING, COMPLETED
    }

    // Getters and Setters
}
