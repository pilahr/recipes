package nology.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecipesController {

    @Autowired
    RecipesService recipesService;

    @ExceptionHandler
    public String handleExceptions(RecipesNotFoundException exception) {
        return exception.getMessage();
    }

    // CREATE
    @PostMapping("/recipe")
    public Recipes createRecipes(@RequestBody Recipes recipes) {
        recipesService.addRecipe(recipes);
        return recipes;
    }

    // READ
    @GetMapping("/recipes/ids")
    public List<Long> getRecipesIds() {
        return recipesService.getRecipesIds();
    }

    @GetMapping("/recipes")
    public List<Recipes> getRecipes() {
        return recipesService.getAllRecipes();
    }
//
//    @GetMapping("/recipes/vegans")
//    public List<String> getVeganRecipes() {
//        return recipesService.getVeganRecipes();
//    }
//
//    @GetMapping("/recipes/nationalities")
//    public List<String> getRecipesByNationalities() {
//        return recipesService.getNationalities();
//    }
//
//    @GetMapping("/recipes")
//    public List<Recipes> getRecipes(@RequestParam(required = false) String nationality, @RequestParam(defaultValue = "10") int limit) {
//        if (nationality != null) {
//            return recipesService.getRecipesByNationalities(nationality, limit);
//        }
//        return recipesService.getAllRecipies(limit);
//    }
//
//    @GetMapping("/recipe/random")
//    public Recipes getRandomRecipe() {
//        return recipesService.getRandomRecipe();
//    }
//
//    @GetMapping("/recipe/{id}")
//    public Recipes getRecipeById(@PathVariable long id) {
//        return recipesService.getRecipeById(id);
//    }
//
//    // UPDATE
//    @PutMapping("/recipe/{id}")
//    public Recipes updateRecipe(@RequestBody Recipes newRecipe, @PathVariable long id) {
//        newRecipe.setId(id);
//        recipesService.updateRecipe(newRecipe, id);
//        return newRecipe;
//    }
//
//    // Delete
//    @DeleteMapping("/recipe/{id}")
//    public String deleteRecipeById(@PathVariable long id) {
//        recipesService.deleteRecipeById(id);
//        return "Recipe Deleted";
//    }
}
