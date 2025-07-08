package com.bankloan.backend_bank.repayment.repository;

import com.bankloan.backend_bank.repayment.model.Repayment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RepaymentRepository extends JpaRepository<Repayment, Long> {
    List<Repayment> findByApplicationId(Long applicationId);
}
