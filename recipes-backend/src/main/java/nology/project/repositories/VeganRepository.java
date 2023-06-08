package nology.project.repositories;

import nology.project.models.Recipes;
import nology.project.models.Vegan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;
import java.util.List;

@Table(name = "vegans")
@Repository
public interface VeganRepository extends JpaRepository<Vegan, Long> {
    @Query(value = "SELECT * FROM vegans", nativeQuery = true)
    List<Vegan> getVeganOptions();

}
