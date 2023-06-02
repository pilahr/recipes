package nology.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipesService {

    private final List<Recipes> recipes = new ArrayList<>();
    @Autowired
    RecipesRepository recipesRepository;


    public void addRecipe(Recipes recipe) {

    }
}
