package nology.project;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class RecipesRepository {
    private final List<Recipes> recipes = new ArrayList<>();

    public boolean hasRecipe(long id) { // check if it has id
        for(Recipes recipe: recipes) {
            if (recipe.getId() == id) {
                return true;
            }
        }
        return false;
    }
    // CREATE

    // READ


    // UPDATE
    // DELETE

}
