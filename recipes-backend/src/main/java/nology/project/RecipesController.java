package nology.project;

import nology.project.models.Recipes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RecipesController {

    @Autowired
    RecipesService recipesService;

    @ExceptionHandler
    public String handleExceptions(RecipesNotFoundException exception) {
        return exception.getMessage();
    }

    // CREATE
    @PostMapping("/recipe")
    public ResponseEntity<Recipes> createRecipe(@RequestBody Recipes recipe) {
        recipesService.addRecipe(recipe);
        return ResponseEntity.status(HttpStatus.CREATED).body(recipe);
    }

    // READ
    @GetMapping("/recipes/ids")
    public ResponseEntity<List<Long>> getRecipesIds() {
        return ResponseEntity.status(HttpStatus.OK).body(recipesService.getRecipesIds());
    }

    @GetMapping("/recipes/nationalities")
    public ResponseEntity<List<String>> getRecipesByNationalities() {
        return ResponseEntity.status(HttpStatus.OK).body(recipesService.getNationalities());
    }

    @GetMapping("/recipes/vegans")
    public ResponseEntity<List<Recipes>> getVeganRecipes() {
        return ResponseEntity.status(HttpStatus.OK).body(recipesService.getVeganRecipes());
    }

    @GetMapping("/recipes")
    public ResponseEntity<List<Recipes>> getRecipes(@RequestParam(required = false) String nationality, @RequestParam(defaultValue = "20") int limit) {
        if (nationality != null) {
            return ResponseEntity.status(HttpStatus.OK).body(recipesService.getRecipesByNationality(nationality, limit));
        }
        return ResponseEntity.status(HttpStatus.OK).body(recipesService.getAllRecipes(limit));
    }

    @GetMapping("/recipe/random")
    public ResponseEntity<Recipes> getRandomRecipe() {
        return ResponseEntity.status(HttpStatus.OK).body(recipesService.getRandomRecipe());
    }

    @GetMapping("/recipe/{id}")
    public ResponseEntity<Recipes> getRecipeById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(recipesService.getRecipeById(id));
    }

    // UPDATE
    @PutMapping("/recipe/{id}")
    public ResponseEntity<Recipes> updateRecipe(@RequestBody Recipes newRecipe, @PathVariable long id) {
        newRecipe.setId(id);
        recipesService.updateRecipe(newRecipe, id);
        return ResponseEntity.status(HttpStatus.OK).body(newRecipe);
    }

    // Delete
    @DeleteMapping("/recipe/{id}")
    public ResponseEntity<String> deleteRecipeById(@PathVariable long id) {
        recipesService.deleteRecipeById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
