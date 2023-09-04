package nology.project.repositories;

import nology.project.models.Recipes;
import nology.project.models.Vegan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipesRepository extends JpaRepository<Recipes, Long> {

    List<Recipes> getAllByOrderByFoodNameAsc();

    void deleteRecipeById(long id);

    List<Recipes> getAllRecipesByNationality(String nationality);

    @Query(value = "SELECT DISTINCT nationality FROM recipes ORDER BY nationality", nativeQuery = true)
    List<String> getDistinctNationality();

    @Query(value = "SELECT DISTINCT id FROM recipes ORDER BY id", nativeQuery = true)
    List<Long> getDistinctId();

    @Query(value = "SELECT * FROM recipes ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Recipes getRandomRecipe();

    @Query(value = "SELECT * FROM recipes INNER JOIN vegans ON recipes.vegan_id = vegans.id WHERE is_vegan = true", nativeQuery = true)
    List<Recipes> getVeganRecipes();


}
