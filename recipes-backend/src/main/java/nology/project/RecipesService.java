package nology.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RecipesService {

    @Autowired
    RecipesRepository recipesRepository;


    //CREATE
    public void addRecipe(Recipes recipe) {
        recipesRepository.save(recipe);
    }

    // READ
    public List<Long> getRecipesIds() {
        return recipesRepository.getDistinctId();
    }

    public Recipes getRecipeById(long id) {
        Optional<Recipes> recipe = recipesRepository.findById(id);
        if (recipe.isEmpty()) {
            throw new RecipesNotFoundException();
        }
        return recipe.get();
    }

    public List<Recipes> getAllRecipes(int limit) {
        return recipesRepository.findAll()
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
    public void updateRecipe(Recipes newRecipe, long id) {
        if (!recipesRepository.existsById(id)) {
            throw new RecipesNotFoundException();
        }
        newRecipe.setId(id);

        recipesRepository.save(newRecipe);
    }

    // DELETE
    @Transactional
    public void deleteRecipeById(long id) {
        if (!recipesRepository.existsById(id)) {
            throw new RecipesNotFoundException();
        }
        recipesRepository.deleteRecipeById(id);
    }
}
