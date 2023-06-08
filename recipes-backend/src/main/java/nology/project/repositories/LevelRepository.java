package nology.project.repositories;

import nology.project.models.Level;
import nology.project.models.Vegan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;
import java.util.List;

@Table(name = "levels")
@Repository
public interface LevelRepository extends JpaRepository<Level, Long> {

    @Query(value = "SELECT * FROM levels", nativeQuery = true)
    List<Level> getLevelOptions();
}
