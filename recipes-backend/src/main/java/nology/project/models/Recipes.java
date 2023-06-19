package nology.project.models;

import org.springframework.context.annotation.EnableMBeanExport;

import javax.persistence.*;

@Entity
@Table(name = "recipes")
public class Recipes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String foodName;
    private String nationality;
    private double price;
    private String ingredients;
    private String method;
    private String imageUrl;

    private double rating;

//    @Column(name = "rating_id")
//    private long ratingId;
//
//    @OneToOne
//    @JoinColumn(name = "rating_id", insertable = false, updatable = false)
//    private Rating rating;

    @Column(name = "vegan_id")
    private long veganId;

    @ManyToOne
    @JoinColumn(name = "vegan_id", insertable = false, updatable = false)
    private Vegan vegan;

    @Column(name = "level_id")
    private long levelId;

    @ManyToOne
    @JoinColumn(name = "level_id", insertable = false, updatable = false)
    private Level level;

    public Recipes() {

    }

    public Recipes(long id, String foodName, String nationality, double price, String ingredients, String method, String imageUrl, double rating) {
        this.id = id;
        this.foodName = foodName;
        this.nationality = nationality;
        this.price = price;
        this.ingredients = ingredients;
        this.method = method;
        this.imageUrl = imageUrl;
        this.rating = rating;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    //    public long getRatingId() {
//        return ratingId;
//    }
//
//    public void setRatingId(long ratingId) {
//        this.ratingId = ratingId;
//    }
//
//    public Rating getRating() {
//        return rating;
//    }
//
//    public void setRating(Rating rating) {
//        this.rating = rating;
//    }

    public long getVeganId() {
        return veganId;
    }

    public void setVeganId(long veganId) {
        this.veganId = veganId;
    }

    public Vegan getVegan() {
        return vegan;
    }

    public void setVegan(Vegan vegan) {
        this.vegan = vegan;
    }

    public long getLevelId() {
        return levelId;
    }

    public void setLevelId(long levelId) {
        this.levelId = levelId;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

//    @Override
//    public String toString() {
//        return "Recipes{" +
//                "id=" + id +
//                ", foodName='" + foodName + '\'' +
//                ", nationality='" + nationality + '\'' +
//                ", price=" + price +
//                ", ingredients='" + ingredients + '\'' +
//                ", method='" + method + '\'' +
//                ", imageUrl='" + imageUrl + '\'' +
//                ", ratingId=" + ratingId +
//                ", rating=" + rating +
//                ", veganId=" + veganId +
//                ", vegan=" + vegan +
//                ", levelId=" + levelId +
//                ", level=" + level +
//                '}';
//    }


    @Override
    public String toString() {
        return "Recipes{" +
                "id=" + id +
                ", foodName='" + foodName + '\'' +
                ", nationality='" + nationality + '\'' +
                ", price=" + price +
                ", ingredients='" + ingredients + '\'' +
                ", method='" + method + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", rating=" + rating +
                ", veganId=" + veganId +
                ", vegan=" + vegan +
                ", levelId=" + levelId +
                ", level=" + level +
                '}';
    }
}
