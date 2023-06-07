package nology.project.models;

import nology.project.responses.OptionContract;

import javax.persistence.*;

@Entity
@Table(name = "vegans")
public class Vegan implements OptionContract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;//vegan, not vegan
    private boolean isVegan;//true, false

//    @Override
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isVegan() {
        return isVegan;
    }

    public void setVegan(boolean vegan) {
        isVegan = vegan;
    }

    @Override
    public String toString() {
        return "Vegan{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", isVegan=" + isVegan +
                '}';
    }
}
