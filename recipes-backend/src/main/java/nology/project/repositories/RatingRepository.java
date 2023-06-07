package nology.project.repositories;

import nology.project.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;

@Table(name = "ratings")
@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
}
