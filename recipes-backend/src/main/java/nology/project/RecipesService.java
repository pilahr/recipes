package nology.project;

import nology.project.models.Level;
import nology.project.models.Rating;
import nology.project.models.Recipes;
import nology.project.models.Vegan;
import nology.project.repositories.LevelRepository;
import nology.project.repositories.RatingRepository;
import nology.project.repositories.RecipesRepository;
import nology.project.repositories.VeganRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RecipesService {

    @Autowired
    RecipesRepository recipesRepository;
    @Autowired
    LevelRepository levelRepository;
    @Autowired
    RatingRepository ratingRepository;
    @Autowired
    VeganRepository veganRepository;


    //CREATE
    public Recipes addRecipe(Recipes recipe) {
        Level level = levelRepository.findById(recipe.getLevelId())
                .orElseThrow(() -> new NotFoundException("Level of difficulty Not Found"));

        Rating rating = ratingRepository.findById(recipe.getRatingId())
                .orElseThrow(() -> new NotFoundException("Rating Not Found"));

        Vegan vegan = veganRepository.findById(recipe.getVeganId())
                .orElseThrow(() -> new NotFoundException("Vegan recipe Not Found"));

        Recipes newRecipe = recipesRepository.save(recipe);

        System.out.println(newRecipe);

        newRecipe.setLevel(level);
        newRecipe.setRating(rating);
        newRecipe.setVegan(vegan);

        return newRecipe;
    }

    // READ
    public List<Long> getRecipesIds() {
        return recipesRepository.getDistinctId();
    }

    public Recipes getRecipeById(long id) {
        return recipesRepository.findById(id).orElseThrow(() -> new NotFoundException("Recipe Not Found"));
    }

    public List<Recipes> getAllRecipes(int limit) {
        return recipesRepository.getAllByOrderByFoodNameAsc()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }

    public List<String> getNationalities() {
        return recipesRepository.getDistinctNationality();
    }

    public List<Recipes> getRecipesByNationality(String nationality, int limit) {
        List<Recipes> recipes = recipesRepository.getAllRecipesByNationality(nationality);
        List<Recipes> recipesByNationality = recipes.stream()
                .limit(limit)
                .collect(Collectors.toList());
        return recipesByNationality;
    }

    public Recipes getRandomRecipe() {
        return recipesRepository.getRandomRecipe();
    }

    public List<Recipes> getVeganRecipes() {
        return recipesRepository.getVeganRecipes();
    }

    // UPDATE
    @Modifying
    public Recipes updateRecipe(Recipes newRecipe, long id) {
        if (!recipesRepository.existsById(id)) {
            throw new NotFoundException("Recipe Not Found");
        }

        Level level = levelRepository.findById(newRecipe.getLevelId())
                .orElseThrow(() -> new NotFoundException("Level of difficulty Not Found"));

        Rating rating = ratingRepository.findById(newRecipe.getRatingId())
                .orElseThrow(() -> new NotFoundException("Rating Not Found"));

        Vegan vegan = veganRepository.findById(newRecipe.getVeganId())
                .orElseThrow(() -> new NotFoundException("Vegan recipe Not Found"));
        newRecipe.setId(id);

        newRecipe.setId(id);
        recipesRepository.save(newRecipe);
        newRecipe.setLevel(level);
        newRecipe.setRating(rating);
        newRecipe.setVegan(vegan);

        return newRecipe;
    }

    // DELETE
    @Transactional
    public void deleteRecipeById(long id) {
        if (!recipesRepository.existsById(id)) {
            throw new NotFoundException("Recipe Not Found");
        }
        recipesRepository.deleteRecipeById(id);
    }
}
