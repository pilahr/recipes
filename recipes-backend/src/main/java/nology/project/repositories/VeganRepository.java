package nology.project.repositories;

import nology.project.models.Vegan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;

@Table(name = "vegans")
@Repository
public interface VeganRepository extends JpaRepository<Vegan, Long> {
}
