package nology.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecipesService {

    @Autowired
    RecipesRepository recipesRepository;


    //CREATE
    public void addRecipe(Recipes recipe) {
        recipesRepository.addRecipe(recipe);
    }

    public List<Long> getRecipesIds() {
        List<Recipes> recipes = recipesRepository.getAllRecipes();
        List<Long> recipesIds = recipes
                .stream()
                .map(recipe -> recipe.getId())
                .collect(Collectors.toList());
        return recipesIds;
    }

    public Recipes getRecipeById(long id) {
        if(!recipesRepository.hasRecipe(id)) {
            throw new RecipesNotFoundException();
        }
        return recipesRepository.getRecipeById(id);
    }

    public List<Recipes> getAllRecipes() {
        return recipesRepository.getAllRecipes()
                .stream()
                .collect(Collectors.toList());
    }
}
