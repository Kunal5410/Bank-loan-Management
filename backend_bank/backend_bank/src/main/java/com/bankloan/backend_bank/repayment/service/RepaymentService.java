package com.bankloan.backend_bank.repayment.service;

import com.bankloan.backend_bank.repayment.model.Repayment;
import com.bankloan.backend_bank.repayment.repository.RepaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
public class RepaymentService {

    @Autowired
    private RepaymentRepository repaymentRepository;

    public List<Repayment> getRepaymentSchedule(Long applicationId) {
        return repaymentRepository.findByApplicationId(applicationId);
    }

    public Repayment makePayment(Long repaymentId, LocalDate paymentDate) {
        Repayment repayment = repaymentRepository.findById(repaymentId)
            .orElseThrow(() -> new RuntimeException("Repayment not found"));
        repayment.setPaymentDate(paymentDate);
        repayment.setPaymentStatus(Repayment.PaymentStatus.COMPLETED);
        return repaymentRepository.save(repayment);
    }

    public BigDecimal getOutstandingBalance(Long applicationId) {
        List<Repayment> repayments = repaymentRepository.findByApplicationId(applicationId);
        return repayments.stream()
            .filter(r -> r.getPaymentStatus() == Repayment.PaymentStatus.PENDING)
            .map(Repayment::getAmountDue)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
