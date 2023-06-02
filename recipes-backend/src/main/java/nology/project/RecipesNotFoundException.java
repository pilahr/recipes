package nology.project;

public class RecipesNotFoundException extends RuntimeException{

    public RecipesNotFoundException() {
        super("Recipes have not been found");
    }
}
