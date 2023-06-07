package nology.project.repositories;

import nology.project.models.Level;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;

@Table(name = "levels")
@Repository
public interface LevelRepository extends JpaRepository<Level, Long> {
}
