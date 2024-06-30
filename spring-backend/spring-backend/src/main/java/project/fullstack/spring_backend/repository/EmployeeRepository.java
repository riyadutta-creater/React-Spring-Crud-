package project.fullstack.spring_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.fullstack.spring_backend.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // all crud database methods
}


