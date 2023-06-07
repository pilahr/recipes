package nology.project.responses;

import org.springframework.stereotype.Component;

@Component
public class Option implements OptionContract{
    private long id;
    private String name;

    public Option() {

    }

    public Option(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
