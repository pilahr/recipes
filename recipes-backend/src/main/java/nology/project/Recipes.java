package nology.project;

public class Recipes {
    private long id;
    private static long nextId = 1;
    private String foodName;
    private String nationality;
    private float price;
    private String ingredients;
    private String method;
    private float rating;
    private String level;
    private boolean isVegan;

    public Recipes(long id, String foodName, String nationality, float price, String ingredients, String method, float rating, String level, boolean isVegan) {
        this.id = id;
        nextId++;
        this.foodName = foodName;
        this.nationality = nationality;
        this.price = price;
        this.ingredients = ingredients;
        this.method = method;
        this.rating = rating;
        this.level = level;
        this.isVegan = isVegan;
    }

    public long generateId() {
        return id++;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public boolean isVegan() {
        return isVegan;
    }

    public void setVegan(boolean vegan) {
        isVegan = vegan;
    }
}
