package com.bankloan.backend_bank.repayment.controller;

import com.bankloan.backend_bank.repayment.model.Repayment;
import com.bankloan.backend_bank.repayment.service.RepaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/repayments")
public class RepaymentController {

    @Autowired
    private RepaymentService repaymentService;

    @GetMapping("/schedule/{applicationId}")
    public List<Repayment> getRepaymentSchedule(@PathVariable Long applicationId) {
        return repaymentService.getRepaymentSchedule(applicationId);
    }

    @PostMapping("/pay/{repaymentId}")
    public Repayment makePayment(@PathVariable Long repaymentId, @RequestParam String paymentDate) {
        return repaymentService.makePayment(repaymentId, LocalDate.parse(paymentDate));
    }

    @GetMapping("/outstanding/{applicationId}")
    public BigDecimal getOutstandingBalance(@PathVariable Long applicationId) {
        return repaymentService.getOutstandingBalance(applicationId);
    }
}
