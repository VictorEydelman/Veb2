package Units;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class Dataone implements Serializable {
    private double x;
    private double y;
    private double r;
    private String result;
    private Date queryTime;

    public Dataone(double x, double y, double r, String result, Date queryTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        this.queryTime = queryTime;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String isResult() {
        return result;
    }

    public Date getQueryTime() {
        return queryTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (! (o instanceof Dataone)) return false;
        Dataone entry = (Dataone) o;
        return Double.compare(entry.getX(), getX()) == 0 && Double.compare(entry.getY(), getY()) == 0 && Double.compare(entry.getR(), getR()) == 0 && isResult() == entry.isResult() && Objects.equals(getQueryTime(), entry.getQueryTime());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getX(), getY(), getR(), isResult(), getQueryTime());
    }
}
